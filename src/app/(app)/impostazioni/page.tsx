import { PageContainer, PageHeader } from '@/components/shared/PageContainer';

const sezioni = [
  {
    titolo: 'Applicazione',
    voci: [
      { label: 'Versione',       value: 'v0.4.0' },
      { label: 'Ambiente',       value: process.env.NODE_ENV ?? '—' },
      { label: 'Stato generale', value: 'MVP attivo' },
    ],
  },
  {
    titolo: 'Infrastruttura',
    voci: [
      { label: 'Database',    value: 'Airtable — collegato' },
      { label: 'Deploy',      value: 'Vercel — auto-deploy attivo' },
      { label: 'Repository',  value: 'GitHub — branch main' },
    ],
  },
  {
    titolo: 'Sicurezza',
    voci: [
      { label: 'Autenticazione', value: 'Non implementata — rimandata a fase dedicata' },
    ],
  },
  {
    titolo: 'Note operative',
    voci: [
      { label: 'ANO-001', value: 'Campi Airtable incompleti: Stato, Budget, N° Dipendenti non popolati — statistiche dashboard parziali' },
    ],
  },
];

export default function ImpostazioniPage() {
  return (
    <PageContainer>
      <PageHeader title="Impostazioni" description="Stato e configurazione del sistema" />

      <div className="space-y-8">
        {sezioni.map(({ titolo, voci }) => (
          <div key={titolo}>
            <h2 className="text-xs text-slate-500 uppercase tracking-wider mb-3">{titolo}</h2>
            <dl className="divide-y divide-white/5 rounded-xl border border-white/10">
              {voci.map(({ label, value }) => (
                <div key={label} className="flex flex-col sm:flex-row sm:items-center gap-1 px-5 py-3">
                  <dt className="text-xs text-slate-500 w-40 shrink-0">{label}</dt>
                  <dd className="text-sm text-slate-200">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}
