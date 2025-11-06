import { Heart, MessageCircle, Edit3, Users } from 'lucide-react';

export default function Features() {
  const items = [
    {
      icon: <Edit3 className="h-5 w-5" />, 
      title: 'Create & manage posts',
      desc: 'Compose, edit, and delete posts with rich media. Keep your voice fresh and your content polished.'
    },
    {
      icon: <Heart className="h-5 w-5" />, 
      title: 'Likes that matter',
      desc: 'Lightweight reactions with instant feedback keep engagement snappy and fun.'
    },
    {
      icon: <MessageCircle className="h-5 w-5" />, 
      title: 'Comments & discussion',
      desc: 'Open, threaded conversations keep context clear and communities connected.'
    },
    {
      icon: <Users className="h-5 w-5" />, 
      title: 'Follow feeds',
      desc: 'A personalized home feed built from the people you follow — simple and relevant.'
    }
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Core user features</h2>
          <p className="mt-2 text-slate-600">Everything you need for a clean social experience — fast, focused, and familiar.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 p-5 bg-white shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500 text-white grid place-items-center">
                {item.icon}
              </div>
              <h3 className="mt-4 font-medium text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
