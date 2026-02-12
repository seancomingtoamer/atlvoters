// ATL Voters - Airtable Integration Library
// Uses Airtable REST API directly via fetch (no npm package)

import type {
  Article,
  Comment,
  Poll,
  EmailSignup,
  AirtableRecord,
  AirtableListResponse,
  ArticleFields,
  CommentFields,
  PollFields,
  EmailFields,
} from "./types";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const AIRTABLE_BASE_ID = "appNbcFPHeO45oSEY";
const AIRTABLE_API_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}`;

const TABLES = {
  articles: "ATLVoters_Articles",
  comments: "ATLVoters_Comments",
  polls: "ATLVoters_Polls",
  emails: "ATLVoters_Emails",
} as const;

function getToken(): string {
  const token = process.env.AIRTABLE_TOKEN;
  if (!token) {
    throw new Error(
      "AIRTABLE_TOKEN environment variable is not set. Add it to .env.local."
    );
  }
  return token;
}

function headers(): HeadersInit {
  return {
    Authorization: `Bearer ${getToken()}`,
    "Content-Type": "application/json",
  };
}

// ---------------------------------------------------------------------------
// Generic helpers
// ---------------------------------------------------------------------------

async function airtableFetch<T>(
  table: string,
  params?: Record<string, string>
): Promise<AirtableListResponse<T>> {
  const url = new URL(`${AIRTABLE_API_URL}/${encodeURIComponent(table)}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  const res = await fetch(url.toString(), { headers: headers(), cache: "no-store" });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(
      `Airtable API error (${res.status}) on ${table}: ${body}`
    );
  }

  return res.json() as Promise<AirtableListResponse<T>>;
}

async function airtableCreate<T>(
  table: string,
  fields: Record<string, unknown>
): Promise<AirtableRecord<T>> {
  const url = `${AIRTABLE_API_URL}/${encodeURIComponent(table)}`;

  const res = await fetch(url, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ fields }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(
      `Airtable create error (${res.status}) on ${table}: ${body}`
    );
  }

  return res.json() as Promise<AirtableRecord<T>>;
}

async function airtableUpdate<T>(
  table: string,
  recordId: string,
  fields: Record<string, unknown>
): Promise<AirtableRecord<T>> {
  const url = `${AIRTABLE_API_URL}/${encodeURIComponent(table)}/${recordId}`;

  const res = await fetch(url, {
    method: "PATCH",
    headers: headers(),
    body: JSON.stringify({ fields }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(
      `Airtable update error (${res.status}) on ${table}/${recordId}: ${body}`
    );
  }

  return res.json() as Promise<AirtableRecord<T>>;
}

// ---------------------------------------------------------------------------
// Record mappers (Airtable fields -> app types)
// ---------------------------------------------------------------------------

function mapArticle(record: AirtableRecord<ArticleFields>): Article {
  const f = record.fields;
  return {
    id: record.id,
    title: f.Title ?? "",
    slug: f.Slug ?? "",
    body: f.Body ?? "",
    tier: (f.Tier as Article["tier"]) ?? "1",
    sourceUrls: f.Source_URLs ?? "",
    pollQuestion: f.Poll_Question ?? "",
    pollOptions: f.Poll_Options ?? "[]",
    status: (f.Status as Article["status"]) ?? "Draft",
    publishedDate: f.Published_Date ?? "",
    viewCount: f.View_Count ?? 0,
  };
}

function mapComment(record: AirtableRecord<CommentFields>): Comment {
  const f = record.fields;
  return {
    id: record.id,
    articleId: f.Article_ID?.[0] ?? "",
    authorName: f.Author_Name ?? "",
    comment: f.Comment ?? "",
    perspective: (f.Perspective as Comment["perspective"]) ?? "Moderate",
    type: (f.Type as Comment["type"]) ?? "Simulated",
    postedDate: f.Posted_Date ?? "",
  };
}

function mapPoll(record: AirtableRecord<PollFields>): Poll {
  const f = record.fields;
  return {
    id: record.id,
    articleId: f.Article_ID?.[0] ?? "",
    question: f.Question ?? "",
    options: f.Options ?? "[]",
    votes: f.Votes ?? "{}",
  };
}

function mapEmail(record: AirtableRecord<EmailFields>): EmailSignup {
  const f = record.fields;
  return {
    id: record.id,
    email: f.Email ?? "",
    source: (f.Source as EmailSignup["source"]) ?? "Breaking Alerts",
    quizResult: f.Quiz_Result ?? null,
    signupDate: f.Signup_Date ?? "",
    status: (f.Status as EmailSignup["status"]) ?? "Active",
  };
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Fetch published articles sorted by Published_Date descending.
 * @param limit - Max number of articles to return (default: 20, max: 100)
 */
export async function getArticles(limit: number = 20): Promise<Article[]> {
  const data = await airtableFetch<ArticleFields>(TABLES.articles, {
    filterByFormula: "{Status} = 'Published'",
    "sort[0][field]": "Published_Date",
    "sort[0][direction]": "desc",
    maxRecords: String(Math.min(limit, 100)),
  });

  return data.records.map(mapArticle);
}

/**
 * Get a single article by its URL slug.
 * Returns null if no matching published article is found.
 */
export async function getArticleBySlug(
  slug: string
): Promise<Article | null> {
  const data = await airtableFetch<ArticleFields>(TABLES.articles, {
    filterByFormula: `AND({Slug} = '${slug.replace(/'/g, "\\'")}', {Status} = 'Published')`,
    maxRecords: "1",
  });

  if (data.records.length === 0) return null;
  return mapArticle(data.records[0]);
}

/**
 * Get comments linked to an article by article title.
 * Uses a formula to match the linked Article_ID record's Title field.
 * Comments are sorted by Posted_Date ascending (oldest first).
 */
export async function getCommentsByArticle(
  articleTitle: string
): Promise<Comment[]> {
  // Airtable linked records: filter by the primary field value of the linked table
  const escaped = articleTitle.replace(/'/g, "\\'");
  const data = await airtableFetch<CommentFields>(TABLES.comments, {
    filterByFormula: `FIND('${escaped}', ARRAYJOIN({Article_ID}, ','))`,
    "sort[0][field]": "Posted_Date",
    "sort[0][direction]": "asc",
  });

  return data.records.map(mapComment);
}

/**
 * Get the poll associated with an article by article title.
 * Returns null if no poll is found.
 */
export async function getPollByArticle(
  articleTitle: string
): Promise<Poll | null> {
  const escaped = articleTitle.replace(/'/g, "\\'");
  const data = await airtableFetch<PollFields>(TABLES.polls, {
    filterByFormula: `FIND('${escaped}', ARRAYJOIN({Article_ID}, ','))`,
    maxRecords: "1",
  });

  if (data.records.length === 0) return null;
  return mapPoll(data.records[0]);
}

/**
 * Submit an email signup. Checks for duplicates first.
 * @returns Object with success status and message.
 */
export async function submitEmail(
  email: string,
  source: string,
  quizResult?: string
): Promise<{ success: boolean; message: string; isNew: boolean }> {
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Invalid email address.", isNew: false };
  }

  // Check for duplicate
  const existing = await airtableFetch<EmailFields>(TABLES.emails, {
    filterByFormula: `{Email} = '${email.replace(/'/g, "\\'")}'`,
    maxRecords: "1",
  });

  if (existing.records.length > 0) {
    return {
      success: true,
      message: "You're already signed up!",
      isNew: false,
    };
  }

  // Create new record
  const fields: Record<string, unknown> = {
    Email: email.trim().toLowerCase(),
    Source: source,
    Signup_Date: new Date().toISOString().split("T")[0],
    Status: "Active",
  };

  if (quizResult) {
    fields.Quiz_Result = quizResult;
  }

  await airtableCreate<EmailFields>(TABLES.emails, fields);

  return { success: true, message: "Thanks for signing up!", isNew: true };
}

/**
 * Submit a vote on a poll. Increments the vote count for the chosen option.
 * @param pollId - The Airtable record ID of the poll
 * @param option - The option text the user voted for
 * @returns Updated vote counts as a parsed object, or null on failure.
 */
export async function submitVote(
  pollId: string,
  option: string
): Promise<{ success: boolean; votes: Record<string, number> | null }> {
  // Fetch current poll record to get existing votes
  const url = `${AIRTABLE_API_URL}/${encodeURIComponent(TABLES.polls)}/${pollId}`;
  const res = await fetch(url, { headers: headers(), cache: "no-store" });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Airtable fetch error (${res.status}) on poll ${pollId}: ${body}`);
  }

  const record = (await res.json()) as AirtableRecord<PollFields>;
  const currentVotes: Record<string, number> = record.fields.Votes
    ? JSON.parse(record.fields.Votes)
    : {};

  // Validate that the option exists in the poll's options
  const options: string[] = record.fields.Options
    ? JSON.parse(record.fields.Options)
    : [];

  if (options.length > 0 && !options.includes(option)) {
    return { success: false, votes: null };
  }

  // Increment vote count
  currentVotes[option] = (currentVotes[option] ?? 0) + 1;

  // Write updated votes back
  await airtableUpdate<PollFields>(TABLES.polls, pollId, {
    Votes: JSON.stringify(currentVotes),
  });

  return { success: true, votes: currentVotes };
}

/**
 * Get total count of published articles.
 */
export async function getArticleCount(): Promise<number> {
  const data = await airtableFetch<ArticleFields>(TABLES.articles, {
    filterByFormula: "{Status} = 'Published'",
    "fields[]": "Title", // Only fetch one field to minimize payload
  });

  return data.records.length;
}

/**
 * Get total count of email signups.
 */
export async function getEmailCount(): Promise<number> {
  const data = await airtableFetch<EmailFields>(TABLES.emails, {
    "fields[]": "Email", // Only fetch one field to minimize payload
  });

  return data.records.length;
}
