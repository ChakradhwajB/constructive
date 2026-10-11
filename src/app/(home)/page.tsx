import Link from "next/link";
import { ArrowRight } from "lucide-react";
import katex from "katex";
import {
  InteractiveHeroMockup,
  InteractiveGraphMock,
} from "@/components/home/interactive-mocks";

/* ─────────────────── Page ─────────────────── */

export default function HomePage() {
  return (
    <main className="flex flex-col flex-1 relative overflow-hidden">
      {/* ──── Hero: 2-pane ──── */}
      <section className="relative px-6 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-start relative z-10">
          {/* Left: copy */}
          <div className="md:pt-8">
            <p className="text-sm font-medium text-fd-muted-foreground mb-5">
              Competitive Programming Editorials
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[0.95] mb-8">
              Stop Reading.<br />
              <span className="text-purple-600 dark:text-purple-500 drop-shadow-sm">Start Seeing.</span>
            </h1>
            <p className="text-fd-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Constructive turns competitive programming editorials into
              interactive, step-by-step visualizations so the solution actually
              clicks.
            </p>
            <Link
              href="/docs"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-md bg-purple-500 hover:bg-purple-600 text-white font-semibold shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-200"
            >
              Browse Editorials{" "}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right: interactive mockups */}
          <div className="relative z-10 flex justify-center lg:justify-end">
            <InteractiveHeroMockup />
          </div>
        </div>
      </section>

      {/* ──── Features: alternating 2-col rows ──── */}
      <section className="px-6 py-20 md:py-28 border-t border-fd-border relative">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium text-fd-muted-foreground mb-3">
            Why Constructive
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-fd-foreground mb-14 max-w-md">
            Editorials that actually teach you something.
          </h2>

          <div className="flex flex-col gap-4">
            {/* Row 1: wide left + narrow right */}
            <div className="grid md:grid-cols-5 gap-4">
              <div className="md:col-span-3 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md shadow-sm p-7 md:p-8 flex flex-col justify-between min-h-70">
                <div>
                  <h3 className="text-lg font-semibold text-fd-foreground mb-2">
                    Algorithm Visualization
                  </h3>
                  <p className="text-fd-muted-foreground text-sm leading-relaxed max-w-sm">
                    Watch DP tables fill, graphs traverse, and arrays sort —
                    synchronized with the exact line of code that drives each
                    step.
                  </p>
                </div>
                <div className="mt-6 flex items-end">
                  <InteractiveGraphMock />
                </div>
              </div>

              <div className="md:col-span-2 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md shadow-sm p-7 md:p-8 flex flex-col min-h-70">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-5">
                  <span className="text-purple-600 dark:text-purple-400 font-bold text-sm">
                    ?→!
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-fd-foreground mb-2">
                  The Aha Moment
                </h3>
                <p className="text-fd-muted-foreground text-sm leading-relaxed">
                  We walk you through the reasoning — the leap from brute force
                  to the elegant solution — so you can reproduce it on new
                  problems.
                </p>
              </div>
            </div>

            {/* Row 2: narrow left + wide right */}
            <div className="grid md:grid-cols-5 gap-4">
              <div className="md:col-span-2 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md shadow-sm p-7 md:p-8 flex flex-col min-h-65">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center mb-5">
                  <svg
                    className="w-5 h-5 text-amber-600 dark:text-amber-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-fd-foreground mb-2">
                  Problem First
                </h3>
                <p className="text-fd-muted-foreground text-sm leading-relaxed">
                  Each editorial starts with the problem statement and key
                  observations — building context before jumping into code.
                </p>
              </div>

              <div className="md:col-span-3 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md shadow-sm p-7 md:p-8 flex flex-col min-h-65">
                <div>
                  <h3 className="text-lg font-semibold text-fd-foreground mb-2">
                    LaTeX & Math
                  </h3>
                  <p className="text-fd-muted-foreground text-sm leading-relaxed max-w-xs">
                    Full KaTeX support for recurrences, proofs, and complexity
                    analysis — rendered beautifully inline.
                  </p>
                </div>
                <div className="mt-auto pt-5">
                  <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-zinc-800/80 p-4 flex items-center justify-center text-fd-foreground overflow-x-auto min-h-15">
                    <div
                      className="text-[1.1rem]"
                      dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          "dp[i][j] = \\max( dp[i-1][j], dp[i-1][j-w_{i-1}] + v_{i-1} )",
                          { throwOnError: false },
                        ),
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──── Recent Editorials ──── */}
      <section className="px-6 py-20 md:py-28 border-t border-fd-border relative">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-sm font-medium text-fd-muted-foreground mb-3">
                Library
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-fd-foreground">
                Recent Editorials
              </h2>
            </div>
            <Link href="/docs" className="text-sm font-semibold text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1">
              View all editorials <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "A. Cut Ribbon",
                desc: "Codeforces 189A. Maximize the number of ribbon pieces. A quintessential introduction to 1D dynamic programming.",
                tag: "DP",
              },
              {
                title: "C. Dijkstra?",
                desc: "Codeforces 20C. Find the shortest path from vertex 1 to vertex N and reconstruct the exact path using a priority queue.",
                tag: "Graphs",
              },
              {
                title: "E. Xenia and Bit Operations",
                desc: "Codeforces 339D. Maintain alternating bitwise OR and XOR operations on an array under point updates.",
                tag: "Data Structures",
              }
            ].map((item, i) => (
              <Link key={i} href="/docs" className="group flex flex-col justify-between rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md shadow-sm p-7 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300">
                <div>
                  <div className="flex items-center mb-5">
                    <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-zinc-800 px-2.5 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                    {item.desc}
                  </p>
                </div>
                <div className="text-sm font-semibold text-purple-600 dark:text-purple-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read Editorial <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ──── Topics / Tech ──── */}
      <section className="px-6 py-20 border-t border-fd-border relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-8">
            Master the patterns behind the hardest problems
          </h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {[
              "Dynamic Programming", "Graph Theory", "Trees", "Greedy Algorithms", 
              "String Matching", "Number Theory", "Binary Search", "Two Pointers", 
              "Bit Manipulation", "Segment Trees", "Trie", "Geometry"
            ].map((topic, i) => (
              <div key={i} className="px-5 py-2.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-zinc-900 text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm hover:border-purple-500 dark:hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-300 transition-colors cursor-default">
                {topic}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── Bottom CTA ──── */}
      <section className="px-6 py-20 md:py-24 border-t border-fd-border relative">
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-fd-foreground mb-4">
            Ready to see algorithms differently?
          </h2>
          <p className="text-fd-muted-foreground mb-8">
            Explore our growing library of visualized editorials — from knapsack
            to segment trees.
          </p>
          <Link
            href="/docs"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-md bg-purple-500 hover:bg-purple-600 text-white font-semibold shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-200"
          >
            Get Started{" "}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}
