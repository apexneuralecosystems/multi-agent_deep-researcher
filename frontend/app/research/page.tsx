"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, Loader2, FileText, ArrowLeft, Brain, Sparkles, Printer, Copy, RefreshCw, X } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// API Configuration
const API_BASE_URL = "http://localhost:8501/api/v1";

const LOADING_MESSAGES = [
  "🔍 Searching the knowledge base...",
  "🤖 Agents are browsing sources...",
  "📚 Reading and extracting facts...",
  "🔗 Verifying citations...",
  "✨ Synthesizing final report...",
];

export default function ResearchPage() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [taskId, setTaskId] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loadingMessageIndex, setLoadingMessageIndex] = useState(0);

  // Refs
  const pollingRef = useRef<NodeJS.Timeout | null>(null);
  const messageIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Cycling Loading Messages
  useEffect(() => {
    if (isLoading) {
      messageIntervalRef.current = setInterval(() => {
        setLoadingMessageIndex((prev) => (prev + 1) % LOADING_MESSAGES.length);
      }, 4000); // Change message every 4s
    } else {
      if (messageIntervalRef.current) clearInterval(messageIntervalRef.current);
      setLoadingMessageIndex(0);
    }
    return () => {
      if (messageIntervalRef.current) clearInterval(messageIntervalRef.current);
    };
  }, [isLoading]);

  const startResearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || isLoading) return;

    setIsLoading(true);
    setError("");
    setResult("");
    setStatus("initiating");

    try {
      const res = await fetch(`${API_BASE_URL}/research`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: query.trim(), depth: "standard" }),
      });

      if (!res.ok) throw new Error("Failed to start research");

      const data = await res.json();
      setTaskId(data.task_id);
      setStatus("processing");

      // Start polling
      startPolling(data.task_id);
    } catch (err) {
      setError("Unable to connect to the agent crew. Is the backend running?");
      setIsLoading(false);
    }
  };

  const startPolling = (id: string) => {
    if (pollingRef.current) clearInterval(pollingRef.current);

    pollingRef.current = setInterval(async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/research/${id}`);
        if (!res.ok) return;

        const data = await res.json();

        if (data.status === "completed") {
          setStatus("completed");
          setResult(data.result || "");
          setIsLoading(false);
          stopPolling();
        } else if (data.status === "failed") {
          setStatus("failed");
          setError(data.error || "Research failed unexpectedly.");
          setIsLoading(false);
          stopPolling();
        } else {
          setStatus(data.status);
        }
      } catch (err) {
        console.error("Polling error", err);
      }
    }, 2000);
  };

  const stopPolling = () => {
    if (pollingRef.current) {
      clearInterval(pollingRef.current);
      pollingRef.current = null;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    // Could add toast here
  };

  const handeReset = () => {
    setQuery("");
    setResult("");
    setTaskId(null);
    setError("");
    setStatus("");
    setIsLoading(false);
    stopPolling();
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => stopPolling();
  }, []);

  return (
    <div className="min-h-screen bg-cream font-sans text-burgundy print:bg-white print:p-0">

      {/* Header - Hidden on Print */}
      <div className="p-6 md:p-12 pb-0 print:hidden">
        <Link href="/" className="inline-flex items-center text-sm text-burgundy/60 hover:text-salmon mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Brain className="w-10 h-10 text-salmon" /> Agentic Deep Research
          </h1>
          <p className="text-burgundy/60">Autonomous multi-agent crew ready to solve your query.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 pb-12">
        {/* Search Input - Disabled when loading */}
        <Card className={`p-2 mb-8 shadow-xl shadow-salmon/10 border-burgundy/10 bg-white/80 backdrop-blur-sm transition-all ${isLoading ? 'opacity-80' : ''} print:hidden`}>
          <form onSubmit={startResearch} className="flex gap-2 relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="E.g., Analyze the future of solid state batteries..."
              className="flex-1 px-4 py-3 bg-transparent border-none outline-none text-lg placeholder:text-burgundy/30 disabled:cursor-not-allowed"
              disabled={isLoading}
              suppressHydrationWarning
            />

            {query && !isLoading && (
              <button type="button" onClick={() => setQuery("")} className="absolute right-24 top-1/2 -translate-y-1/2 p-2 text-burgundy/20 hover:text-burgundy/50">
                <X className="w-4 h-4" />
              </button>
            )}

            <Button
              type="submit"
              size="lg"
              className={`px-8 rounded-lg transition-all ${isLoading ? 'bg-burgundy/10 text-burgundy cursor-not-allowed' : 'bg-salmon hover:bg-burgundy text-white'}`}
              disabled={isLoading || !query.trim()}
            >
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
            </Button>
          </form>
        </Card>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-20 animate-in fade-in zoom-in duration-500 print:hidden">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-salmon/20 blur-xl rounded-full animate-pulse"></div>
              <div className="relative p-6 rounded-full bg-white shadow-lg border border-salmon/10 mb-6 inline-block">
                <Sparkles className="w-10 h-10 text-salmon animate-bounce" />
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-3 text-burgundy animate-pulse">
              {LOADING_MESSAGES[loadingMessageIndex]}
            </h3>
            <p className="text-burgundy/50 max-w-md mx-auto">
              The crew is navigating the web, reading content, and synthesizing answer for you.
            </p>
            <p className="text-xs font-mono text-burgundy/30 mt-8">Task ID: {taskId}</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="p-6 rounded-xl bg-red-50 border border-red-100 text-red-600 mb-8 text-center flex flex-col items-center gap-4 animate-in fade-in slide-in-from-bottom-4">
            <div className="p-3 bg-red-100 rounded-full"><X className="w-6 h-6 text-red-600" /></div>
            <div>
              <p className="font-bold text-lg">Research Failed</p>
              <p className="opacity-80">{error}</p>
            </div>
            <Button variant="outline" onClick={startResearch} className="mt-2 border-red-200 hover:bg-red-100 hover:text-red-700">
              Try Again
            </Button>
          </div>
        )}

        {/* Result State */}
        {result && !isLoading && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex items-center justify-between mb-6 print:hidden">
              <h2 className="text-2xl font-bold flex items-center gap-2 text-burgundy">
                <FileText className="w-6 h-6 text-salmon" /> Research Report
              </h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={handleCopy} className="text-burgundy border-burgundy/20 hover:bg-salmon/5">
                  <Copy className="w-4 h-4 mr-2" /> Copy
                </Button>
                <Button variant="outline" size="sm" onClick={() => window.print()} className="text-burgundy border-burgundy/20 hover:bg-salmon/5">
                  <Printer className="w-4 h-4 mr-2" /> Print / PDF
                </Button>
                <Button variant="default" size="sm" onClick={handeReset} className="bg-burgundy text-white hover:bg-burgundy/90">
                  <RefreshCw className="w-4 h-4 mr-2" /> New Research
                </Button>
              </div>
            </div>

            <article className="prose prose-burgundy prose-lg max-w-none bg-white p-8 md:p-16 rounded-2xl shadow-xl shadow-burgundy/5 border border-burgundy/5 print:shadow-none print:border-none print:p-0">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ node, ...props }) => <h1 className="text-3xl font-bold text-burgundy mb-6 pb-2 border-b border-burgundy/10" {...props} />,
                  h2: ({ node, ...props }) => <h2 className="text-2xl font-bold text-burgundy mt-8 mb-4" {...props} />,
                  h3: ({ node, ...props }) => <h3 className="text-xl font-semibold text-burgundy/80 mt-6 mb-3" {...props} />,
                  a: ({ node, ...props }) => <a className="text-salmon hover:underline font-medium hover:text-burgundy transition-colors" {...props} />,
                  ul: ({ node, ...props }) => <ul className="list-disc list-outside ml-6 space-y-2 mb-4 text-burgundy/80" {...props} />,
                  ol: ({ node, ...props }) => <ol className="list-decimal list-outside ml-6 space-y-2 mb-4 text-burgundy/80" {...props} />,
                  blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-salmon/50 pl-4 italic bg-salmon/5 py-2 rounded-r my-4" {...props} />,
                  code: ({ node, ...props }) => <code className="bg-burgundy/5 px-1 py-0.5 rounded text-sm font-mono text-burgundy" {...props} />,
                }}
              >
                {result}
              </ReactMarkdown>
            </article>

            <div className="mt-12 text-center print:hidden">
              <p className="text-burgundy/40 text-sm mb-4">Research generated by Agentic Crew</p>
              <Button variant="ghost" onClick={handeReset} className="text-salmon hover:text-burgundy hover:bg-salmon/10">
                Start a New Research Task
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
