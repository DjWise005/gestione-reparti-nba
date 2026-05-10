import 'server-only';

import type { AirtableResponse, RepartoFields, Reparto } from '@/types/airtable';

const BASE_URL = 'https://api.airtable.com/v0';

function getConfig(): { token: string; baseId: string; tableId: string } {
  const token = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableId = process.env.AIRTABLE_TABLE_REPARTI;

  if (!token) throw new Error('Variabile d\'ambiente mancante: AIRTABLE_TOKEN');
  if (!baseId) throw new Error('Variabile d\'ambiente mancante: AIRTABLE_BASE_ID');
  if (!tableId) throw new Error('Variabile d\'ambiente mancante: AIRTABLE_TABLE_REPARTI');

  return { token, baseId, tableId };
}

export async function getReparti(): Promise<Reparto[]> {
  const { token, baseId, tableId } = getConfig();

  const url = `${BASE_URL}/${baseId}/${tableId}?view=Grid%20view`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Errore Airtable: ${res.status} ${res.statusText}`);
  }

  const data: AirtableResponse<RepartoFields> = await res.json();

  return data.records.map((record) => ({
    id: record.id,
    nomeReparto: record.fields['Nome Reparto'] ?? '',
    responsabile: record.fields['Responsabile'] ?? '',
    numDipendenti: record.fields['N° Dipendenti'] ?? 0,
    budget: record.fields['Budget (€)'] ?? 0,
    sede: record.fields['Sede'] ?? '',
    stato: (record.fields['Stato'] ?? '') as Reparto['stato'],
    emailReparto: record.fields['Email Reparto'] ?? '',
    descrizione: record.fields['Descrizione'] ?? '',
    dataCreazione: record.fields['Data Creazione'] ?? '',
  }));
}
