"use client";
import { useGetCalls } from "@/hooks/useGetCalls";
import { Call, CallRecording } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import MeetingCard from "./MeetingCard";
import { CalendarFold, CircleCheck, Disc2, Play } from "lucide-react";
import Loader from "./Loader";
import { toast } from "./ui/use-toast";

const CallList = ({ type }: { type: "ended" | "upcoming" | "recordings" }) => {
  const { endedCalls, upComingCalls, recordings, isLoading } = useGetCalls();

  const [callRecordings, setCallRecordings] = useState<CallRecording[]>([]);
  const router = useRouter();

  const getCalls = () => {
    switch (type) {
      case "ended":
        return endedCalls;
      case "recordings":
        return callRecordings;
      case "upcoming":
        return upComingCalls;
      default:
        return [];
    }
  };
  const getNoCalls = () => {
    switch (type) {
      case "ended":
        return "No ended calls";
      case "recordings":
        return "No call recordings available";
      case "upcoming":
        return "No upcoming calls";
      default:
        return "";
    }
  };

  useEffect(() => {
    const fetchRecordings = async () => {
      try {
        const callData = await Promise.all(
          recordings.map((item) => item.queryRecordings())
        );
  
        const recording = callData
          .filter((call) => call.recordings.length > 0)
          .flatMap((call) => call.recordings);
        setCallRecordings(recording);
        
      } catch (error) {
        toast({title: 'Try again later', description: 'Failed to fetch recordings', variant: 'destructive'})
      }
    };

    if (type === "recordings") {
      fetchRecordings();
    }
  }, [type, recordings]);

  if (isLoading) return <Loader />;

  const callToShow = getCalls();
  const noCalltoShow = getNoCalls();

  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      {callToShow && callToShow.length > 0 ? (
        callToShow.map((items: Call | CallRecording) => (
          <MeetingCard
            key={(items as Call).id}
            icon={
              type === "ended" ? (
                <div className="flex items-center gap-2">
                <CircleCheck width={28} height={28} />
                <span className="text-lg">Completed</span>
                </div>
              ) : type === "upcoming" ? (
                <CalendarFold width={28} height={28} />
              ) : (
                <Disc2 width={28} height={28} />
              )
            }
            title={
              (items as Call).state?.custom?.description ||
              (items as CallRecording).filename?.substring(0, 20) ||
              "No Description"
            }
            date={
              (items as Call).state?.startsAt?.toLocaleString() ||
              (items as CallRecording).start_time?.toLocaleString()
            }
            isPreviousMeeting={type === "ended"}
            link={
              type === "recordings"
                ? (items as CallRecording).url
                : `${process.env.NEXT_PUBLIC_HOST_URL}/meeting/${
                    (items as Call).id
                  }`
            }
            buttonIcon1={
              type === "recordings" ? (
                <Play width={20} height={20} />
              ) : undefined
            } // Lucid icon
            buttonText={type === "recordings" ? "Play" : "Start"}
            handleClick={
              type === "recordings"
                ? () => router.push(`${(items as CallRecording).url}`)
                : () =>
                    router.push(
                      `${process.env.NEXT_PUBLIC_HOST_URL}/meeting/${
                        (items as Call).id
                      }`
                    )
            }
          />
        ))
      ) : (
        <div className="flex items-center justify-center h-[250px]">
          <h1 className="text-2xl font-bold text-white text-center">
            {noCalltoShow}
          </h1>
        </div>
      )}
    </div>
  );
};

export default CallList;
