/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useGetCallbyId } from "@/hooks/useGetCallbyId";
import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { Copy, UserRoundPlus } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const Table = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="flex flex-col items-start gap-2 xl:flex-row">
    <h1 className="text-base font-medium text-blue-300 lg:text-xl xl:min-w-32 ">
      {title}:
    </h1>
    <h1 className="truncate text-sm font-bold max-sm:max-w-[320px] lg:text-xl">
      {description}
    </h1>
  </div>
);

const PersonalRoom = () => {
  const { user } = useUser();
  const meetingId = user?.id;
  const { toast } = useToast();
  const { call } = useGetCallbyId(meetingId!);
  const router = useRouter();
  const client = useStreamVideoClient();

  const meetingLink = `${process.env.NEXT_PUBLIC_HOST_URL}/meeting/${meetingId}?personal=true`;

  const startRoom = async () => {
    if (!client || !user) return;

    if (!call) {
      const newCall = client.call("default", meetingId!);

      await newCall?.getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
        },
      });
    }
    router.push(`/meeting/${meetingId}?personal=true`);
  };

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <UserRoundPlus size={30} />
        <span>Personal Room</span>
      </h1>

      <div className="flex flex-col gap-8 xl:max-w-[900px] w-full ">
        <img
          src={user?.imageUrl}
          alt="logo"
          className="w-[100px] h-[100px] rounded"
          width={100}
          height={100}
        />
        <div>
          <p>
            <span className="font-bold text-blue-300">User: </span>
            {user?.username}
          </p>
        </div>
      </div>
      <span className="border-t-[1px] w-[50%] border-gray-300"></span>
      <div className="flex w-full flex-col gap-8 xl:max-w-[900px]">
        <Table
          title="Topic"
          description={`Metting Room of: ${user?.username}`}
        />
        <Table title="Meeting ID" description={`${meetingId}`} />
        <Table title="Meeting Link" description={`${meetingLink}`} />
      </div>

      <div className="flex gap-5">
        <Button
          className="bg-orange-500 hover:bg-amber-300 text-black"
          onClick={startRoom}
        >
          Start Meeting
        </Button>
        <Button
          className="bg-gray-500 hover:bg-gray-300"
          onClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast({
              title: "Link Copied",
            });
          }}
        >
          <Copy color="black" />
        </Button>
      </div>
    </section>
  );
};

export default PersonalRoom;
