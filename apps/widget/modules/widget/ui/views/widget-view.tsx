"use client";

interface WidgetViewProps {
  organizationId: string;
}

export const WidgetView = ({ organizationId }: WidgetViewProps) => {
  return (
    <main className="flex h-full w-full flex-col overflow-hidden rounded-xl border bg-muted">
      Widget view : {organizationId}
    </main>
  );
};
