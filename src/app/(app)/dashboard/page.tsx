import { PageContainer, PageHeader } from "@/components/shared/PageContainer";

export default function DashboardPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Dashboard"
        description="Panoramica operativa"
      />
      <p className="text-slate-500 text-sm">
        La dashboard operativa verrà configurata nei prossimi step.
      </p>
    </PageContainer>
  );
}
