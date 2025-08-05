"use client";

import { useVapi } from "@/modules/widget/hooks/use-vapi";
import { Button } from "@workspace/ui/components/button";

export default function Page() {
  const {
    endCall,
    isConnected,
    isConnecting,
    isSpeaking,
    startCall,
    transcript,
  } = useVapi();

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Button onClick={() => startCall()}>VAPI-Start call</Button>
      <Button variant={"destructive"} onClick={() => endCall()}>
        VAPI-End call
      </Button>
      <p>isConnected : {`${isConnected}`}</p>
      <p>isConnecting : {`${isConnecting}`}</p>
      <p>isSpeaking : {`${isSpeaking}`}</p>

      <p>{JSON.stringify(transcript, null, 2)}</p>
    </div>
  );
}
