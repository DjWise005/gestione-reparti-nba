import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-blue-300 text-sm font-medium tracking-wide">Sistema di Gestione</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
          Gestione{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Reparti
          </span>
        </h1>
        <p className="text-2xl sm:text-3xl font-bold text-slate-300 mb-6 tracking-widest uppercase">
          NBA
        </p>

        {/* Divider */}
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mb-8" />

        {/* Subtitle */}
        <p className="text-slate-400 text-lg leading-relaxed mb-12">
          Piattaforma centralizzata per la gestione dei reparti,<br className="hidden sm:block" />
          del personale e delle operazioni aziendali.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {[
            { label: "Reparti", value: "—", icon: "🏢" },
            { label: "Dipendenti", value: "—", icon: "👥" },
            { label: "Attività", value: "—", icon: "📋" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors"
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="text-2xl font-bold text-white">{item.value}</div>
              <div className="text-slate-400 text-sm mt-1">{item.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link href="/reparti" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg shadow-blue-500/25 transition-all hover:scale-105 active:scale-95">
          Accedi alla piattaforma →
        </Link>

        {/* Footer */}
        <p className="text-slate-600 text-xs mt-12 tracking-wider uppercase">
          Gestione Reparti by NBA — {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
