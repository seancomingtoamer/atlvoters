import Link from "next/link";

// ============================================================
// MOCK DATA
// ============================================================

const FEATURED_ARTICLE = {
  slug: "tiffany-henyard-fulton-county-nino-brown",
  category: "Investigations",
  headline:
    "America's Worst Mayor Fled to Atlanta. Now She Wants Your Tax Dollars.",
  subheadline:
    "Meet Mayor Nino Brown -- She Ran Dolton Like New Jack City. Fulton County Is Next.",
  teaser:
    "Tiffany Henyard -- the Illinois mayor who dressed as Nino Brown at a board meeting, hired a sex offender, blew taxpayer money in Vegas, and lost reelection 88-12 -- just filed to run for Fulton County Commissioner. As a Republican. While under FBI investigation. Atlanta, she's HERE.",
  author: "Marcus Reed",
  date: "March 11, 2026",
  readTime: "7 min read",
};

const TIER2_ARTICLES = [
  {
    slug: "trump-executive-order-both-sides",
    category: "Federal",
    headline: "Trump Just Signed an Order That Has Both Sides Losing Their Minds",
    teaser:
      "The latest executive action targets federal funding to cities with sanctuary policies. Atlanta stands to lose $340 million. The mayor says he won't comply. The governor says he will.",
    author: "Marcus Reed",
    date: "February 12, 2026",
    commentCount: 127,
  },
  {
    slug: "ice-spotted-gwinnett-county",
    category: "Federal",
    headline: "ICE Spotted in Gwinnett County -- Here's What Went Down",
    teaser:
      "Witnesses report federal agents at a Norcross shopping center. Local police say they weren't notified. Community leaders are demanding answers.",
    author: "Denise Carter",
    date: "February 12, 2026",
    commentCount: 47,
  },
  {
    slug: "mayor-dickens-fires-back-kemp",
    category: "City Hall",
    headline: "Mayor Dickens Fires Back at Governor Kemp Over Transit Funding",
    teaser:
      "The war of words between Atlanta's mayor and Georgia's governor escalated today over $2.1 billion in MARTA expansion funds that the state is threatening to withhold.",
    author: "Jason Liu",
    date: "February 11, 2026",
    commentCount: 82,
  },
  {
    slug: "georgia-legislature-new-bill",
    category: "Gold Dome",
    headline: "Georgia Legislature Pushes New Bill That Nobody Asked For",
    teaser:
      "HB 1247 would require all Atlanta city employees to undergo 'patriotism training.' The bill's sponsor says it's about unity. Everyone else says it's about the primary.",
    author: "Tanya Brooks",
    date: "February 11, 2026",
    commentCount: 156,
  },
  {
    slug: "fulton-county-da-investigation",
    category: "Investigations",
    headline:
      "Fulton County DA's Office Under Fire for Mishandled Evidence in Gang Case",
    teaser:
      "Defense attorneys allege prosecutors lost key surveillance footage. Three defendants may walk. The DA's office calls it a clerical error.",
    author: "Marcus Reed",
    date: "February 10, 2026",
    commentCount: 34,
  },
  {
    slug: "buckhead-cityhood-back-again",
    category: "City Hall",
    headline: "Buckhead Cityhood Is Back -- And This Time They Have the Votes",
    teaser:
      "A new coalition of Buckhead business owners and state legislators have revived the push to secede from Atlanta. Supporters say the numbers finally work.",
    author: "Denise Carter",
    date: "February 10, 2026",
    commentCount: 211,
  },
  {
    slug: "atlanta-water-bills-skyrocket",
    category: "City Hall",
    headline:
      "Atlanta Water Bills Are Skyrocketing and Nobody at City Hall Will Explain Why",
    teaser:
      "Residents in Southwest Atlanta report bills tripling overnight. The Department of Watershed Management blames meter upgrades. Residents blame incompetence.",
    author: "Tanya Brooks",
    date: "February 9, 2026",
    commentCount: 98,
  },
];

const TRENDING_ARTICLES = [...TIER2_ARTICLES].sort(
  (a, b) => b.commentCount - a.commentCount
);

const POLL = {
  question: "Should Tiffany Henyard be allowed to run for office in Fulton County?",
  options: [
    "Absolutely not -- we saw what she did in Illinois",
    "Yes -- everyone deserves a second chance in a new city",
    "Only if she settles things with the FBI first",
    "I'm just here for the Nino Brown cosplay at board meetings",
  ],
};

// ============================================================
// PAGE COMPONENT
// ============================================================

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 pb-24">
      {/* ==================== HERO ==================== */}
      <section className="py-8 border-b-[3px] border-[#111111]">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-[#DC2626] text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1">
            Breaking
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            {FEATURED_ARTICLE.category}
          </span>
        </div>
        <Link href={`/article/${FEATURED_ARTICLE.slug}`}>
          <h2 className="text-3xl md:text-5xl font-black leading-tight text-[#111111] hover:text-[#DC2626] transition-colors mb-3">
            {FEATURED_ARTICLE.headline}
          </h2>
        </Link>
        {FEATURED_ARTICLE.subheadline && (
          <p className="text-xl md:text-2xl font-bold text-[#DC2626] italic mb-4">
            {FEATURED_ARTICLE.subheadline}
          </p>
        )}
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mb-4">
          {FEATURED_ARTICLE.teaser}
        </p>
        <div className="flex items-center gap-4 text-xs text-gray-500 uppercase tracking-wider font-medium">
          <span>By {FEATURED_ARTICLE.author}</span>
          <span className="w-1 h-1 bg-gray-400"></span>
          <span>{FEATURED_ARTICLE.date}</span>
          <span className="w-1 h-1 bg-gray-400"></span>
          <span>{FEATURED_ARTICLE.readTime}</span>
        </div>
        <Link
          href={`/article/${FEATURED_ARTICLE.slug}`}
          className="inline-block mt-5 text-xs font-bold uppercase tracking-widest text-[#DC2626] border-b-2 border-[#DC2626] pb-0.5 hover:text-[#111111] hover:border-[#111111] transition-colors"
        >
          Read More
        </Link>
      </section>

      {/* ==================== POLL WIDGET ==================== */}
      <section className="py-8 border-b border-[#111111]">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#111111] text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1">
              Poll
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Vote Now
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-[#111111] mb-5">
            {POLL.question}
          </h3>
          <form className="space-y-3">
            {POLL.options.map((option, idx) => (
              <label
                key={idx}
                className="flex items-start gap-3 p-3 border border-gray-200 hover:border-[#111111] cursor-pointer transition-colors group"
              >
                <input
                  type="radio"
                  name="poll"
                  value={idx}
                  className="mt-0.5 accent-[#DC2626]"
                />
                <span className="text-sm font-medium text-gray-800 group-hover:text-[#111111]">
                  {option}
                </span>
              </label>
            ))}
            <button
              type="button"
              className="bg-[#DC2626] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-red-700 transition-colors mt-2"
            >
              Vote
            </button>
          </form>
        </div>
      </section>

      {/* ==================== TODAY IN ATLANTA ==================== */}
      <section className="py-8 border-b border-[#111111]">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-xl font-black uppercase tracking-tight text-[#111111]">
            Today in Atlanta
          </h2>
          <div className="flex-1 border-t border-[#111111]"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {TIER2_ARTICLES.map((article, idx) => (
            <article
              key={article.slug}
              className={`p-4 ${
                idx < TIER2_ARTICLES.length - 1
                  ? "border-b md:border-b-0 md:border-r border-gray-200"
                  : ""
              } ${idx >= 3 ? "lg:border-t border-gray-200" : ""} ${
                idx % 3 === 2 ? "md:border-r-0" : ""
              }`}
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#DC2626]">
                {article.category}
              </span>
              <Link href={`/article/${article.slug}`}>
                <h3 className="text-lg font-bold text-[#111111] leading-tight mt-1 mb-2 hover:text-[#DC2626] transition-colors">
                  {article.headline}
                </h3>
              </Link>
              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                {article.teaser}
              </p>
              <div className="flex items-center gap-2 text-[10px] text-gray-400 uppercase tracking-wider font-medium">
                <span>{article.author}</span>
                <span className="w-0.5 h-0.5 bg-gray-300"></span>
                <span>{article.date}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ==================== AD PLACEHOLDER ==================== */}
      <section className="py-8 border-b border-[#111111]">
        <div className="border-2 border-dashed border-gray-300 py-12 flex items-center justify-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
            Advertisement
          </span>
        </div>
      </section>

      {/* ==================== TRENDING ==================== */}
      <section className="py-8">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-xl font-black uppercase tracking-tight text-[#111111]">
            Trending
          </h2>
          <div className="flex-1 border-t border-[#111111]"></div>
        </div>
        <div className="space-y-0">
          {TRENDING_ARTICLES.map((article, idx) => (
            <article
              key={article.slug}
              className={`flex items-start gap-4 py-4 ${
                idx < TRENDING_ARTICLES.length - 1
                  ? "border-b border-gray-200"
                  : ""
              }`}
            >
              <span className="text-3xl font-black text-gray-200 leading-none min-w-[2rem] text-right">
                {idx + 1}
              </span>
              <div className="flex-1">
                <Link href={`/article/${article.slug}`}>
                  <h3 className="text-base font-bold text-[#111111] leading-tight hover:text-[#DC2626] transition-colors">
                    {article.headline}
                  </h3>
                </Link>
                <div className="flex items-center gap-3 mt-1.5 text-[10px] text-gray-500 uppercase tracking-wider font-medium">
                  <span className="text-[#DC2626]">{article.category}</span>
                  <span className="w-0.5 h-0.5 bg-gray-300"></span>
                  <span>{article.author}</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-sm font-bold text-gray-500 whitespace-nowrap">
                <span className="text-base">&#128293;</span>
                <span>{article.commentCount}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
