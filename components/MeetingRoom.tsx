import { cn } from "@/lib/utils";
import {
  CallControls,
  CallParticipantsList,
  CallStatsButton,
  CallingState,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LayoutList, Users } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import EndCallButton from "./EndCallButton";
import Loader from "./Loader";
// import { User } from "@clerk/nextjs/server";

type CallLayoutType = "grid" | "speaker-left" | "speaker-right";

const MeetingRoom = () => {
  const serachParams = useSearchParams()
  const isPersonalRoom = !!serachParams.get('Personal')

  const [layout, setLayout] = useState("speaker-left");
  const [showParticipants, setShowParticipants] = useState(false);

  const {useCallCallingState} = useCallStateHooks()
  const router = useRouter()

  const callingState = useCallCallingState()

  if(callingState !== CallingState.JOINED) return <Loader/>
 

  const CallLayout = () => {
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />;
      case "speaker-right":
        return <SpeakerLayout participantsBarPosition={"left"} />;
      default:
        return <SpeakerLayout participantsBarPosition={"right"} />;
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden pt-4 text-white">
      <div className="relative flex size-full items-center justify-center">
        <div className="flex size-full max-w-[1000px] items-center">
          <CallLayout />
        </div>
        <div
          className={cn("h-[100%] border-2 rounded-md px-4 py-4  w-full max-w-[350px] hidden ml-2", {
            'block': showParticipants,
          })}
        >
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
      </div>
      <div className="fixed bottom-0 flex w-full items-center justify-center gap-5 flex-wrap    ">
        <CallControls onLeave={() => router.push('/')} />

        <DropdownMenu>
          <div className="flex items-center">
          <DropdownMenuTrigger className="rounded-2xl cursor-pointer bg-[#19232d] px-4 py-4 hover:bg-[#4c535b]">
            <LayoutList size={20} className="text-white"/>
          </DropdownMenuTrigger>

          </div>
          <DropdownMenuContent className="border-dark-3 bg-dark-1 text-white">
            {['Grid', 'Speaker-Left', 'Speaker-Right'].map((item, index) => (
              <div key={index}>
                <DropdownMenuItem className="cursor-pointer"
                  onClick={() => setLayout(item.toLowerCase() as CallLayoutType)}
                >
                  {item}
                </DropdownMenuItem>
              </div>
            ))}
            <DropdownMenuSeparator className="border-dark-1" />
          </DropdownMenuContent>
        </DropdownMenu>


        <CallStatsButton/>

        <button onClick={() => setShowParticipants(!showParticipants)}>
          <div className="cursor-pointer rounded-2xl bg-[#19232d] p-4 hover:bg-[#4c535b]">
            <Users/>
          </div>
        </button>
        {!isPersonalRoom && <EndCallButton/>}
      </div>
    </section>
  );
};

export default MeetingRoom;
