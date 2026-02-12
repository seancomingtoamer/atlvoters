# ATL Voters - Design Document
**Date:** 2026-02-12
**Status:** Approved - Ready to Build
**Agent:** Aria (Marketing Director)
**Empire HQ Record:** rec66gTECZoj7h30Y

---

## 1. Concept

**ATL Voters** is a non-partisan, AI-powered political content site.
**Tagline:** "Nobody's Safe. Everybody's Accountable."

The site is the **TMZ of Atlanta politics** — a sharp, witty political commentator that roasts both sides equally. National drama headlines drive traffic, Atlanta local angles build loyal readership. 100% automated content pipeline powered by AI.

**Voice:** Trevor Noah meets a local news anchor who stopped caring. Informed, funny, equal-opportunity roaster. Never takes a side. Both Trump supporters and Biden supporters see the other side getting roasted.

**Domain:** atlvoters.com ($0.01 + $21.99/yr renewal)

---

## 2. Content Strategy

### Content Tiers (priority order for daily selection)

**Tier 1 — THE HEADLINE (National Fire)**
The big salacious story everyone's arguing about. Trump did this. Biden said that. Congress is fighting. Supreme Court dropped a bomb. ICE raids. Border drama. Scandals. Indictments. Whatever is BURNING nationally — front page headline.

**Tier 2 — THE LOCAL ANGLE**
How the Tier 1 story hits Atlanta/Georgia. Every national story has a local ripple. "Trump signs executive order on X — here's how Georgia's economy takes the hit."

**Tier 3 — ATLANTA EXCLUSIVE**
Pure local: mayor drama, city council beef, Buckhead politics, Georgia state legislature moves. Secondary stories below the headline.

### Content Cadence
- **Launch:** 1x per day (cost control while testing)
- **Ramp up:** 3-5x per day once dialed in
- **AI model:** GPT-5.2 ($1.75/1M input, $14.00/1M output)

### AI Content Pipeline (per article)
1. **Selector** — Reads all headlines, picks the spiciest story
2. **Writer** — Rewrites in ATL Voters voice (400-600 words + clickbait headline)
3. **Comment Generator** — 4 mock comments (conservative, progressive, moderate/funny, wildcard)
4. **Poll Maker** — Creates engaging poll with 3-4 options (one always funny/non-partisan)

---

## 3. Site Architecture

### Tech Stack
| Component | Technology |
|-----------|-----------|
| Frontend | Next.js 16 + Tailwind CSS |
| Hosting | Vercel (free tier) |
| Database/CMS | Airtable (Empire HQ base) |
| Automation | n8n Cloud |
| AI Writer | OpenAI GPT-5.2 |
| News Sources | RSS feeds + News API |
| Notifications | Telegram (Sean) |
| Analytics | Google Analytics (GA4) |
| Ads | Google AdSense |

### Pages
- `/` — Homepage (newspaper grid layout)
- `/article/[slug]` — Individual article page
- `/quiz` — "What Kind of ATL Voter Are You?" quiz
- `/archive` — All articles (paginated)

### Design Specs (Anti-AI Aesthetic)
- **Colors:** White background (#FFFFFF), black text (#111111), bold red accent (#DC2626)
- **Font:** Inter (sharp sans-serif) — no playful/rounded fonts
- **Edges:** Square corners everywhere. No rounded pills. No soft shadows.
- **Layout:** Newspaper grid. Dense. Text-forward.
- **Rules:** No gradients. No blobs. No illustrations. No purple. No rounded corners.

---

## 4. Homepage Layout

```
+--------------------------------------------------+
|  ATL VOTERS           [About] [Archive] [Search] |
|  "Nobody's Safe. Everybody's Accountable."       |
+--------------------------------------------------+
|                                                  |
|  ## BREAKING ##                                  |
|  [TIER 1 HEADLINE - Big, bold, clickable]        |
|  Subtitle/teaser text...                         |
|  [READ MORE]                                     |
|                                                  |
|  +--- POLL --------------------------------+     |
|  | Was this the right move?                 |     |
|  | ( ) Option A  ( ) Option B  ( ) Funny    |     |
|  +------------------------------------------+    |
|                                                  |
+--- TODAY IN ATLANTA ---+----- TRENDING ----------+
|                        |                         |
| [Tier 2/3 stories]     | [Most commented]        |
| - Local story 1        | - Story +342 comments   |
| - Local story 2        | - Story +218 comments   |
| - Local story 3        | - Story +189 comments   |
|                        |                         |
+--- AD SPACE -----------+-------------------------+
| [Google AdSense / Sponsor Banner]                |
+--------------------------------------------------+
| Breaking Alerts: [email] [GET ALERTS]  (footer)  |
+--------------------------------------------------+
```

### Article Page
- Big bold headline
- Article body (400-600 words)
- Inline poll mid-article
- Ad placement (mid-article)
- Comment section (mock + real)
- Social share buttons with OG preview cards
- "More Stories" sidebar
- Ad placements: top banner, mid-article, sidebar

---

## 5. Lead Magnets & Email Collection

### 5.1 Poll Results Gate (on every article)
User votes in poll, sees their own vote + teaser (first option %). Remaining results are blurred. Enter email to unlock full breakdown.

**Why it works:** They already voted — psychological investment. They NEED to see if their side is winning.

### 5.2 "What Kind of ATL Voter Are You?" Quiz
5-question political quiz. Non-partisan, fun, shareable.

**Result Types:**
- **The Buckhead Conservative** — "Fiscally focused, socially 'mind your business.'"
- **The Midtown Moderate** — "You annoy both sides equally. Respect."
- **The East Side Progressive** — "Big ideas, big energy, big opinions."
- **The Atlanta Wildcard** — "You voted for the person, not the party."

Email required to see result. People screenshot and share = viral loop.

### 5.3 Breaking Alerts (sticky footer)
"ATL political news moves fast. Be first." — email input + submit. Non-intrusive, always visible.

### Email Storage
All emails stored in `ATLVoters_Emails` table. Segmented by source (poll/quiz/alerts) for future newsletter targeting.

---

## 6. Monetization Strategy

### Revenue Streams (all passive, stacked)
1. **Google AdSense** — Display ads. Political content = premium CPMs ($5-15 CPM). Placements: top banner, mid-article, sidebar.
2. **Affiliate Links** — VPN services, legal services, local business promotions. Sidebar + contextual in-article.
3. **Email List** — Build now, monetize later with newsletter sponsorships. Political email lists are high-value.
4. **Sponsored Content Slots** — Future: local politicians, organizations pay for featured placement.

### Revenue Projections (conservative)
| Monthly Visitors | Ad Revenue (est.) | Affiliate (est.) | Total |
|-----------------|-------------------|-------------------|-------|
| 5,000 | $50-100 | $25-50 | $75-150 |
| 10,000 | $150-300 | $50-100 | $200-400 |
| 50,000 | $750-1,500 | $250-500 | $1,000-2,000 |
| 100,000 | $1,500-3,000 | $500-1,000 | $2,000-4,000 |

Political niches historically over-index on ad revenue due to high advertiser demand during election cycles.

---

## 7. Airtable Schema

### ATLVoters_Articles
| Field | Type | Purpose |
|-------|------|---------|
| Title | Text | Clickbait headline |
| Slug | Text | URL-friendly version |
| Body | Long Text | 400-600 word article |
| Tier | Select (1/2/3) | National / Local Angle / ATL Exclusive |
| Source_URLs | Text | Original news sources |
| Poll_Question | Text | Article's poll question |
| Poll_Options | Text | JSON array of options |
| Status | Select | Draft / Published / Archived |
| Published_Date | Date | When published |
| View_Count | Number | Track popularity |

### ATLVoters_Comments
| Field | Type | Purpose |
|-------|------|---------|
| Article_ID | Link | Links to article |
| Author_Name | Text | Generated or real name |
| Comment | Long Text | Comment text |
| Perspective | Select | Left / Right / Moderate / Funny |
| Type | Select | Simulated / Real |
| Posted_Date | Date | Timestamp |

### ATLVoters_Polls
| Field | Type | Purpose |
|-------|------|---------|
| Article_ID | Link | Links to article |
| Question | Text | Poll question |
| Options | Text | JSON array of choices |
| Votes | Text | JSON vote counts |

### ATLVoters_Emails
| Field | Type | Purpose |
|-------|------|---------|
| Email | Email | Collected email |
| Source | Select | Poll Gate / Quiz / Breaking Alerts |
| Quiz_Result | Text | Voter type (if from quiz) |
| Signup_Date | Date | When collected |
| Status | Select | Active / Unsubscribed |

---

## 8. n8n Workflow Architecture

### Workflow 1: "ATL Voters — Daily Content Engine"
**Trigger:** Cron — 6:00 AM EST daily

```
[Cron 6AM]
  -> [RSS Node: AP, AJC, CNN, Fox, Reuters]
  -> [News API Node: "Atlanta" + "Georgia" + "Trump" filters]
  -> [Merge headlines]
  -> [AI: SELECTOR (GPT-5.2)]
     "Pick the #1 most salacious national story
      and the #1 Atlanta story. Return both with source URLs."
  -> [AI: WRITER (GPT-5.2)]
     "You are the ATL Voters commentator. Sharp, witty,
      roasts both sides. Trevor Noah meets local anchor.
      Write: clickbait headline + 400-600 word article.
      End with Atlanta angle. Never take a side."
  -> [AI: COMMENT GENERATOR (GPT-5.2)]
     "Generate 4 mock comments: conservative, progressive,
      moderate/funny, wildcard. Realistic first names."
  -> [AI: POLL MAKER (GPT-5.2)]
     "Create poll with 3-4 options. One funny/non-partisan
      like 'They're ALL tripping'."
  -> [Airtable: Create Article]
  -> [Airtable: Create 4 Comments]
  -> [Airtable: Create Poll]
  -> [Telegram: Notify Sean]
```

### Workflow 2: "ATL Voters — Email Collector"
**Trigger:** Webhook `/atlvoters-email`

```
[Webhook]
  -> [Airtable: Search existing email]
  -> [IF new] -> [Create record] -> [Respond: success + results]
  -> [IF exists] -> [Respond: already subscribed]
```

### Workflow 3: "ATL Voters — Poll Vote Handler"
**Trigger:** Webhook `/atlvoters-vote`

```
[Webhook]
  -> [Airtable: Get poll record]
  -> [Update vote counts]
  -> [Respond with updated percentages]
```

---

## 9. Cost Analysis

### Monthly Operating Costs
| Item | 1x/day | 5x/day |
|------|--------|--------|
| AI (GPT-5.2) | $1.35 | $6.75 |
| News API (free tier) | $0 | $0 |
| Vercel (free tier) | $0 | $0 |
| Airtable (free tier) | $0 | $0 |
| n8n (existing plan) | $0 | $0 |
| Domain (annual) | ~$1.83/mo | ~$1.83/mo |
| **Total** | **~$3.18** | **~$8.58** |

### Break-even
At political CPM rates ($5-15), break-even at ~1,000-2,000 monthly pageviews. Achievable within first month of consistent content.

---

## 10. Build Plan

### Phase 1 — Foundation (Day 1)
- [x] Design complete
- [x] Empire HQ project created
- [x] Tasks created
- [ ] **Sean:** Buy atlvoters.com domain
- [ ] Create Next.js project
- [ ] Create 4 Airtable tables
- [ ] Build site (homepage, article page, quiz)

### Phase 2 — Content Engine (Day 2)
- [ ] Build n8n Workflow 1: Daily Content Engine
- [ ] Configure RSS feeds
- [ ] Get News API key (free tier)
- [ ] Tune AI prompts for ATL Voters voice
- [ ] Test run: generate first article

### Phase 3 — Engagement Layer (Day 3)
- [ ] Build poll voting system
- [ ] Build poll results gate (email unlock)
- [ ] Build voter quiz (5 questions + 4 result types)
- [ ] Build email collector webhook
- [ ] Breaking alerts sticky footer
- [ ] Social share cards (Open Graph meta tags)

### Phase 4 — Monetization (Day 4-5)
- [ ] Google Analytics setup
- [ ] Google AdSense application
- [ ] Ad placements configured
- [ ] Affiliate links in sidebar

### Phase 5 — Launch
- [ ] GitHub repo created
- [ ] Vercel deployment
- [ ] DNS connected (atlvoters.com)
- [ ] n8n workflows activated
- [ ] First real article published
- [ ] Social seeding for initial traffic

---

## 11. James Dickerson "Vibe Marketing" Applied

| Principle | Implementation |
|-----------|---------------|
| Don't guess, research first | News API + RSS = real trending data |
| Build a tool, not a whitepaper | Voter quiz + poll gate = interactive lead magnets |
| Unique mechanism | "Non-partisan roast" = nobody else doing this |
| Direct response copy | Every headline written to trigger clicks |
| Anti-corporate aesthetic | Sharp edges, newspaper grid, no AI slop |
| Programmatic content | AI writes daily, zero manual effort |
| Stack revenue streams | Ads + affiliates + email list + sponsorships |

---

## 12. Agent Assignment

**Aria** (Marketing Director) owns ATL Voters content and growth strategy.

**Responsibilities:**
- Content voice and tone guidelines
- Social media distribution strategy
- SEO keyword targeting for political content
- Growth metrics tracking
- Future: newsletter content and sponsorship outreach

**Claude** (CTO) handles all technical build and infrastructure.
