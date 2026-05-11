import { PageContainer, PageHeader } from '@/components/shared/PageContainer';
import { getRepartiStats } from '@/services/reparti.service';

export const revalidate = 60;

export default async function DashboardPage() {
  let stats;
  try {
    stats = await getRepartiStats();
  } catch {
    return (
      <PageContainer>
        <PageHeader title="Dashboard" description="Panoramica operativa" />
        <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-6 py-5 text-red-300 text-sm">
          Impossibile caricare le statistiche. Riprova tra qualche istante o contatta l&apos;amministratore.
        </div>
      </PageContainer>
    );
  }

  const voci = [
    { label: 'Totale reparti',           value: String(stats.totale) },
    { label: 'Reparti attivi',            value: String(stats.attivi) },
    { label: 'Reparti inattivi',          value: String(stats.inattivi) },
    { label: 'Budget totale',             value: `€ ${stats.budgetTotale.toLocaleString('it-IT')}` },
    { label: 'Budget medio',              value: `€ ${stats.budgetMedio.toLocaleString('it-IT')}` },
    { label: 'Media dipendenti',          value: String(stats.mediaDipendenti) },
    {
      label: 'Reparto con più dipendenti',
      value: stats.repartoConPiuDipendenti
        ? `${stats.repartoConPiuDipendenti.nome} (${stats.repartoConPiuDipendenti.numDipendenti})`
        : '—',
    },
  ];

  return (
    <PageContainer>
      <PageHeader title="Dashboard" description="Panoramica operativa" />

      <dl className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {voci.map(({ label, value }) => (
          <div key={label} className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4">
            <dt className="text-xs text-slate-500 uppercase tracking-wider mb-2">{label}</dt>
            <dd className="text-xl font-semibold text-white">{value}</dd>
          </div>
        ))}
      </dl>
    </PageContainer>
  );
}
