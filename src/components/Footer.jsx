export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} HoloSocial. All rights reserved.</p>
          <div className="text-sm text-slate-600 flex items-center gap-4">
            <a href="#features" className="hover:text-slate-900 transition">Features</a>
            <a href="#admin" className="hover:text-slate-900 transition">Admin</a>
            <a href="#" className="hover:text-slate-900 transition">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
