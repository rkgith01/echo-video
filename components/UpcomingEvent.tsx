"use client";
import React, { useEffect, useState } from "react";
import { useGetCalls } from "@/hooks/useGetCalls";
import { CalendarFold, Loader2, SquareArrowUpRight } from "lucide-react";
import { Call } from "@stream-io/video-react-sdk"; // Assuming this is the type of your event

const UpcomingEvent = () => {
  const { upComingCalls, isLoading } = useGetCalls();
  const [upcomingEvent, setUpcomingEvent] = useState<Call | null>(null); // Specify the type here

  useEffect(() => {
    const fetchUpcomingEvent = async () => {
      try {
        // Assuming upComingCalls contains a list of upcoming events
        if (upComingCalls && upComingCalls.length > 0) {
          // Filter out events that start after today
          const today = new Date();
          const upcomingEventsAfterToday = upComingCalls.filter(call => {
            const startsAt = call.state?.startsAt;
            return startsAt && startsAt > today;
          });

          // Sort the filtered events by start date
          upcomingEventsAfterToday.sort((a, b) => {
            const startsAtA = a.state?.startsAt;
            const startsAtB = b.state?.startsAt;
            return startsAtA && startsAtB ? startsAtA.getTime() - startsAtB.getTime() : 0;
          });

          // Set the first upcoming event after today
          setUpcomingEvent(upcomingEventsAfterToday[0] || "No meeting available");
        }
      } catch (error) {
        console.error("Failed to fetch upcoming event:", error);
      }
    };

    fetchUpcomingEvent();
  }, [upComingCalls]);

  if (isLoading) return <Loader2 className="animate-spin"/>;

  return upcomingEvent ? (
    <div className="flex flex-col gap-2">
      <h2 className="max-w-[280px] flex items-center gap-2 rounded px-2 py-2 text-center text-base font-normal bg-[#c5c3c3]/20 backdrop-opacity-10 backdrop-invert ">
        <span><SquareArrowUpRight /></span>
        Upcoming Event: {upcomingEvent.state?.custom?.description || "No Description"}
      </h2>
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl lg:text-7xl font-bold">
          {upcomingEvent.state?.startsAt?.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) || ""}
        </h1>
        <p className="text-lg font-medium lg:text-2xl text-blue-100">
          {upcomingEvent.state?.startsAt?.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' }) || ""}
        </p>
      </div>
    </div>
  ) : (
    <div>No upcoming event</div>
  );
};

export default UpcomingEvent;
