import { PageContainer, PageHeader } from "@/components/shared/PageContainer";

export default function ImpostazioniPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Impostazioni"
        description="Area configurazione sistema"
      />
      <p className="text-slate-500 text-sm">
        La configurazione verrà sviluppata nei prossimi step.
      </p>
    </PageContainer>
  );
}
