import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import React from 'react'


interface HomeCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iColor?: string;
  bgColor?: string;
  handleClick: () => void;
}


const HomeCards = ({
  title,
  description,
  icon: Icon,
  iColor,
  bgColor,
  handleClick
}: HomeCardProps) => {
  return (
    // {cn("p-2 w-fit rounded-md ", bgColor)}
    <div className={cn("px-4 py-6 flex flex-col justify-between w-full xl:max-w-[720px] min-h-[260px] rounded-[15px] cursor-pointer", bgColor)}
    onClick={handleClick}
    >
        <div className="flex items-center bg-[#c5c3c3]/20 backdrop-opacity-10 backdrop-invert rounded-[10px] w-[35px] h-[40px]">
            {/* <icon className="w-8 h-8 text-white"/>
             */}
              <Icon className={cn("w-10 h-10", iColor)} />
        </div>
        <div className="flex flex-col gap-2 text-black">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-lg font-medium">{description}</p>
        </div>
        {/* Meeting list */}
    </div>
  )
}

export default HomeCards