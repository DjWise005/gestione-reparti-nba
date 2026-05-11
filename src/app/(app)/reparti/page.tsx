import { getReparti } from '@/lib/airtable';
import type { Reparto } from '@/types/airtable';
import { PageContainer, PageHeader } from '@/components/shared/PageContainer';

export const revalidate = 60;

const statoBadge: Record<Reparto['stato'], string> = {
  'Attivo':              'bg-green-500/20 text-green-400 border-green-500/30',
  'Inattivo':            'bg-red-500/20 text-red-400 border-red-500/30',
  'In Ristrutturazione': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  '':                    'bg-slate-500/20 text-slate-400 border-slate-500/30',
};

export default async function RepartiPage() {
  let reparti: Reparto[] = [];
  let errore = false;

  try {
    reparti = await getReparti();
  } catch {
    errore = true;
  }

  return (
    <PageContainer>
      <PageHeader
        title="Reparti"
        description={!errore ? `${reparti.length} totali` : undefined}
      />

      {/* Errore */}
      {errore && (
        <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-6 py-5 text-red-300 text-sm">
          Impossibile caricare i reparti. Riprova tra qualche istante o contatta l&apos;amministratore.
        </div>
      )}

      {/* Empty state */}
      {!errore && reparti.length === 0 && (
        <div className="text-center py-24 text-slate-500">
          Nessun reparto trovato.
        </div>
      )}

      {/* Tabella */}
      {!errore && reparti.length > 0 && (
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm text-left">
            <thead className="bg-white/5 text-slate-400 uppercase text-xs tracking-wider">
              <tr>
                <th className="px-5 py-4">Nome Reparto</th>
                <th className="px-5 py-4">Responsabile</th>
                <th className="px-5 py-4">Dipendenti</th>
                <th className="px-5 py-4">Budget</th>
                <th className="px-5 py-4">Sede</th>
                <th className="px-5 py-4">Stato</th>
                <th className="px-5 py-4">Email</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {reparti.map((r) => (
                <tr key={r.id} className="bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                  <td className="px-5 py-4 font-semibold text-white">{r.nomeReparto || '—'}</td>
                  <td className="px-5 py-4 text-slate-300">{r.responsabile || '—'}</td>
                  <td className="px-5 py-4 text-slate-300">{r.numDipendenti || '—'}</td>
                  <td className="px-5 py-4 text-slate-300">
                    {r.budget ? `€ ${r.budget.toLocaleString('it-IT')}` : '—'}
                  </td>
                  <td className="px-5 py-4 text-slate-300">{r.sede || '—'}</td>
                  <td className="px-5 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${statoBadge[r.stato]}`}>
                      {r.stato || 'N/D'}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-slate-300">{r.emailReparto || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </PageContainer>
  );
}
