import 'server-only';

import { getReparti, getRepartoById } from '@/lib/airtable';
import type { Reparto, RepartiStats } from '@/types/airtable';

export async function getRepartiList(): Promise<Reparto[]> {
  const reparti = await getReparti();
  return [...reparti].sort((a, b) => a.nomeReparto.localeCompare(b.nomeReparto, 'it'));
}

export async function getRepartoDetail(id: string): Promise<Reparto> {
  return getRepartoById(id);
}

export async function getRepartiStats(): Promise<RepartiStats> {
  const reparti = await getReparti();

  const totale = reparti.length;
  const attivi = reparti.filter((r) => r.stato === 'Attivo').length;
  const inattivi = reparti.filter((r) => r.stato === 'Inattivo').length;
  const inRistrutturazione = reparti.filter((r) => r.stato === 'In Ristrutturazione').length;

  const budgetTotale = reparti.reduce((acc, r) => acc + r.budget, 0);
  const budgetMedio = totale > 0 ? Math.round(budgetTotale / totale) : 0;

  const dipendentiTotale = reparti.reduce((acc, r) => acc + r.numDipendenti, 0);
  const mediaDipendenti = totale > 0 ? Math.round(dipendentiTotale / totale) : 0;

  const repartoConPiuDipendenti = reparti.reduce<Reparto | null>(
    (top, r) => (top === null || r.numDipendenti > top.numDipendenti ? r : top),
    null,
  );

  return {
    totale,
    attivi,
    inattivi,
    inRistrutturazione,
    budgetTotale,
    budgetMedio,
    mediaDipendenti,
    repartoConPiuDipendenti:
      repartoConPiuDipendenti && repartoConPiuDipendenti.numDipendenti > 0
        ? { nome: repartoConPiuDipendenti.nomeReparto, numDipendenti: repartoConPiuDipendenti.numDipendenti }
        : null,
  };
}
