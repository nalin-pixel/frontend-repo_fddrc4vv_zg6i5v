import { ShieldCheck, BarChart3, UsersRound, Trash2 } from 'lucide-react';

export default function AdminPanelPreview() {
  const items = [
    { icon: <ShieldCheck className="h-5 w-5" />, title: 'Role-based access', desc: 'Dedicated admin sign-in with strict permission boundaries.' },
    { icon: <UsersRound className="h-5 w-5" />, title: 'User management', desc: 'View, suspend, and remove accounts to keep spaces safe.' },
    { icon: <Trash2 className="h-5 w-5" />, title: 'Content moderation', desc: 'Review and remove posts or comments flagged as inappropriate.' },
    { icon: <BarChart3 className="h-5 w-5" />, title: 'Analytics', desc: 'A quick snapshot of activity, growth, and health.' },
  ];

  return (
    <section id="admin" className="py-16 bg-slate-50 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Admin control center</h2>
          <p className="mt-2 text-slate-600">Everything admins need to maintain quality and safety across the network.</p>
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
