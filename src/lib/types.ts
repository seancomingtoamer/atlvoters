// ATL Voters - TypeScript interfaces for Airtable records

export interface Article {
  id: string;
  title: string;
  slug: string;
  body: string;
  tier: "1" | "2" | "3";
  sourceUrls: string;
  pollQuestion: string;
  pollOptions: string;
  status: "Draft" | "Published" | "Archived";
  publishedDate: string;
  viewCount: number;
}

export interface Comment {
  id: string;
  articleId: string;
  authorName: string;
  comment: string;
  perspective: "Left" | "Right" | "Moderate" | "Funny";
  type: "Simulated" | "Real";
  postedDate: string;
}

export interface Poll {
  id: string;
  articleId: string;
  question: string;
  options: string;
  votes: string;
}

export interface EmailSignup {
  id: string;
  email: string;
  source: "Poll Gate" | "Quiz" | "Breaking Alerts";
  quizResult: string | null;
  signupDate: string;
  status: "Active" | "Unsubscribed";
}

// Airtable API response types

export interface AirtableRecord<T> {
  id: string;
  createdTime: string;
  fields: Partial<T>;
}

export interface AirtableListResponse<T> {
  records: AirtableRecord<T>[];
  offset?: string;
}

// Raw Airtable field maps (field names as stored in Airtable)

export interface ArticleFields {
  Title: string;
  Slug: string;
  Body: string;
  Tier: string;
  Source_URLs: string;
  Poll_Question: string;
  Poll_Options: string;
  Status: string;
  Published_Date: string;
  View_Count: number;
}

export interface CommentFields {
  Article_ID: string[];
  Author_Name: string;
  Comment: string;
  Perspective: string;
  Type: string;
  Posted_Date: string;
}

export interface PollFields {
  Article_ID: string[];
  Question: string;
  Options: string;
  Votes: string;
}

export interface EmailFields {
  Email: string;
  Source: string;
  Quiz_Result: string;
  Signup_Date: string;
  Status: string;
}
