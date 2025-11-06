import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative">
      <div className="h-[540px] w-full">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
      <div className="absolute inset-0 flex items-end justify-center pb-10">
        <div className="text-center max-w-3xl px-6">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Build a modern social platform with an Admin brain
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            HoloSocial brings together clean UI, fast APIs, and powerful moderation tools. Users post, follow, like, and comment — admins keep the community thriving.
          </p>
          <div className="mt-6 flex items-center gap-3 justify-center">
            <a href="#features" className="px-5 py-2.5 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition">Explore features</a>
            <a href="#admin" className="px-5 py-2.5 rounded-md border border-slate-300 text-slate-800 hover:bg-slate-50 transition">Admin tools</a>
          </div>
        </div>
      </div>
    </section>
  );
}
