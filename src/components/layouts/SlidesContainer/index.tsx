"use client";

import ShineBorder from "@/components/magicui/shine-border";
import { learn } from "@/constants/learn";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SlidesContainer({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames?: string;
}) {
  const path = usePathname();

  return (
    <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
      <div
        className={cn(
          "grid grid-cols-10 rounded-xl overflow-clip relative",
          classNames
        )}
      >
        <div className="h-[52px] w-10 lg:hidden absolute right-0 bg-gradient-to-r from-transparent to-neutral-900" />
        <div className="lg:col-[1/3] col-[1/11] max-h-20 lg:max-h-full w-full flex lg:flex-col gap-4 lg:gap-0 overflow-auto bg-neutral-900">
          {learn.map((item) => (
            <Link
              href={item.href}
              key={item.id}
              className={`inline-block min-w-max lg:min-w-0 hover:text-white hover:bg-white/5 p-4 transition-all duration-300 ease-in-out bg-gradient-to-r ${
                path === item.href
                  ? "from-pink-500 to-violet-600/5 text-white"
                  : "bg-transparent"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="min-h-[700px] max-h-[700px] lg:col-[3/11] col-[1/11] h-full bg-neutral-950 overflow-y-auto">
          {children}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-neutral-900" />
      </div>
    </ShineBorder>
  );
}
