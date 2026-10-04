import { ArrowRight, ChevronRight, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useAppData } from "../context/AppContext";

function Hero() {
  const { isAuth } = useAppData();

  return (
    <section className="relative pt-36 pb-28 px-6 flex flex-col items-center text-center overflow-hidden select-none">
      <div
        className="orb w-150 h-150 bg-indigo-600/15 -top-40 left-1/2 -translate-x-1/2 blur-3xl pointer-events-none"
      />
      <div
        className="orb w-96 h-96 bg-emerald-500/10 bottom-0 right-10 blur-3xl pointer-events-none"
      />

      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/60 border border-white/10 backdrop-blur-xl shadow-lg shadow-indigo-500/5 mb-8 animate-fade-in hover:border-indigo-500/40 transition-colors cursor-default">
        <Zap size={13} className="text-emerald-400 fill-emerald-400/20" />
        <span className="text-xs font-semibold tracking-wide text-slate-200">
          AI-Powered Career Platform
        </span>
        <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
      </div>

      <h1
        className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight max-w-4xl mb-6 animate-slide-up text-white"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        Land Your Dream Job{" "}
        <br />
        <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-sm">
          Faster with AI
        </span>
      </h1>

      <p
        className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 animate-slide-up font-normal"
        style={{ animationDelay: "0.1s" }}
      >
        Analyse your resume, get an instant ATS score, discover ideal job matches, build recruiter-ready resumes, and ace every interview — all powered by AI.
      </p>

      <div
        className="flex flex-col sm:flex-row items-center gap-4 animate-slide-up"
        style={{ animationDelay: "0.2s" }}
      >
        <Link
          to={isAuth ? "/jobmatcher" : "/login"}
          className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-500 hover:from-indigo-500 hover:to-emerald-400 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>{isAuth ? "Find Best Job" : "Start for free"}</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>

        <a
          href="#features"
          className="inline-flex items-center gap-1.5 px-6 py-4 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-slate-900/40 hover:bg-slate-800/60 border border-white/5 hover:border-white/10 backdrop-blur-md transition-all duration-200"
        >
          See how it works <ChevronRight size={15} className="text-slate-400" />
        </a>
      </div>

      <div className="flex items-center gap-2 text-slate-500 text-xs font-medium mt-6">
        <ShieldCheck size={14} className="text-emerald-400/80" />
        <span>First 5 analyses free • No credit card required</span>
      </div>

      <div
        className="mt-16 relative group animate-slide-up"
        style={{ animationDelay: "0.3s" }}
      >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-emerald-500/20 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition duration-500 pointer-events-none" />

        <div className="relative px-8 py-5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-xl shadow-2xl shadow-indigo-500/10 flex flex-col sm:flex-row items-center gap-6">
          <div className="flex flex-col items-center">
            <div className="flex items-baseline gap-1">
              <span
                className="text-4xl font-black bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                87
              </span>
              <span className="text-xs font-bold text-emerald-400">/100</span>
            </div>
            <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-widest mt-0.5">
              ATS Score
            </span>
          </div>

          <div className="hidden sm:block h-10 w-px bg-white/10" />

          <div className="flex flex-col gap-1.5 text-left text-xs">
            <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Strong keywords detected
            </span>
            <span className="text-amber-400/90 font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Missing: Quantified impact
            </span>
            <span className="text-slate-400 font-medium flex items-center gap-1.5">
              <Sparkles size={12} className="text-indigo-400" />
              3 high-match jobs found
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;