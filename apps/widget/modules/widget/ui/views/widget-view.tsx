"use client";

import { WidgetFooter } from "../components/widget-footer";
import { WidgetHeader } from "../components/widget-header";

interface WidgetViewProps {
  organizationId: string;
}

export const WidgetView = ({ organizationId }: WidgetViewProps) => {
  return (
    <main className="flex h-full w-full flex-col overflow-hidden rounded-xl border bg-muted min-h-screen min-w-screen">
      <WidgetHeader>Header</WidgetHeader>
      <div className="flex flex-1">Widget view : {organizationId}</div>
      <WidgetFooter />
    </main>
  );
};
