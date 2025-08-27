import { ConversationsIdView } from "@/modules/dashboard/ui/views/conversations-id-view";
import { Id } from "@workspace/backend/_generated/dataModel";

export default async function Page({
  params,
}: {
  params: Promise<{ conversationId: string }>;
}) {
  const { conversationId } = await params;

  return (
    <ConversationsIdView
      conversationId={conversationId as Id<"conversations">}
    />
  );
}
