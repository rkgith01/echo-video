"use client";
import {
  Video,
  Plus,
  UserPlus,
  Calendar,
  BadgeCheck,
} from "lucide-react";
import HomeCards from "./HomeCards";
import { useState } from "react";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "./ui/textarea";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Input } from "./ui/input";

const MeetingListType = () => {
  const { user } = useUser();
  const router = useRouter();
  const [meetState, setMeetState] = useState<
    "isScheduleMeeting" | "isJoinMeeting" | "isInstantMeeting" | undefined
  >();
  const client = useStreamVideoClient();
  const dataStartedAt = {
    dateTime: new Date(),
    descrption: "",
    link: "",
  };
  const [value, setValue] = useState(dataStartedAt);
  const [callInfo, setCallInfo] = useState<Call>();
  const { toast } = useToast();

  const meetingLink = `${process.env.NEXT_PUBLIC_HOST_URL}/meeting/${callInfo?.id}`

  const createMeeting = async () => {
    if (!user || !client) return;
    try {
      if (!value.dateTime) {
        toast({ title: "Please select a date and time" });
        return;
      }

      const id = crypto.randomUUID();
      const callToMake = client.call("default", id);
      if (!callToMake) throw new Error("Failed to create Call");

      const startedAt =
        value.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = value.descrption || "Instant Meeting";

      await callToMake.getOrCreate({
        data: {
          starts_at: startedAt,
          custom: {
            description,
          },
        },
      });
      setCallInfo(callToMake);

      if (!value.descrption) {
        router.push(`/meeting/${callToMake.id}`);
      }
      toast({ title: "Meeting created" });
    } catch (error) {
      console.log(error);
      toast({
        title: "Failed to create meeting",
        // description: "Friday, February 10, 2023 at 5:57 PM",
      });
    }
  };

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCards
        icon={Plus}
        title="New Meeting"
        description="Create a new meeting instantly."
        iColor="text-black"
        bgColor="bg-gradient-to-b from-orange-500 to-yellow-300"
        handleClick={() => setMeetState("isInstantMeeting")}
      />
      <HomeCards
        icon={Calendar}
        title="Schedule Meetings"
        description="Plan your meetings."
        iColor="text-black"
        bgColor="bg-gradient-to-r from-green-500 to-gray-300"
        handleClick={() => setMeetState("isScheduleMeeting")}
      />
      <HomeCards
        icon={Video}
        title="View Recordings"
        description="check your recordings"
        iColor="text-black"
        bgColor="bg-gradient-to-tr from-purple-500 to-blue-300"
        handleClick={() => router.push("/recordings")}
      />
      <HomeCards
        icon={UserPlus}
        title="Join Meeting"
        description="Via invite link."
        iColor="text-black"
        bgColor="bg-gradient-to-b from-blue-500 to-green-300"
        handleClick={() => setMeetState("isJoinMeeting")}
      />

      {!callInfo ? (
        <MeetingModal
          isOpen={meetState === "isScheduleMeeting"}
          onClose={() => setMeetState(undefined)}
          title="Create Meeting"
          // className="text-center"
          // buttonText="Start"
          handleClick={createMeeting}
        >
          <div className="flex flex-col gap-3">
            <label htmlFor="description" className="text-lg font-medium">
              Description
            </label>
            <Textarea
              // type="text"
              id="description"
              value={value.descrption}
              onChange={(e) =>
                setValue({ ...value, descrption: e.target.value })
              }
              className="w-full rounded-md border border-gray-300 p-2 bg-dark-2 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <div className="flex flex-col gap-3 w-full">
            <label className="text-blue-100 text-base leading-[22px]">
              Select
            </label>
            <ReactDatePicker
              selected={value.dateTime}
              onChange={(date) => setValue({ ...value, dateTime: date! })}
              className="w-full rounded-md border border-gray-300 p-2 bg-dark-2 focus-visible:ring-0 focus-visible:ring-offset-0"
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </div>
        </MeetingModal>
      ) : (
        <MeetingModal
          isOpen={meetState === "isScheduleMeeting"}
          onClose={() => setMeetState(undefined)}
          title="Meeting Created"
          className="text-center"
          buttonText="Copy Meeting Link"
          handleClick={() => {
            navigator.clipboard.writeText(meetingLink)
            toast({title: 'Link copied'})
          }}
          icon={BadgeCheck}
        />
      )}
      <MeetingModal
        isOpen={meetState === "isInstantMeeting"}
        onClose={() => setMeetState(undefined)}
        title="Start Meeting"
        className="text-center"
        buttonText="Start"
        handleClick={createMeeting}
      />
      <MeetingModal
        isOpen={meetState === "isJoinMeeting"}
        onClose={() => setMeetState(undefined)}
        title="Type the Link here"
        className="text-center"
        buttonText="Join Meeting"
        handleClick={() => router.push(value.link)}
      >
        <Input placeholder="Meeting Link" className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0" onChange={(e) => setValue({ ...value, link: e.target.value })}/>
      </MeetingModal>
    </section>
  );
};

export default MeetingListType;
