"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "./ui/use-toast";
import { Copy } from "lucide-react"; 
import { avatarImages } from "@/constants";

interface MeetingCardProps {
  title: string;
  date: string;
  icon: React.ReactNode;
  isPreviousMeeting?: boolean;
  buttonIcon1?: React.ReactNode;
  buttonText?: string;
  handleClick: () => void;
  link: string;
}

const MeetingCard = ({
  icon,
  title,
  date,
  isPreviousMeeting,
  buttonIcon1,
  handleClick,
  link,
  buttonText,
}: MeetingCardProps) => {
  const { toast } = useToast();

  return (
    <section className="flex min-h-[258px] w-full flex-col justify-between rounded-[14px] bg-gradient-to-br from-gray-900 to-gray-600  px-5 py-8 xl:max-w-[568px]">
      <article className="flex flex-col gap-5">
        {icon} {/* Render Lucid icon */}
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-base font-normal">{date}</p>
          </div>
        </div>
      </article>
      <article
        className={cn(
          "mt-4 flex justify-evenly flex-col lg:flex-row  gap-3",
          {}
        )}
      >
        {/* Render shadcn avatars */}
        <div className="flex w-full max-sm:hidden md:w-[50%]  ">
          {avatarImages.map((img, index) => (
            <>
              <Avatar key={index}>
                <AvatarImage src={img} alt={`Avatar ${index}`} />
              </Avatar>
            </>
          ))}
          {avatarImages.length >= 5 && (
            <div className="items-center justify-center flex  left-[136px] size-10 rounded-full border-[5px] border-dark-2 bg-dark-4">
              +{avatarImages.length - 5}
            </div>
          )}
        </div>
        {!isPreviousMeeting && (
          <div className="flex gap-2 items-center justify-center">
            <Button
              onClick={handleClick}
              className="rounded bg-blue-600 px-6 hover:bg-slate-700"
            >
              {buttonIcon1}
              &nbsp; {buttonText}
            </Button>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(link);
                toast({
                  title: "Link Copied",
                });
              }}
              className="bg-blue-800 px-6 hover:bg-slate-600"
            >
              <Copy width={20} height={20} />
              &nbsp; Copy Link
            </Button>
          </div>
        )}
      </article>
    </section>
  );
};

export default MeetingCard;
