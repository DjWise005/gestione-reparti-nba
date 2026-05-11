import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getRepartoDetail } from '@/services/reparti.service';
import { PageContainer, PageHeader } from '@/components/shared/PageContainer';

export const revalidate = 60;

const statoBadge: Record<string, string> = {
  'Attivo':              'bg-green-500/20 text-green-400 border-green-500/30',
  'Inattivo':            'bg-red-500/20 text-red-400 border-red-500/30',
  'In Ristrutturazione': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  '':                    'bg-slate-500/20 text-slate-400 border-slate-500/30',
};

export default async function RepartoDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const reparto = await getRepartoDetail(id).catch(() => notFound());

  const campi = [
    { label: 'Responsabile',   value: reparto.responsabile },
    { label: 'N° Dipendenti',  value: reparto.numDipendenti > 0 ? String(reparto.numDipendenti) : '' },
    { label: 'Budget',         value: reparto.budget > 0 ? `€ ${reparto.budget.toLocaleString('it-IT')}` : '' },
    { label: 'Sede',           value: reparto.sede },
    { label: 'Email',          value: reparto.emailReparto },
    { label: 'Data Creazione', value: reparto.dataCreazione },
    { label: 'Descrizione',    value: reparto.descrizione },
  ].filter(({ value }) => Boolean(value));

  return (
    <PageContainer>
      <Link href="/reparti" className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors mb-6">
        ← Torna ai reparti
      </Link>
      <PageHeader title={reparto.nomeReparto || 'Reparto'} />

      <div className="mb-6">
        <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${statoBadge[reparto.stato] ?? statoBadge['']}`}>
          {reparto.stato || 'N/D'}
        </span>
      </div>

      <dl className="divide-y divide-white/5">
        {campi.map(({ label, value }) => (
          <div key={label} className="py-4">
            <dt className="text-xs text-slate-500 uppercase tracking-wider mb-1">{label}</dt>
            <dd className="text-slate-200 text-sm">{value}</dd>
          </div>
        ))}
      </dl>
    </PageContainer>
  );
}
