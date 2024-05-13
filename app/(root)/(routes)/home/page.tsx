import MeetingListType from "@/components/MeetingListType";
import UpcomingEvent from "@/components/UpcomingEvent";
import React from "react";

const now = new Date();
// we want to only show current time
const time = now.toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
});
// we want to show only current date
const date = now.toLocaleDateString("en-US", {
  weekday: "short",
  year: "numeric",
  month: "long",
  day: "numeric",
});

const CurrentInfo = ({ time, date }: { time: string; date: any }) => (
  <div className="flex flex-col gap-2 mt-2 px-6 py-4">
    <h1 className="text-sm">Today</h1>
    <h2 className="text-4xl lg:text-7xl font-bold">{time}</h2>
    <p className="text-lg font-medium lg:text-2xl text-blue-100">{date}</p>
  </div>
);

const Home = () => {
  return (
    <section className="flex flex-col gap-10 text-white">
      <div className="h-full w-full bg-gradient-to-br from-blue-700 via-blue-800 to-gray-900 rounded-lg flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-4 lg:p-8 overflow-y-auto">
          <UpcomingEvent />
        </div>
        <div className="lg:w-1/2 p-4 lg:p-8 flex justify-center items-center">
          <div className="max-w-[350px] w-full rounded px-4 py-2 text-center text-base font-normal bg-[#c5c3c3]/20 backdrop-opacity-5 backdrop-invert">
            <CurrentInfo time={time} date={date} />
          </div>
        </div>
      </div>
      <MeetingListType />
    </section>
  );
};

export default Home;
