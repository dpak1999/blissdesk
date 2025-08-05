import { useEffect, useState } from "react";
import Vapi from "@vapi-ai/web";

interface TranscriptMessage {
  role: "user" | "assistant";
  text: string;
}

export const useVapi = () => {
  const [vapi, setVapi] = useState<Vapi | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState<TranscriptMessage[]>([]);

  useEffect(() => {
    // Only for testing VAPI connection, users to bring their own VAPI key
    const vapiInstace = new Vapi("api key");
    setVapi(vapiInstace);

    vapiInstace.on("call-start", () => {
      setIsConnected(true);
      setIsConnecting(false);
      setTranscript([]);
    });

    vapiInstace.on("call-end", () => {
      setIsConnected(false);
      setIsConnecting(false);
      setIsSpeaking(false);
    });

    vapiInstace.on("speech-start", () => {
      setIsSpeaking(true);
    });

    vapiInstace.on("speech-end", () => {
      setIsSpeaking(false);
    });

    vapiInstace.on("error", (error: Error) => {
      console.error("VAPI Error:", error);
      setIsConnecting(false);
    });

    vapiInstace.on("message", (message) => {
      if (message.type === "transcript" && message.transcriptType === "final") {
        setTranscript((prev) => [
          ...prev,
          {
            role: message.role === "user" ? "user" : "assistant",
            text: message.transcript,
          },
        ]);
      }
    });

    return () => {
      vapiInstace?.stop();
    };
  }, []);

  const startCall = () => {
    setIsConnecting(true);
    if (vapi) {
      // Only for testing VAPI connection, users to bring their own VAPI assistant ID
      vapi.start("assistant id");
    }
  };

  const endCall = () => {
    if (vapi) {
      vapi.stop();
    }
  };

  return {
    isSpeaking,
    isConnecting,
    isConnected,
    transcript,
    startCall,
    endCall,
  };
};
