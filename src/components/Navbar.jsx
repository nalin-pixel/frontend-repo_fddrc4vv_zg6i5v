import { Rocket, LogIn, UserPlus } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500 grid place-items-center shadow-sm">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold text-slate-900 text-lg tracking-tight">HoloSocial</span>
        </div>
        <nav className="flex items-center gap-2">
          <a href="#features" className="hidden sm:inline-flex px-3 py-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition">Features</a>
          <a href="#admin" className="hidden sm:inline-flex px-3 py-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition">Admin</a>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition">
            <LogIn className="h-4 w-4" />
            <span>Log in</span>
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition">
            <UserPlus className="h-4 w-4" />
            <span>Sign up</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
