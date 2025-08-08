"use client";

import { useAtomValue } from "jotai";
import { WidgetAuthScreen } from "../screens/widget-auth-screen";
import { screenAtom } from "../../atoms/widget-atoms";

interface WidgetViewProps {
  organizationId: string;
}

export const WidgetView = ({ organizationId }: WidgetViewProps) => {
  const screen = useAtomValue(screenAtom);
  const screenComponents = {
    auth: <WidgetAuthScreen />,
    error: <div>TODO: Error</div>,
    loading: <div>TODO: Loading</div>,
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
