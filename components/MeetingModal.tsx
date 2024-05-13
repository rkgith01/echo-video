import React, { ReactNode } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { LucideIcon } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  className?: string;
  children?: ReactNode;
  buttonText?: string;
  title: string;
  onClose: () => void;
  handleClick: () => void;
  icon?: React.ComponentType<any>;
}

const MeetingModal = ({
  isOpen,
  className,
  children,
  buttonText,
  title,
  onClose,
  handleClick,
  icon: Icon,
}: ModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* <DialogTrigger>Open</DialogTrigger> */}
      <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none bg-slate-800 px-6 py-9 text-white">
        <div className="flex flex-col gap-6">
          {Icon && ( // Render icon dynamically
            <div className="flex justify-center">
              <Icon className="w-10 h-10" />
            </div>
          )}
          <h1 className={cn("text-3xl font-bold leading-[42px]", className)}>
            {title}
          </h1>
          {children}
          <Button
            className="bg-blue-300 focus-visible:ring-0 focus-visible:ring-offset-0"
            onClick={handleClick}
          >
            {buttonText || "Schdeule Meeting"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
