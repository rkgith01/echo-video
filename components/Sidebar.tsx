"use client";
import { sidbarLink } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathName = usePathname();
  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-3 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-col ">
        {/* <div className="flex items-center justify-center mb-6 pb-6">
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </div> */}
        <div className="flex flex-col gap-6">
          {sidbarLink.map((link) => {
            const isActive =
              pathName === link.route && pathName.startsWith(link.route);

            return (
              <Link
                // className={`flex items-center gap-2 p-2 text-sm font-medium rounded-md ${isActive ? 'bg-dark-1' : 'hover:border-dashed hover:border-2 hover:border-gray-100 '}`}

                key={link.label}
                href={link.route}
                className={cn(
                  "flex gap-4 items-center p-4 rounded-lg justify-start",
                  { "bg-orange-500": isActive }
                )}
              >
                <link.icon className="w-6 h-6" />
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Sidebar */}
    </section>
  );
};

export default Sidebar;

// 34452

{
  /* <div className="flex items-center justify-center"> </div>*/
}
