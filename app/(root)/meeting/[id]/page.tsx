"use client";
import Loader from "@/components/Loader";
import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetup from "@/components/MeetingSetup";
import { useGetCallbyId } from "@/hooks/useGetCallbyId";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import React, { useState } from "react";

const Meeting = ({ params: { id } }: { params: { id: string } }) => {
  const { user, isLoaded } = useUser();
  const [isSetUp, setIsSetup] = useState(false);

  const { call, isLoading } = useGetCallbyId(id);

  if (!isLoaded || isLoading) return <Loader />;

  return (
    // <div>Meeting Room: #{params.id}</div>
    <main className="h-screen w-full">
      {/* <h1 className='text-3xl font-bold'>Meeting Room: #{params.id}</h1> */}
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetUp ? (
            <MeetingSetup setIsSetup={setIsSetup} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Meeting;
