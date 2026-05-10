// Campi raw restituiti da Airtable (nomi esatti delle colonne nella tabella)
export interface RepartoFields {
  'Nome Reparto'?: string;
  'Responsabile'?: string;
  'N° Dipendenti'?: number;
  'Budget (€)'?: number;
  'Sede'?: string;
  'Stato'?: string;
  'Email Reparto'?: string;
  'Descrizione'?: string;
  'Data Creazione'?: string;
}

// Record Airtable generico
export interface AirtableRecord<T> {
  id: string;
  createdTime: string;
  fields: T;
}

// Risposta lista da Airtable (offset presente se ci sono più di 100 record)
export interface AirtableResponse<T> {
  records: AirtableRecord<T>[];
  offset?: string;
}

// Tipo normalizzato usato nell'app (camelCase, disaccoppiato dai nomi Airtable)
export interface Reparto {
  id: string;
  nomeReparto: string;
  responsabile: string;
  numDipendenti: number;
  budget: number;
  sede: string;
  stato: 'Attivo' | 'Inattivo' | 'In Ristrutturazione' | '';
  emailReparto: string;
  descrizione: string;
  dataCreazione: string;
}
