"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { sidbarLink } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
// sm:hidden
const MobileNav = () => {
  const pathName = usePathname();
  return (
    <section className="w-full ma-xw-[264px]">
      <Sheet>
        <SheetTrigger>
          <MenuIcon className="w-8 h-8 cursor-pointer text-white sm:hidden" />
        </SheetTrigger>
        <SheetContent side={"left"} className="border-none bg-dark-1">
          <Link href="/" className="flex gap-2 items-center">
            <Image src={"/logo.png"} alt="logo" width={32} height={32} />
            <p className="text-[26px] font-extrabold text-white max-sm:hidden">
              Venth
            </p>
          </Link>

          <div className="flex h-[calc(100vh-100px)] flex-col justify-between overflow-y-auto">
            <SheetClose>
              <section className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidbarLink.map((link) => {
                  const isActive =
                    pathName === link.route && pathName.startsWith(link.route);

                  return (
                    <SheetClose asChild key={link.route}>
                      <Link
                        // className={`flex items-center gap-2 p-2 text-sm font-medium rounded-md ${isActive ? 'bg-dark-1' : 'hover:border-dashed hover:border-2 hover:border-gray-100 '}`}

                        key={link.label}
                        href={link.route}
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-lg w-full max-w-60",
                          { "bg-blue-500": isActive }
                        )}
                      >
                        <link.icon className="w-6 h-6" />
                        <span className="font-semibold">{link.label}</span>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
