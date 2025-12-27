import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Search, FileText, Brain, Sparkles, Github, Clock, Shield, Zap, CheckCircle2, Terminal } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-burgundy selection:bg-salmon/30">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-burgundy/5 bg-cream/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <Search className="w-6 h-6 text-salmon" />
            <span>AgenticDeepSearch</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-burgundy/80">
            <Link href="#how-it-works" className="hover:text-salmon transition-colors">How it Works</Link>
            <Link href="#agents" className="hover:text-salmon transition-colors">Agents</Link>
            <Link href="https://github.com/apexneural-hansika/multi-agent_deep-researcher" target="_blank" className="hover:text-salmon transition-colors">Docs</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild className="hidden sm:flex">
              <a href="https://github.com/apexneural-hansika/multi-agent_deep-researcher" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Star on GitHub
              </a>
            </Button>
            <Button className="shadow-lg shadow-salmon/20" asChild>
              <Link href="/research">
                <Terminal className="w-4 h-4 mr-2" />
                Deploy Agent
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-light-pink/40 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-salmon/10 rounded-full blur-3xl opacity-40 -translate-x-1/3 translate-y-1/4" />

        <div className="container mx-auto px-4 text-center max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-burgundy/10 text-burgundy/80 text-sm mb-8 animate-fade-in backdrop-blur-sm">
            <Shield className="w-3.5 h-3.5 text-salmon" />
            <span className="font-medium">MIT Licensed & Open Source</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            Turn Hours of Research into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-salmon to-burgundy">
              Minutes of Insight
            </span>
          </h1>

          <p className="text-xl text-burgundy/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            An autonomous, multi-agent system that searches the deep web,
            reads hundreds of sources, and synthesizes facts into comprehensive engineering reports.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="h-14 px-8 text-lg shadow-xl shadow-salmon/25 rounded-full w-full sm:w-auto transition-transform hover:scale-105" asChild>
              <Link href="/research">
                Start Researching Now <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" className="h-14 px-8 text-lg rounded-full w-full sm:w-auto bg-white/50 backdrop-blur-sm hover:bg-white/80" asChild>
              <Link href="https://github.com/apexneural-likhithmasura/multi-agent_deep-researcher" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 w-5 h-5" />
                View Source Code
              </Link>
            </Button>
          </div>

          {/* Trust/Stack Signals */}
          <div className="mt-16 pt-8 border-t border-burgundy/5 flex flex-wrap justify-center gap-x-12 gap-y-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 font-semibold"><span className="text-salmon">Crew</span>AI</div>
            <div className="flex items-center gap-2 font-semibold"><span className="text-salmon">LinkUp</span>API</div>
            <div className="flex items-center gap-2 font-semibold"><span className="text-salmon">Open</span>Router</div>
            <div className="flex items-center gap-2 font-semibold"><span className="text-salmon">Next</span>.js</div>
          </div>
        </div>
      </section>

      {/* Example Outcome Section */}
      <section className="py-20 bg-white/40 border-y border-burgundy/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-[2]">
              <div className="text-sm font-bold text-salmon mb-2 uppercase tracking-wider">Why agentic research beats manual workflows</div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Zap className="text-salmon w-6 h-6" />
                Real World Velocity
              </h3>
              <p className="text-lg text-burgundy/80 mb-6 leading-relaxed">
                Manual research is linear and slow. AgenticDeepSearch parallelizes the workload.
                What takes a human analyst a full day, our crew completes before you finish your coffee.
              </p>
              <ul className="space-y-3">
                {[
                  "Scrapes & verifies 50+ URLs per query",
                  "Filters out SEO spam & low-quality content",
                  "Cross-references facts to reduce hallucinations",
                  "Exports ISO-compliant Markdown reports"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-burgundy/70">
                    <CheckCircle2 className="w-5 h-5 text-salmon/80" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-[3] w-full">
              <Card className="bg-cream/80 border-burgundy/10 shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-burgundy/5 bg-white/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-salmon/40" />
                    <div className="w-3 h-3 rounded-full bg-burgundy/20" />
                    <div className="w-3 h-3 rounded-full bg-burgundy/20" />
                  </div>
                  <div className="text-xs font-mono text-burgundy/40 ml-2">research_output.md</div>
                </div>
                <div className="p-6 font-mono text-sm leading-relaxed overflow-hidden bg-white/40">
                  <div className="text-burgundy/50 mb-4 border-b border-burgundy/5 pb-2">
                    <span className="text-salmon font-bold">Query:</span> "Analyze current trends in Solid State Batteries 2024"
                  </div>
                  <div className="space-y-2 text-burgundy/80">
                    <p className="font-bold"># Executive Summary</p>
                    <p>Solid-state batteries (SSBs) are pivoting from R&D to pilot production...</p>
                    <p className="font-bold mt-4">## Key Technical Breakthroughs</p>
                    <p>1. <span className="bg-light-pink/30 px-1 rounded">Sulfide-based electrolytes</span> showing 10^-2 S/cm conductivity.</p>
                    <p>2. <span className="bg-light-pink/30 px-1 rounded">Anode-free designs</span> increasing energy density by 40%.</p>
                    <div className="mt-4 flex gap-4 text-xs opacity-70">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Time: 2m 14s</span>
                      <span className="flex items-center gap-1"><FileText className="w-3 h-3" /> Sources: 42</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-burgundy/60">Automating the cognitive labor of research in three steps.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-salmon/20 via-salmon/50 to-salmon/20 -z-10" />

            <div className="text-center group">
              <div className="w-24 h-24 mx-auto bg-white rounded-2xl shadow-lg border border-burgundy/5 flex items-center justify-center mb-6 text-3xl font-bold text-salmon group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <h3 className="font-bold text-xl mb-2">Input Query</h3>
              <p className="text-burgundy/70 text-sm">Define your topic and depth. The system parses intent and key parameters.</p>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 mx-auto bg-white rounded-2xl shadow-lg border border-burgundy/5 flex items-center justify-center mb-6 text-3xl font-bold text-salmon group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <h3 className="font-bold text-xl mb-2">Orchestration</h3>
              <p className="text-burgundy/70 text-sm">Agents search, validate sources, cross-reference facts, and synthesize insights in parallel.</p>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 mx-auto bg-white rounded-2xl shadow-lg border border-burgundy/5 flex items-center justify-center mb-6 text-3xl font-bold text-salmon group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <h3 className="font-bold text-xl mb-2">Delivery</h3>
              <p className="text-burgundy/70 text-sm">Receive a citation-backed report ready for engineering review.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <section id="agents" className="py-24 bg-white/50 border-t border-burgundy/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Autonomous Research Crew</h2>
            <p className="text-burgundy/60 max-w-xl mx-auto">
              Three specialized agents acting as your dedicated research team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-salmon/10 flex items-center justify-center mb-4 text-salmon">
                  <Search className="w-7 h-7" />
                </div>
                <CardTitle className="text-xl">Web Searcher</CardTitle>
              </CardHeader>
              <CardContent className="text-burgundy/70 leading-relaxed">
                <strong className="block text-burgundy mb-2 font-semibold">Goal: High-Integrity Retrieval</strong>
                Bypasses shallow SEO content to find technical docs, whitepapers, and verified statistics using the LinkUp API.
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-salmon/10 flex items-center justify-center mb-4 text-salmon">
                  <Brain className="w-7 h-7" />
                </div>
                <CardTitle className="text-xl">Research Analyst</CardTitle>
              </CardHeader>
              <CardContent className="text-burgundy/70 leading-relaxed">
                <strong className="block text-burgundy mb-2 font-semibold">Goal: Synthesis & Verification</strong>
                Cross-references multiple data points to eliminate hallucinations and extract the "signal" from the noise.
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-salmon/10 flex items-center justify-center mb-4 text-salmon">
                  <FileText className="w-7 h-7" />
                </div>
                <CardTitle className="text-xl">Technical Writer</CardTitle>
              </CardHeader>
              <CardContent className="text-burgundy/70 leading-relaxed">
                <strong className="block text-burgundy mb-2 font-semibold">Goal: Production-Ready Output</strong>
                Compiles validated insights into structured Markdown reports with ISO-standard citations and formatting.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-cream border-t border-burgundy/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 font-bold text-2xl mb-4">
                <Search className="w-6 h-6 text-salmon" />
                <span>AgenticDeepSearch</span>
              </div>
              <p className="text-burgundy/60 max-w-sm">
                Open-source autonomous research capable of replacing human analyst hours with API minutes.
              </p>
            </div>
            <div className="flex gap-16">
              <div className="flex flex-col gap-4">
                <h4 className="font-bold text-burgundy">Project</h4>
                <a href="#" className="text-burgundy/60 hover:text-salmon transition-colors">GitHub</a>
                <a href="#" className="text-burgundy/60 hover:text-salmon transition-colors">Documentation</a>
                <a href="#" className="text-burgundy/60 hover:text-salmon transition-colors">License</a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-burgundy/5 text-center text-sm text-burgundy/60">
            <p className="mb-2">© 2025 ApexNeural. All rights reserved.</p>
            <div className="flex justify-center gap-6">
              <Link href="/privacy" className="hover:text-salmon transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-salmon transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
