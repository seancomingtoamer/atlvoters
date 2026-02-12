import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ATL Voters | Nobody's Safe. Everybody's Accountable.",
  description:
    "Non-partisan Atlanta political news, commentary, and accountability journalism. Covering City Hall, the Gold Dome, and every backroom deal in between.",
  keywords: [
    "Atlanta politics",
    "Georgia news",
    "Atlanta voters",
    "City Hall",
    "Gold Dome",
    "Atlanta political news",
    "Georgia legislature",
    "non-partisan news",
  ],
  openGraph: {
    title: "ATL Voters | Nobody's Safe. Everybody's Accountable.",
    description:
      "Non-partisan Atlanta political news, commentary, and accountability journalism.",
    type: "website",
    locale: "en_US",
    siteName: "ATL Voters",
  },
  twitter: {
    card: "summary_large_image",
    title: "ATL Voters | Nobody's Safe. Everybody's Accountable.",
    description:
      "Non-partisan Atlanta political news, commentary, and accountability journalism.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-9G0TMH6PX3"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9G0TMH6PX3');
        `}
      </Script>
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-[#111111]`}
      >
        {/* TOP BAR */}
        <div className="w-full bg-[#111111] text-white py-1.5 px-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between text-xs tracking-wide">
            <span className="uppercase font-medium">
              Wednesday, February 12, 2026
            </span>
            <span className="uppercase font-medium tracking-widest">
              Atlanta, Georgia
            </span>
          </div>
        </div>

        {/* HEADER */}
        <header className="w-full border-b-[3px] border-[#111111]">
          <div className="max-w-6xl mx-auto px-4">
            {/* Logo Row */}
            <div className="flex items-center justify-between py-6">
              <Link href="/" className="block">
                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none text-[#111111]">
                  ATL VOTERS
                </h1>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#DC2626] font-semibold mt-1">
                  Nobody&apos;s Safe. Everybody&apos;s Accountable.
                </p>
              </Link>
              <nav className="hidden md:flex items-center gap-8">
                <Link
                  href="/quiz"
                  className="text-sm font-semibold uppercase tracking-wider text-[#111111] hover:text-[#DC2626] transition-colors"
                >
                  Quiz
                </Link>
                <Link
                  href="#"
                  className="text-sm font-semibold uppercase tracking-wider text-[#111111] hover:text-[#DC2626] transition-colors"
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="text-sm font-semibold uppercase tracking-wider text-[#111111] hover:text-[#DC2626] transition-colors"
                >
                  Archive
                </Link>
                <Link
                  href="#"
                  className="text-sm font-semibold uppercase tracking-wider text-[#111111] hover:text-[#DC2626] transition-colors"
                >
                  Search
                </Link>
              </nav>
            </div>

            {/* Section Nav Bar */}
            <div className="border-t border-[#111111] py-2 flex items-center gap-6 overflow-x-auto text-xs font-semibold uppercase tracking-wider">
              <Link href="#" className="text-[#DC2626] whitespace-nowrap">
                Breaking
              </Link>
              <Link
                href="#"
                className="text-[#111111] hover:text-[#DC2626] whitespace-nowrap"
              >
                City Hall
              </Link>
              <Link
                href="#"
                className="text-[#111111] hover:text-[#DC2626] whitespace-nowrap"
              >
                Gold Dome
              </Link>
              <Link
                href="#"
                className="text-[#111111] hover:text-[#DC2626] whitespace-nowrap"
              >
                Federal
              </Link>
              <Link
                href="#"
                className="text-[#111111] hover:text-[#DC2626] whitespace-nowrap"
              >
                Investigations
              </Link>
              <Link
                href="#"
                className="text-[#111111] hover:text-[#DC2626] whitespace-nowrap"
              >
                Opinion
              </Link>
              <Link
                href="/quiz"
                className="text-[#111111] hover:text-[#DC2626] whitespace-nowrap"
              >
                Voter Quiz
              </Link>
            </div>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="min-h-screen">{children}</main>

        {/* STICKY FOOTER - Breaking Alerts Signup */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#111111] text-white z-50 border-t-[3px] border-[#DC2626]">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="bg-[#DC2626] text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1">
                Alert
              </span>
              <p className="text-sm font-medium">
                ATL political news moves fast. Be first.
              </p>
            </div>
            <form
              action="/api/email"
              method="POST"
              className="flex items-stretch w-full sm:w-auto"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="bg-white text-[#111111] px-3 py-2 text-sm font-medium w-full sm:w-64 border-0 outline-none placeholder:text-gray-400"
              />
              <button
                type="submit"
                className="bg-[#DC2626] text-white px-4 py-2 text-xs font-bold uppercase tracking-wider whitespace-nowrap hover:bg-red-700 transition-colors"
              >
                Get Breaking Alerts
              </button>
            </form>
          </div>
        </div>

        {/* SITE FOOTER */}
        <footer className="bg-[#111111] text-white pb-20">
          <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="border-t border-gray-700 pt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-black uppercase tracking-tight mb-3">
                    ATL Voters
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Non-partisan political accountability journalism for
                    Atlanta. We don&apos;t pick sides. We pick apart the people
                    in power.
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider mb-3 text-gray-400">
                    Sections
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="#" className="hover:text-[#DC2626]">
                        City Hall
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-[#DC2626]">
                        Gold Dome
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-[#DC2626]">
                        Federal
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-[#DC2626]">
                        Investigations
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider mb-3 text-gray-400">
                    About
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="#" className="hover:text-[#DC2626]">
                        Our Mission
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-[#DC2626]">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-[#DC2626]">
                        Tip Line
                      </Link>
                    </li>
                    <li>
                      <Link href="/quiz" className="hover:text-[#DC2626]">
                        Voter Quiz
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-700 mt-8 pt-6 text-xs text-gray-500 text-center">
                &copy; 2026 ATL Voters. All rights reserved. Atlanta, Georgia.
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
