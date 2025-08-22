"use client";

import { useAtomValue } from "jotai";
import { WidgetAuthScreen } from "../screens/widget-auth-screen";
import { screenAtom } from "../../atoms/widget-atoms";
import { WidgetErrorScreen } from "../screens/widget-error-screen";
import { WidgetLoadingScreen } from "../screens/widget-loading-screen";

interface WidgetViewProps {
  organizationId: string | null;
}

export const WidgetView = ({ organizationId }: WidgetViewProps) => {
  const screen = useAtomValue(screenAtom);
  const screenComponents = {
    auth: <WidgetAuthScreen />,
    error: <WidgetErrorScreen />,
    loading: <WidgetLoadingScreen organizationId={organizationId} />,
    voice: <div>TODO: Voice</div>,
    inbox: <div>TODO: Inbox</div>,
    selection: <div>TODO: Selection</div>,
    chat: <div>TODO: Chat</div>,
    contact: <div>TODO: Contact</div>,
  };

  return (
    <main className="flex h-full w-full flex-col overflow-hidden rounded-xl border bg-muted min-h-screen min-w-screen">
      {screenComponents[screen]}
    </main>
  );
};
