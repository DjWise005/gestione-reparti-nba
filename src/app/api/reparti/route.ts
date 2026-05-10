import { getReparti } from '@/lib/airtable';

export const revalidate = 60;

export async function GET(): Promise<Response> {
  try {
    const reparti = await getReparti();
    return Response.json({ reparti });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Errore sconosciuto';
    return Response.json({ error: message }, { status: 500 });
  }
}
