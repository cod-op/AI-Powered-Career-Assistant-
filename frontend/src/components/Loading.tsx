export default function Loading() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-slate-950 overflow-hidden select-none">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="relative z-10 flex flex-col items-center gap-6 p-8 rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-xl shadow-2xl shadow-indigo-500/10">
        <div className="relative flex items-center justify-center w-16 h-16">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-emerald-400 animate-spin blur-xs opacity-80" />
          <div className="relative w-14 h-14 rounded-2xl bg-slate-950 flex items-center justify-center border border-white/10 shadow-inner">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-indigo-500 to-emerald-400 animate-pulse shadow-md shadow-indigo-500/50" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-1.5 text-center">
          <p className="text-white/90 text-base font-semibold tracking-wide">
            CareerAI
          </p>
          <div className="flex items-center gap-1">
            <span className="text-slate-400 text-xs font-medium tracking-wider uppercase">
              Preparing your workspace
            </span>
            <span className="inline-flex gap-0.5 text-indigo-400 animate-pulse">
              <span>.</span><span>.</span><span>.</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}