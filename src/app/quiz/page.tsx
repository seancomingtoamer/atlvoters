"use client";

import { useState } from "react";

// ============================================================
// QUIZ DATA
// ============================================================

interface Question {
  question: string;
  options: string[];
}

interface VoterType {
  name: string;
  tagline: string;
  description: string;
  color: string;
}

const QUESTIONS: Question[] = [
  {
    question:
      "A new executive order threatens to cut federal funding to Atlanta over sanctuary city policies. Your reaction?",
    options: [
      "Good. Follow the law or lose the money. Simple.",
      "Let's negotiate. There has to be a middle ground that protects both residents and funding.",
      "Resist. Atlanta shouldn't bend to federal intimidation, period.",
      "This is all theater. Both sides are using immigrants as political props.",
    ],
  },
  {
    question:
      "MARTA wants $2.1 billion for a major expansion. Governor Kemp says not until an audit is done. Who's right?",
    options: [
      "Kemp. Accountability first. We've seen MARTA waste money before.",
      "Audit is fine, but don't hold the funding hostage. People need transit now.",
      "Dickens. The state has been sabotaging Atlanta transit for decades. Release the funds.",
      "Neither. Rip up MARTA and start over with something that actually works.",
    ],
  },
  {
    question:
      "Buckhead wants to secede from Atlanta and form its own city. Your take?",
    options: [
      "Let them go. Buckhead residents are tired of paying taxes for services they don't get.",
      "Bad idea for both sides, but I understand the frustration. Fix the underlying problems.",
      "This is white flight repackaged as governance. It would devastate Atlanta's tax base.",
      "The whole city-county system in Georgia is broken. This is just a symptom.",
    ],
  },
  {
    question:
      "Atlanta's water bills have tripled in some neighborhoods. The city blames meter upgrades. Your response?",
    options: [
      "Cut the waste at Watershed Management first. Government bloat is the real problem.",
      "Launch an independent investigation. Residents deserve clear answers before paying.",
      "This is hitting low-income communities hardest. Freeze the bills until it's resolved.",
      "Every city department is a mess. Water bills are just the latest chapter.",
    ],
  },
  {
    question:
      "A state legislator introduces a bill requiring 'patriotism training' for all Atlanta city employees. Thoughts?",
    options: [
      "Not the worst idea. Public servants should respect the institutions they serve.",
      "Silly and performative, but probably harmless. Focus on real policy.",
      "Authoritarian garbage. This is about controlling cities that don't vote the right way.",
      "Peak Gold Dome nonsense. File it next to the bill banning lab-grown meat.",
    ],
  },
];

const VOTER_TYPES: VoterType[] = [
  {
    name: "The Buckhead Conservative",
    tagline: "Fiscal discipline. Law and order. No apologies.",
    description:
      "You believe in accountability, fiscal responsibility, and following the rules as written. You're skeptical of government expansion and tired of watching tax dollars disappear into bureaucratic black holes. You probably drive past the MARTA station on your way to work every morning. You think Atlanta's leadership spends more time on press conferences than potholes. You vote in every single election, including the runoffs nobody else shows up for.",
    color: "border-blue-800",
  },
  {
    name: "The Midtown Moderate",
    tagline: "Common sense. Compromise. Coffee before politics.",
    description:
      "You see valid points on both sides and wish everyone would stop yelling long enough to find them. You support transit expansion but want to see the receipts. You think the Buckhead secession is a bad idea but understand why people are frustrated. You're the person at the dinner party trying to change the subject to the Braves. Politically, you're exhausting to both sides, which probably means you're onto something.",
    color: "border-gray-500",
  },
  {
    name: "The East Side Progressive",
    tagline: "Justice. Equity. No half measures.",
    description:
      "You believe government should actively protect its most vulnerable residents, even if that means fighting the state and federal governments to do it. You want MARTA expanded yesterday. You think sanctuary city policies are a moral imperative. You've been to at least three council meetings this year. You share articles on social media with captions like \"THIS\" and you're not ashamed of it. You know the names of your state legislators, which is more than most people can say.",
    color: "border-green-700",
  },
  {
    name: "The Atlanta Wildcard",
    tagline: "Burn it down. Start fresh. Trust nobody.",
    description:
      "You've lost faith in the entire system -- left, right, and center. You think both parties are performing for cameras while the real decisions happen in backrooms. You'd vote for a pothole if it ran on a platform of honesty. You read ATL Voters because you want to know what's really going on, not what anyone wants you to think is going on. Frankly, you might be the sanest person in the room.",
    color: "border-[#DC2626]",
  },
];

// ============================================================
// COMPONENT
// ============================================================

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showEmailGate, setShowEmailGate] = useState(false);
  const [email, setEmail] = useState("");
  const [result, setResult] = useState<VoterType | null>(null);
  function handleNext() {
    if (selectedOption === null) return;

    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);
    setSelectedOption(null);

    if (currentQuestion === QUESTIONS.length - 1) {
      setShowEmailGate(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  function calculateResult() {
    // Tally which option index was chosen most often
    // Option 0 = Conservative, 1 = Moderate, 2 = Progressive, 3 = Wildcard
    const counts = [0, 0, 0, 0];
    for (const answer of answers) {
      counts[answer]++;
    }
    const maxCount = Math.max(...counts);
    const topIndices = counts.reduce<number[]>((acc, count, idx) => {
      if (count === maxCount) acc.push(idx);
      return acc;
    }, []);
    // Break ties by picking the first one found
    const winnerIdx = topIndices[0];
    return VOTER_TYPES[winnerIdx];
  }

  function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    const voterType = calculateResult();
    setResult(voterType);

    // Fire and forget to /api/email
    fetch("/api/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source: "quiz" }),
    }).catch(() => {
      // silently fail
    });
  }

  const shareText = result
    ? encodeURIComponent(
        `I'm "${result.name}" according to @ATLVoters! Take the quiz:`
      )
    : "";
  const shareUrl = encodeURIComponent("https://atlvoters.com/quiz");

  return (
    <div className="max-w-6xl mx-auto px-4 pb-24">
      <div className="max-w-2xl mx-auto py-10">
        {/* HEADER */}
        <div className="border-b-[3px] border-[#111111] pb-6 mb-8">
          <span className="bg-[#DC2626] text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 inline-block mb-3">
            Interactive
          </span>
          <h1 className="text-3xl md:text-4xl font-black leading-tight text-[#111111]">
            What Kind of ATL Voter Are You?
          </h1>
          <p className="text-base text-gray-600 mt-3 leading-relaxed">
            Five questions. No right answers. Find out where you stand in
            Atlanta&apos;s political landscape.
          </p>
        </div>

        {/* QUIZ IN PROGRESS */}
        {!showEmailGate && !result && (
          <div>
            {/* Progress */}
            <div className="flex items-center gap-2 mb-6">
              {QUESTIONS.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1 flex-1 ${
                    idx < currentQuestion
                      ? "bg-[#DC2626]"
                      : idx === currentQuestion
                        ? "bg-[#111111]"
                        : "bg-gray-200"
                  }`}
                />
              ))}
            </div>

            <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
              Question {currentQuestion + 1} of {QUESTIONS.length}
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-[#111111] mb-6 leading-tight">
              {QUESTIONS[currentQuestion].question}
            </h2>

            <div className="space-y-3">
              {QUESTIONS[currentQuestion].options.map((option, idx) => (
                <label
                  key={idx}
                  className={`flex items-start gap-3 p-4 border-2 cursor-pointer transition-colors ${
                    selectedOption === idx
                      ? "border-[#DC2626] bg-red-50"
                      : "border-gray-200 hover:border-[#111111]"
                  }`}
                >
                  <input
                    type="radio"
                    name={`q${currentQuestion}`}
                    value={idx}
                    checked={selectedOption === idx}
                    onChange={() => setSelectedOption(idx)}
                    className="mt-0.5 accent-[#DC2626]"
                  />
                  <span className="text-sm font-medium text-gray-800">
                    {option}
                  </span>
                </label>
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={selectedOption === null}
              className={`mt-6 px-8 py-3 text-xs font-bold uppercase tracking-widest transition-colors ${
                selectedOption !== null
                  ? "bg-[#111111] text-white hover:bg-[#DC2626]"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              {currentQuestion === QUESTIONS.length - 1
                ? "See My Results"
                : "Next Question"}
            </button>
          </div>
        )}

        {/* EMAIL GATE */}
        {showEmailGate && !result && (
          <div className="border-t-[3px] border-[#111111] pt-8">
            <div className="text-center">
              <span className="bg-[#111111] text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 inline-block mb-4">
                Almost There
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-[#111111] mb-3">
                Enter Your Email to Reveal Your Voter Type
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                We&apos;ll also send you breaking ATL political news. Unsubscribe
                anytime.
              </p>
              <form
                onSubmit={handleEmailSubmit}
                className="flex flex-col sm:flex-row items-stretch gap-0 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="border-2 border-[#111111] px-4 py-3 text-sm font-medium flex-1 outline-none placeholder:text-gray-400"
                />
                <button
                  type="submit"
                  className="bg-[#DC2626] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-red-700 transition-colors"
                >
                  Reveal My Type
                </button>
              </form>
            </div>
          </div>
        )}

        {/* RESULT */}
        {result && (
          <div className="border-t-[3px] border-[#111111] pt-8">
            {/* Result Card */}
            <div className={`border-l-[6px] ${result.color} p-6 bg-gray-50 mb-8`}>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                Your Voter Type
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-[#111111] mb-1">
                {result.name}
              </h2>
              <p className="text-sm font-semibold text-[#DC2626] uppercase tracking-wider mb-4">
                {result.tagline}
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                {result.description}
              </p>
            </div>

            {/* Share Buttons */}
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                Share Your Result
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#111111] text-white px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-[#DC2626] transition-colors"
                >
                  Share on X
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#111111] text-white px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-[#DC2626] transition-colors"
                >
                  Share on Facebook
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="border-t border-gray-200 pt-6">
              <p className="text-sm text-gray-500 mb-3">
                Now that you know your voter type, stay informed.
              </p>
              <a
                href="/"
                className="inline-block bg-[#DC2626] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-red-700 transition-colors"
              >
                Read Today&apos;s Headlines
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
