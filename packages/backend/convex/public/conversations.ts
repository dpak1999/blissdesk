import { ConvexError, v } from "convex/values";
import { mutation, query } from "../_generated/server";

export const getOne = query({
  args: {
    conversationId: v.id("conversations"),
    contactSessionId: v.id("contactSessions"),
  },
  handler: async (ctx, args) => {
    const session = await ctx.db.get(args.contactSessionId);
    if (!session || session.expiresAt < Date.now()) {
      throw new ConvexError({
        code: "UNAUTHORIZED",
        message: "Invalid session",
      });
    }

    const conversation = await ctx.db.get(args.conversationId);
    if (!conversation) {
      throw new ConvexError({
        code: "NOT_FOUND",
        message: "Conversation not found",
      });
    }

    if (conversation?.contactSessionId !== session._id) {
      throw new ConvexError({
        code: "UNAUTHORIZED",
        message: "Incorrect session",
      });
    }

    return {
      id: conversation._id,
      status: conversation.status,
      threadId: conversation.threadId,
    };
  },
});

export const create = mutation({
  args: {
    organizationId: v.string(),
    contactSessionId: v.id("contactSessions"),
  },
  handler: async (ctx, args) => {
    const session = await ctx.db.get(args.contactSessionId);
    if (!session || session.expiresAt < Date.now()) {
      throw new ConvexError({
        code: "UNAUTHORIZED",
        message: "Invalid session",
      });
    }

    // TODO : fix when thread available
    const threadId = "123";
    const conversationId = await ctx.db.insert("conversations", {
      contactSessionId: session._id,
      organizationId: args.organizationId,
      status: "unresolved",
      threadId,
    });

    return conversationId;
  },
});
