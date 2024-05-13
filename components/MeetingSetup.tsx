"use client"
import {
  DeviceSettings,
  VideoPreview,
  useCall,
} from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const MeetingSetup = ({ setIsSetup }: { setIsSetup: (value: boolean) => void }) => {
  const [isMicOn, setIsMicOn] = useState(false);

  const call = useCall();

  if (!call) throw new Error("UseCall must be used within stream component");

  useEffect(() => {
    if (isMicOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  });

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
      <h1 className="text-2xl font-bold">Setup</h1>
      <VideoPreview />
      <div className="flex h-16 items-center justify-center gap-4">
        <label className="flex items-center justify-center gap-2 font-medium">
          <input
            type="checkbox"
            checked={isMicOn}
            onChange={(e) => setIsMicOn(e.target.checked)}
          />
          Enable microphone
        </label>

        <DeviceSettings />
      </div>
      <Button
        className="rounded-md bg-green-300 px-4 py-2.5 "
        onClick={() => {
          call.join();
          setIsSetup(true);
        }}
      >
        Join Meeting
      </Button>
    </div>
  );
};

export default MeetingSetup;
