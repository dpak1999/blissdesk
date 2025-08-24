import { Agent } from "@convex-dev/agent";
import { google } from "@ai-sdk/google";
import { components } from "../../../_generated/api";

export const supportAgent = new Agent(components.agent, {
  chat: google.chat("gemini-2.0-flash-lite"),
  instructions: "You are a customer support agent",
});
