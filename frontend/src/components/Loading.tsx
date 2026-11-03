import { FileText, Sparkles } from "lucide-react";

export default function Loading() {
  return (
    <main
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080b14] px-5 text-white"
      role="status"
      aria-live="polite"
      aria-label="CareerAI is getting ready"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,rgba(99,102,241,0.16),transparent_52%)]" />
      <div className="pointer-events-none absolute -left-40 top-[-10rem] h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-[-10rem] h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

      <section className="relative flex w-full max-w-sm flex-col items-center rounded-3xl border border-white/10 bg-slate-900/65 px-8 py-10 text-center shadow-2xl shadow-indigo-950/40 backdrop-blur-xl sm:px-12">
        <div className="relative mb-7 flex h-24 w-24 items-center justify-center">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-500/30 to-emerald-400/20 blur-xl" />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-[1.65rem] border border-white/10 bg-slate-950 shadow-inner shadow-white/5">
            <FileText
              size={34}
              strokeWidth={1.5}
              className="text-indigo-200"
              aria-hidden="true"
            />
            <span className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-xl border border-white/15 bg-slate-800 text-emerald-300 shadow-lg">
              <Sparkles size={16} aria-hidden="true" />
            </span>
          </div>
          <span className="absolute inset-0 rounded-[2rem] border border-indigo-300/25 loading-orbit" />
        </div>

        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-200/80">
          Career<span className="text-emerald-300">AI</span>
        </p>
        <h1 className="mt-3 text-xl font-bold tracking-tight sm:text-2xl">
          Your next step starts here
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Getting your career workspace ready
        </p>

        <div
          className="mt-8 h-1 w-full overflow-hidden rounded-full bg-white/10"
          aria-hidden="true"
        >
          <div className="h-full w-2/5 rounded-full bg-gradient-to-r from-indigo-400 via-purple-300 to-emerald-300 loading-sweep" />
        </div>
        <span className="sr-only">Please wait</span>
      </section>
    </main>
  );
}
