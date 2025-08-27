import { ConversationLayout } from "@/modules/dashboard/ui/layouts/conversation-layout";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <ConversationLayout>{children}</ConversationLayout>;
};

export default Layout;
