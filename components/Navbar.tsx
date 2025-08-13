"use client";

import { Bell, CalendarDays, Search } from "lucide-react";
import ToggleTheme from "./ToggleTheme";
import { format } from "date-fns";
import { useMemo } from "react";

export default function Navbar() {
  const today = useMemo(() => format(new Date(), "PPPP"), []);
  return (
    <div className="sticky top-0 z-20 bg-white/70 dark:bg-neutral-900/70 backdrop-blur border-b border-neutral-100 dark:border-neutral-800">
      <div className="container-pd py-3 flex items-center gap-3">
        <div className="text-sm text-neutral-500 dark:text-neutral-400">Home / <span className="text-neutral-900 dark:text-neutral-100 font-medium">Dashboard</span></div>
        <div className="ml-auto flex items-center gap-2">
          <div className="relative hidden sm:block">
            <input
              placeholder="Search..."
              className="rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand"
            />
            <Search size={16} className="absolute left-3 top-2.5 text-neutral-400" />
          </div>
          <button className="rounded-xl border size-9 grid place-items-center border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800">
            <Bell size={18} />
          </button>
          <ToggleTheme />
          <div className="hidden md:flex items-center gap-3 rounded-xl border px-3 py-2 border-neutral-200 dark:border-neutral-700">
            <div className="text-right leading-tight">
              <div className="text-sm font-medium">Prashant Kushwah</div>
              <div className="text-xs text-neutral-500 flex items-center gap-1"><CalendarDays size={14}/> {today}</div>
            </div>
            <div className="size-9 rounded-full bg-neutral-200 dark:bg-neutral-700" />
          </div>
        </div>
      </div>
    </div>
  );
}
