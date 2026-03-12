import Link from "next/link";

// ============================================================
// MOCK DATA
// ============================================================

interface Comment {
  id: number;
  author: string;
  perspective: string;
  perspectiveColor: string;
  text: string;
  likes: number;
  date: string;
}

interface Article {
  slug: string;
  category: string;
  headline: string;
  subheadline?: string;
  author: string;
  date: string;
  readTime: string;
  body: string[];
  commentCount: number;
  comments: Comment[];
}

interface MoreStory {
  slug: string;
  category: string;
  headline: string;
  author: string;
}

const ARTICLES: Record<string, Article> = {
  "tiffany-henyard-fulton-county-nino-brown": {
    slug: "tiffany-henyard-fulton-county-nino-brown",
    category: "Investigations",
    headline:
      "America's Worst Mayor Fled to Atlanta. Now She Wants Your Tax Dollars.",
    subheadline:
      "Meet Mayor Nino Brown -- She Ran Dolton Like New Jack City. Fulton County Is Next.",
    author: "Marcus Reed",
    date: "March 11, 2026",
    readTime: "7 min read",
    body: [
      "ATLANTA -- Fulton County, we need to talk. Because while you were minding your business, paying your taxes, and trying to figure out what's happening with MARTA, a woman named Tiffany A. Henyard quietly moved to town, opened a clothing boutique in College Park, and filed paperwork to run for your District 5 County Commissioner seat. As a Republican. While under active FBI investigation. On the March 5th deadline. Like a student turning in a term paper at 11:59 PM.",
      "If you don't know who Tiffany Henyard is, congratulations -- your blood pressure is probably normal. For the rest of us who've been watching this saga unfold like a Netflix series that keeps getting renewed despite terrible reviews, Henyard is the former mayor of Dolton, Illinois -- a small suburb south of Chicago that she turned into her personal playground. She was so controversial, so brazen, so unapologetically chaotic that the internet gave her the title nobody campaigns for: America's Worst Mayor.",
      "And now she's our problem.",
      "Let's talk about the Nino Brown incident, because if you haven't seen it, you need to sit down for this. In 2023, at an official Dolton Village Board meeting -- a government proceeding, mind you -- Mayor Henyard walked in dressed as Wesley Snipes' drug kingpin character from New Jack City. Full leather outfit. She brought a stuffed dog to recreate the intimidation scene. She had a personal DJ. And when it was time to remind residents to pay their taxes, she had that DJ spin Rihanna's \"Bitch Better Have My Money.\" At a board meeting. Where the minutes are recorded. Where someone's grandmother was probably sitting in the front row.",
      "But the Nino Brown cosplay was just the opening act. Henyard also hired a convicted sex offender named Lavell Redmond -- a man who served 25 years in prison for the gang rape and beating of two teenage girls -- and gave him a badge as a code enforcement officer. A job that involves going into people's homes. FOX 32 Chicago obtained video of Redmond at a back-to-school event with children, badge on his waist, standing next to the mayor. When confronted about it, Henyard said her friend \"deserved a second chance.\" The residents of Dolton had a different word for it.",
      "Then there were the Las Vegas trips. Taxpayer-funded credit card charges at restaurants near the Strip, including Cafe Hollywood and Hot and Juicy Crawfish. When a reporter asked Henyard point blank if she flew first class to Vegas on taxpayer money, her response was legendary: \"No comment... Any other questions?\" When pressed about how taxpayer dollars were being spent, she said, \"I just answered it.\" Ma'am, you did not.",
      "She spent an estimated $779,000 on village credit cards in a single year. A million dollars on a personal police security detail. Her hair and makeup team was on the public payroll. When former Chicago Mayor Lori Lightfoot -- yes, that Lori Lightfoot -- was brought in to audit the books, she found the village had gone from a $5.6 million surplus to a $3.6 million deficit. That's a $9.2 million swing. In a town with a population of about 23,000.",
      "The people of Dolton eventually got their say. In February 2025, Henyard lost her reelection bid by a margin that can only be described as political extinction. Trustee Jason House beat her 88% to 12%. On election night, Henyard was a no-show at her own party. She called in by phone and said, \"The people have spoken and God must have a different plan for me.\" Earlier that same day, she told reporters, \"I am confident that I will have a landslide this evening.\" She got one. Just not the kind she meant.",
      "So what was God's plan? Apparently, Fulton County, Georgia.",
      "Henyard surfaced in the Atlanta area in late 2025, opening a clothing store called New Wave in College Park. In a podcast interview, she described her move as chasing \"opportunity\" and pivoted to talking about her fashion sense. \"Everybody was into my fashion during my four years,\" she said. \"My hair was always laid.\" Girl, the town was broke but the edges were snatched. Priorities.",
      "Then, on March 5th, 2026, the Atlanta Journal-Constitution reported that a Tiffany A. Henyard, listed as a Republican business owner, had qualified to run for the Fulton County Board of Commissioners District 5 seat. She is the only Republican in the race. The district is overwhelmingly Democratic. Four Democrats are also running for the seat being vacated by Marvin Arrington Jr.",
      "Yes, you read that right. The woman who ran as a Democrat in Illinois, campaigned as a Democrat, pulled Democrat ballots her entire career, is now running as a Republican. In a recent interview, she said, \"People keep voting for Democrats, but the Democrats aren't doing anything for the Black community. I lived it. My very own is the ones that was attacking me.\" She also said Republicans \"are doing a good job\" right now. The Fulton County GOP has not publicly endorsed her. They're probably still processing.",
      "Emory University political scientist Andra Gillespie told FOX 5 Atlanta that Henyard faces \"significant challenges\" as both a newcomer and a Republican in a deep blue district. She called it what most people are thinking: this is a carpetbagger situation, and the voters of District 5 are unlikely to be charmed by someone who just registered to vote in Georgia on February 27th, 2026 -- six days before qualifying.",
      "Oh, and one more thing. While Henyard is out here trying to restart her political career in a new state, the FBI is still investigating her finances from Thornton Township. Her former police chief, Lewis Lacey, has already pled guilty to bankruptcy fraud and is cooperating with the feds. Her village administrator, Keith Freeman, is also facing federal charges. A judge recently ordered Henyard to pay $10,000 in unpaid rent in Illinois. She didn't show up for that hearing either.",
      "Fulton County, consider this your public service announcement. The woman who turned a small Illinois town into a meme, who played Rihanna at government meetings, who hired a convicted rapist and gave him a badge, who left a $3.6 million hole in the budget, who lost 88-12 and called it God's plan -- she's HERE. She's filed. And she wants to manage YOUR tax dollars.",
      "As Nate the Lawyer put it on his YouTube channel when he broke this story down: is this the same Tiffany A. Henyard? All signs point to yes. Same name, same county, same energy. And if you're a voter in District 5, you now have homework to do before May 19th.",
      "Nobody's safe. Everybody's accountable. Welcome to Atlanta, Tiffany. We do things different down here.",
      "Editor's Note: This article was inspired by reporting from Nate the Lawyer on YouTube, with additional sourcing from the Atlanta Journal-Constitution, FOX 5 Atlanta, CBS News Atlanta, Chicago Sun-Times, and WGN Investigates.",
    ],
    commentCount: 342,
    comments: [
      {
        id: 1,
        author: "CollegeParkResident",
        perspective: "Progressive",
        perspectiveColor: "bg-green-100 text-green-800",
        text: "I live in District 5. I just want y'all to know -- we are NOT doing this. She's been here five minutes and wants to run things? Ma'am, you can't even run a village of 23,000 without the FBI showing up.",
        likes: 247,
        date: "1 hour ago",
      },
      {
        id: 2,
        author: "SouthFultonVoter",
        perspective: "Moderate",
        perspectiveColor: "bg-gray-200 text-gray-700",
        text: "The Nino Brown board meeting video is one of the greatest pieces of political footage in American history and I will not be taking questions on that. But no, she should absolutely not be anywhere near a budget.",
        likes: 189,
        date: "2 hours ago",
      },
      {
        id: 3,
        author: "BuckheadRepublican",
        perspective: "Conservative",
        perspectiveColor: "bg-blue-100 text-blue-800",
        text: "Speaking as an actual Republican -- we don't claim her. She switched parties because Democrats kicked her out. That's not a political conversion, that's witness protection.",
        likes: 312,
        date: "3 hours ago",
      },
      {
        id: 4,
        author: "ATLPoliticsJunkie",
        perspective: "Progressive",
        perspectiveColor: "bg-green-100 text-green-800",
        text: "She registered to vote in Georgia SIX DAYS before the filing deadline. The audacity is actually impressive. Wrong, but impressive.",
        likes: 156,
        date: "4 hours ago",
      },
      {
        id: 5,
        author: "EastPointWildcard",
        perspective: "Wildcard",
        perspectiveColor: "bg-red-100 text-red-800",
        text: "If she shows up to a Fulton County commission meeting in a leather trench coat with a DJ and a stuffed dog I am calling in sick to work to watch that livestream. Some things are bigger than a paycheck.",
        likes: 401,
        date: "5 hours ago",
      },
    ],
  },
  "bibi-calling-shots-iran-war-day-11": {
    slug: "bibi-calling-shots-iran-war-day-11",
    category: "Federal",
    headline:
      "Is Bibi Calling the Shots? The Iran War Is 11 Days In and Nobody's Sure Who's Driving.",
    author: "Jason Liu",
    date: "March 11, 2026",
    readTime: "5 min read",
    body: [
      "It has now been 11 days since the United States and Israel launched coordinated military strikes against Iran on February 28th, and if you're confused about what's happening, who started it, and who's actually in charge -- congratulations, you're paying attention.",
      "Here's what we know. On February 28th, US and Israeli forces launched a joint military operation striking targets inside Iran, including military infrastructure in Tehran and sites connected to Iran's nuclear program. Israel's Air Force hit Mehrabad Airport, describing it as 'a central hub used by the IRGC to arm and fund its terror proxies across the Middle East.' The US destroyed Iranian naval ships and minelayers near the Strait of Hormuz.",
      "Iran retaliated immediately with strikes across the region, including attacks on Israel and US military positions. As of today, more than 1,200 people have been killed in Iran, 570 in Lebanon, and 12 in Israel, according to health officials in each country. Seven American service members have died. Eight more are seriously wounded.",
      "The Strait of Hormuz -- the narrow waterway through which roughly 20% of the world's oil supply passes -- is largely shut to commercial shipping. Oil prices have surged. Gas prices are climbing. The economic ripple effects are being felt globally, including right here in Atlanta.",
      "Now here's where it gets interesting. According to an Axios report, Israeli Prime Minister Benjamin Netanyahu called President Trump with intelligence that Iran's Supreme Leader and top advisers would be gathered at a single location in Tehran, where they could be taken out in one strike. Netanyahu had been 'agitating' for faster military action, according to a US official. Trump and Netanyahu spoke by phone 15 times in the two months leading up to the strikes. They met in person twice.",
      "Multiple analysts, including those cited by Al Jazeera, have described this as 'Netanyahu's war,' arguing the strikes benefit Israel's strategic interests more than America's. Netanyahu's stated goal is the complete disarmament and demilitarization of both Hamas in Gaza and Iran's nuclear capabilities. Trump, meanwhile, has described the conflict as a 'short-term excursion' that will end 'soon' because there is 'practically nothing left' to bomb.",
      "Netanyahu disagrees. Israel's government has publicly stated there is 'no time limit' on the military operation.",
      "Meanwhile, the situation in Gaza continues to deteriorate. The January 2025 ceasefire has been repeatedly violated. Israeli forces control over half of the territory. At least 75,000 Palestinians have been killed since October 2023, according to Gaza's Health Ministry -- a figure that Israeli military officials have privately accepted. Ninety percent of civilian infrastructure has been destroyed. Nearly all of Gaza's 2.3 million residents have been displaced. Humanitarian aid remains severely restricted.",
      "Iran has named Mojtaba Khamenei as the new Supreme Leader after strikes reportedly killed senior leadership figures. Tehran has called the operation 'Operation Epic Mistake' and vowed to continue fighting.",
      "For Atlanta, the immediate impact is at the pump and in the economy. Gas prices are rising, supply chains are tightening, and the uncertainty is hitting markets. Hartsfield-Jackson has seen disruptions to international routes through the Middle East. And like every American city, Atlanta has families with service members deployed in the region.",
      "The facts are the facts. An 11-day war is underway. The death toll is climbing. Two leaders say two different things about when it ends. Oil prices are rising. And the question everyone from the White House press corps to your uncle at the cookout is asking remains the same: who's actually driving this thing?",
      "We're not here to tell you what to think. We're here to make sure you know what's happening. Stay informed, Atlanta.",
    ],
    commentCount: 289,
    comments: [
      {
        id: 1,
        author: "VetVoiceATL",
        perspective: "Moderate",
        perspectiveColor: "bg-gray-200 text-gray-700",
        text: "I served two tours overseas. When a foreign leader is calling your president 15 times in 2 months pushing for strikes, that's not an alliance. That's a sales call. I support defending our interests, but whose interests are we defending here?",
        likes: 341,
        date: "1 hour ago",
      },
      {
        id: 2,
        author: "PeachtreeConservative",
        perspective: "Conservative",
        perspectiveColor: "bg-blue-100 text-blue-800",
        text: "Iran has been the #1 state sponsor of terrorism for decades. Their proxies killed Americans. If we have the chance to neutralize their nuclear program, we take it. Netanyahu gave us intel, we acted on it. That's how alliances work.",
        likes: 198,
        date: "2 hours ago",
      },
      {
        id: 3,
        author: "WestEndPeace",
        perspective: "Progressive",
        perspectiveColor: "bg-green-100 text-green-800",
        text: "75,000 dead in Gaza. 1,200 dead in Iran in 11 days. 7 American soldiers gone. Gas prices up. And for what? This isn't defense. This is somebody else's war and we're paying for it in blood and at the pump.",
        likes: 276,
        date: "3 hours ago",
      },
      {
        id: 4,
        author: "MidtownRealist",
        perspective: "Moderate",
        perspectiveColor: "bg-gray-200 text-gray-700",
        text: "Best article I've read on this. No spin, just facts and the question nobody in DC wants to answer. This is why I read ATL Voters.",
        likes: 154,
        date: "4 hours ago",
      },
    ],
  },
  "trump-executive-order-both-sides": {
    slug: "trump-executive-order-both-sides",
    category: "Federal",
    headline:
      "Trump Just Signed an Order That Has Both Sides Losing Their Minds",
    author: "Marcus Reed",
    date: "February 12, 2026",
    readTime: "6 min read",
    body: [
      "WASHINGTON -- President Trump signed Executive Order 14287 on Tuesday, directing the Department of Justice to withhold federal law enforcement grants from any municipality that maintains sanctuary city policies. Atlanta, which has long operated under an informal don't-ask policy regarding immigration status, stands to lose an estimated $340 million in federal funding.",
      "The order immediately drew fire from both sides of the aisle, though for entirely different reasons.",
      'Mayor Andre Dickens held a press conference within hours, calling the order "a direct attack on Atlanta\'s sovereignty and our values as a welcoming city." He pledged that the city would not change its policies. "We will not become an arm of federal immigration enforcement," Dickens said. "Period."',
      "Governor Brian Kemp, however, signaled that the state would cooperate fully. In a statement, Kemp said Georgia would \"work hand-in-hand with the federal government to ensure our communities are safe and our laws are followed.\" He did not directly address the funding implications for Atlanta.",
      "The executive order has created a bizarre political landscape where progressive Atlanta Democrats and MAGA-aligned Republicans are both furious -- just at different people. Local conservative groups say the mayor is risking essential public safety funding for political points. Progressive organizations say the order is designed to terrorize immigrant communities.",
      "Council member Liliana Bakhtiari called the order \"cruel and calculated\" and announced she would introduce a resolution formally declaring Atlanta a sanctuary city -- something the city has never officially done. \"If they're going to punish us anyway, we might as well make it official,\" Bakhtiari said.",
      "Meanwhile, the practical implications are already being felt. Atlanta Police Department sources tell ATL Voters that officers have received no new directives but are \"confused about what this means for day-to-day operations.\" Federal grant-funded programs, including a youth violence prevention initiative in Zone 3, could see funding frozen as early as next month.",
      "The legal battle is expected to begin within weeks. Atlanta City Attorney Nina Hickson is reportedly already drafting a challenge. Similar lawsuits are being prepared in Chicago, Los Angeles, and New York.",
      'For now, the people caught in the middle -- the residents who rely on federally funded services and the immigrant communities who fear the knock on the door -- are left waiting. As one Southwest Atlanta community organizer told us: "Politicians on both sides are playing chess. We\'re the pawns."',
    ],
    commentCount: 127,
    comments: [
      {
        id: 1,
        author: "PolicyWatchATL",
        perspective: "Moderate",
        perspectiveColor: "bg-gray-200 text-gray-700",
        text: "The real story here is the $340M number. That includes police training grants, domestic violence programs, and after-school funding. This isn't abstract politics -- it's real services for real people.",
        likes: 84,
        date: "2 hours ago",
      },
      {
        id: 2,
        author: "BuckheadVoter92",
        perspective: "Conservative",
        perspectiveColor: "bg-blue-100 text-blue-800",
        text: "The mayor needs to stop grandstanding and start governing. You can disagree with the policy and still comply with federal law. That $340M isn't his money to gamble with.",
        likes: 67,
        date: "3 hours ago",
      },
      {
        id: 3,
        author: "WestEndResident",
        perspective: "Progressive",
        perspectiveColor: "bg-green-100 text-green-800",
        text: "I live in Zone 3. The youth violence program they're threatening to defund is the only thing keeping some of these kids off the streets. Washington doesn't care about us either way.",
        likes: 112,
        date: "4 hours ago",
      },
      {
        id: 4,
        author: "GAPoliticsNerd",
        perspective: "Moderate",
        perspectiveColor: "bg-gray-200 text-gray-700",
        text: "Kemp vs Dickens is going to be THE political fight of 2026 in Georgia. This order just poured gasoline on it. Watch the polling numbers after this.",
        likes: 45,
        date: "5 hours ago",
      },
      {
        id: 5,
        author: "DecaturDem",
        perspective: "Progressive",
        perspectiveColor: "bg-green-100 text-green-800",
        text: "Bakhtiari is right. If we're going to lose the funding anyway, make the stand official. Half measures help nobody.",
        likes: 58,
        date: "6 hours ago",
      },
    ],
  },
  "ice-spotted-gwinnett-county": {
    slug: "ice-spotted-gwinnett-county",
    category: "Federal",
    headline: "ICE Spotted in Gwinnett County -- Here's What Went Down",
    author: "Denise Carter",
    date: "February 12, 2026",
    readTime: "4 min read",
    body: [
      "NORCROSS -- Multiple witnesses reported seeing federal Immigration and Customs Enforcement agents at the Plaza Fiesta shopping center in Norcross early Tuesday morning. The sighting has sent shockwaves through Gwinnett County's large immigrant community.",
      "According to witnesses, at least four individuals wearing jackets marked \"POLICE ICE\" were seen in the parking lot around 7:30 a.m. Two appeared to be questioning individuals near a day labor pickup area adjacent to the shopping center.",
      "Gwinnett County Police confirmed they were not involved in and were not notified about any federal immigration operation. \"We have no information about ICE activity in our jurisdiction today,\" a department spokesperson said.",
      "ICE's Atlanta field office did not respond to requests for comment by publication time.",
      "Community organizations quickly mobilized. The Latin American Association set up a rapid-response hotline and deployed \"know your rights\" teams to the area. By midday, the parking lot that is normally packed was nearly empty.",
      "\"People are terrified,\" said Rosa Hernandez, a community organizer with the Georgia Latino Alliance for Human Rights. \"A mother called me crying because she's afraid to pick up her children from school. This is what enforcement by fear looks like.\"",
      "Gwinnett County Commission Chair Nicole Love Hendrickson released a statement calling for transparency. \"Our residents deserve to know what federal agencies are doing in our communities. The lack of coordination and communication is unacceptable,\" Hendrickson said.",
      "This is the third reported ICE sighting in the metro Atlanta area in the past two weeks, following the executive order on sanctuary city funding. Immigration attorneys say the increased visible presence appears to be a deliberate strategy.",
      "\"They want to be seen,\" said immigration attorney David Kim. \"The legal authority hasn't changed much. What's changed is the theater. They want communities to know they're there.\"",
    ],
    commentCount: 47,
    comments: [
      {
        id: 1,
        author: "GwinnettMom",
        perspective: "Progressive",
        perspectiveColor: "bg-green-100 text-green-800",
        text: "My kids go to school in Norcross. Half the class was absent today because parents were afraid to leave their homes. These are CHILDREN being affected.",
        likes: 94,
        date: "1 hour ago",
      },
      {
        id: 2,
        author: "LawAndOrder404",
        perspective: "Conservative",
        perspectiveColor: "bg-blue-100 text-blue-800",
        text: "Federal agents enforcing federal law. This is literally how it's supposed to work. If you're here legally you have nothing to worry about.",
        likes: 41,
        date: "2 hours ago",
      },
      {
        id: 3,
        author: "NorcrossLocal",
        perspective: "Moderate",
        perspectiveColor: "bg-gray-200 text-gray-700",
        text: "I was there this morning. The agents left after about 90 minutes. Didn't see anyone detained. But the damage to the community trust is already done.",
        likes: 67,
        date: "3 hours ago",
      },
    ],
  },
  "mayor-dickens-fires-back-kemp": {
    slug: "mayor-dickens-fires-back-kemp",
    category: "City Hall",
    headline: "Mayor Dickens Fires Back at Governor Kemp Over Transit Funding",
    author: "Jason Liu",
    date: "February 11, 2026",
    readTime: "5 min read",
    body: [
      "ATLANTA -- The simmering feud between Mayor Andre Dickens and Governor Brian Kemp erupted into open warfare Tuesday over $2.1 billion in MARTA expansion funds that the state is threatening to withhold.",
      "At a packed press conference at Five Points Station, Dickens accused the governor of \"holding Atlanta's transportation future hostage for political gain.\" The mayor pointed to a recent state audit that questioned MARTA's spending practices as the catalyst for the funding freeze.",
      "\"Let me be clear,\" Dickens said, his voice rising. \"This audit was ordered by the governor's allies in the legislature. The findings are disputed. And using it as a pretext to block transit expansion that would serve 2 million metro residents is not governance. It's sabotage.\"",
      "The $2.1 billion in question comes from a combination of state matching funds and federal transit grants that require state approval to release. Without it, MARTA's planned Clifton Corridor light rail line and the Campbellton Road BRT extension would be indefinitely delayed.",
      "Governor Kemp responded through a spokesperson, who said the state has a fiduciary duty to ensure taxpayer money is spent responsibly. \"The audit raised serious questions about MARTA's financial management. Until those questions are answered, it would be irresponsible to release additional funding,\" the statement read.",
      "MARTA CEO Collie Greenwood pushed back on the audit's findings in a detailed rebuttal released last week, calling several of its conclusions \"misleading\" and based on \"outdated data.\" The agency has proposed an independent third-party review as a compromise.",
      "Transportation advocates are furious. \"Atlanta already has one of the worst transit systems for a city its size in America,\" said Rebecca Kim of the Atlanta Transit Riders Alliance. \"Every month of delay means more traffic, more pollution, and more working families who can't get to their jobs.\"",
      "The political subtext is hard to miss. Kemp, who faces a contested Republican primary for his U.S. Senate run, has been positioning himself as tough on Atlanta spending. Dickens, widely expected to seek reelection, needs the transit wins to shore up his base.",
      "The state legislature will take up the funding question when it reconvenes next week. Several Atlanta-area legislators have introduced a bill that would bypass the governor's hold, but it faces long odds in the Republican-controlled chamber.",
    ],
    commentCount: 82,
    comments: [
      {
        id: 1,
        author: "TransitNerd404",
        perspective: "Progressive",
        perspectiveColor: "bg-green-100 text-green-800",
        text: "The Clifton Corridor has been in planning for 15 YEARS. If this gets delayed again I'm going to lose it. Atlanta will never be a real city without real transit.",
        likes: 73,
        date: "4 hours ago",
      },
      {
        id: 2,
        author: "CobbCommuter",
        perspective: "Moderate",
        perspectiveColor: "bg-gray-200 text-gray-700",
        text: "I don't even live in Atlanta and I want MARTA expansion. The traffic on 285 is killing the entire metro economy.",
        likes: 88,
        date: "5 hours ago",
      },
    ],
  },
};

const POLL = {
  question: "Should Tiffany Henyard be allowed to run for office in Fulton County?",
  options: [
    "Absolutely not -- we saw what she did in Illinois",
    "Yes -- everyone deserves a second chance in a new city",
    "Only if she settles things with the FBI first",
    "I'm just here for the Nino Brown cosplay at board meetings",
  ],
};

const MORE_STORIES: MoreStory[] = [
  {
    slug: "trump-executive-order-both-sides",
    category: "Federal",
    headline: "Trump Just Signed an Order That Has Both Sides Losing Their Minds",
    author: "Marcus Reed",
  },
  {
    slug: "georgia-legislature-new-bill",
    category: "Gold Dome",
    headline: "Georgia Legislature Pushes New Bill That Nobody Asked For",
    author: "Tanya Brooks",
  },
  {
    slug: "buckhead-cityhood-back-again",
    category: "City Hall",
    headline: "Buckhead Cityhood Is Back -- And This Time They Have the Votes",
    author: "Denise Carter",
  },
  {
    slug: "fulton-county-da-investigation",
    category: "Investigations",
    headline:
      "Fulton County DA's Office Under Fire for Mishandled Evidence in Gang Case",
    author: "Marcus Reed",
  },
];

// ============================================================
// FALLBACK ARTICLE
// ============================================================

const FALLBACK_ARTICLE: Article = {
  slug: "fallback",
  category: "News",
  headline: "Article Not Found",
  author: "ATL Voters Staff",
  date: "February 12, 2026",
  readTime: "1 min read",
  body: [
    "The article you are looking for could not be found. This may be because it has been moved, removed, or the URL is incorrect.",
    "Please return to the homepage to browse our latest coverage of Atlanta politics and accountability journalism.",
  ],
  commentCount: 0,
  comments: [],
};

// ============================================================
// PAGE COMPONENT
// ============================================================

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES[slug] || FALLBACK_ARTICLE;

  const shareUrl = `https://atlvoters.com/article/${slug}`;
  const shareText = encodeURIComponent(article.headline + " | ATL Voters");
  const twitterUrl = `https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(shareUrl)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;

  return (
    <div className="max-w-6xl mx-auto px-4 pb-24">
      {/* ARTICLE HEADER */}
      <article className="max-w-3xl mx-auto">
        <div className="py-8 border-b border-[#111111]">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#DC2626]">
            {article.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-black leading-tight text-[#111111] mt-2 mb-3">
            {article.headline}
          </h1>
          {slug === "tiffany-henyard-fulton-county-nino-brown" && (
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] my-5 overflow-hidden border-2 border-[#111111]">
              <img
                src="/nino-henyard.png"
                alt="Tiffany Henyard and Nino Brown from New Jack City -- side by side comparison"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 px-3 py-1.5">
                <span className="text-[10px] text-gray-300 uppercase tracking-wider">
                  Photo: Dolton Village Board Meeting / New Jack City (1991)
                </span>
              </div>
            </div>
          )}
          {article.subheadline && (
            <p className="text-xl md:text-2xl font-bold text-[#DC2626] italic mb-4">
              {article.subheadline}
            </p>
          )}
          <div className="flex items-center gap-4 text-xs text-gray-500 uppercase tracking-wider font-medium">
            <span>By {article.author}</span>
            <span className="w-1 h-1 bg-gray-400"></span>
            <span>{article.date}</span>
            <span className="w-1 h-1 bg-gray-400"></span>
            <span>{article.readTime}</span>
          </div>
        </div>

        {/* ARTICLE BODY */}
        <div className="py-8 border-b border-gray-200">
          {article.body.map((paragraph, idx) => (
            <div key={idx}>
              <p className="text-base md:text-lg leading-relaxed text-gray-800 mb-5">
                {paragraph}
              </p>

              {/* MID-ARTICLE POLL after 4th paragraph */}
              {idx === 3 && (
                <div className="border-t-[3px] border-b-[3px] border-[#111111] py-6 my-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-[#111111] text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1">
                      Poll
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Quick Vote
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#111111] mb-4">
                    {POLL.question}
                  </h3>
                  <form className="space-y-2">
                    {POLL.options.map((option, optIdx) => (
                      <label
                        key={optIdx}
                        className="flex items-start gap-3 p-3 border border-gray-200 hover:border-[#111111] cursor-pointer transition-colors group"
                      >
                        <input
                          type="radio"
                          name="article-poll"
                          value={optIdx}
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
              )}
            </div>
          ))}
        </div>

        {/* SOCIAL SHARE */}
        <div className="py-6 border-b border-gray-200">
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
            Share This Article
          </h4>
          <div className="flex items-center gap-3">
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111111] text-white px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-[#DC2626] transition-colors"
            >
              Share on X
            </a>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111111] text-white px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-[#DC2626] transition-colors"
            >
              Share on Facebook
            </a>
          </div>
        </div>

        {/* COMMENTS */}
        <div className="py-8 border-b border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-lg font-black uppercase tracking-tight text-[#111111]">
              Comments
            </h3>
            <span className="text-sm font-bold text-gray-400">
              ({article.commentCount})
            </span>
            <div className="flex-1 border-t border-[#111111]"></div>
          </div>

          {article.comments.length === 0 && (
            <p className="text-sm text-gray-500">
              No comments yet. Check back later.
            </p>
          )}

          <div className="space-y-0">
            {article.comments.map((comment, idx) => (
              <div
                key={comment.id}
                className={`py-5 ${
                  idx < article.comments.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-bold text-[#111111]">
                    {comment.author}
                  </span>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 ${comment.perspectiveColor}`}
                  >
                    {comment.perspective}
                  </span>
                  <span className="text-[10px] text-gray-400">
                    {comment.date}
                  </span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-2">
                  {comment.text}
                </p>
                <div className="flex items-center gap-1 text-xs text-gray-400 font-medium">
                  <span>&#9650;</span>
                  <span>{comment.likes}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MORE STORIES */}
        <div className="py-8">
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-lg font-black uppercase tracking-tight text-[#111111]">
              More Stories
            </h3>
            <div className="flex-1 border-t border-[#111111]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {MORE_STORIES.map((story, idx) => (
              <article
                key={story.slug}
                className={`p-4 ${
                  idx % 2 === 0 ? "md:border-r border-gray-200" : ""
                } ${idx < MORE_STORIES.length - 2 ? "border-b border-gray-200" : ""}`}
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#DC2626]">
                  {story.category}
                </span>
                <Link href={`/article/${story.slug}`}>
                  <h4 className="text-base font-bold text-[#111111] leading-tight mt-1 hover:text-[#DC2626] transition-colors">
                    {story.headline}
                  </h4>
                </Link>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider font-medium mt-1 block">
                  {story.author}
                </span>
              </article>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
