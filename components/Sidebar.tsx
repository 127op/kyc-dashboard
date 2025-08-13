"use client";

import { useState } from "react";
import { LayoutDashboard, FileText, CreditCard, FileSignature, Bell, FileArchive, Menu } from "lucide-react";
import clsx from "clsx";

const items = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/" },
  { label: "Applications", icon: FileText, href: "/applications" },
  { label: "Billing", icon: CreditCard, href: "/billing" },
  { label: "Rate Card", icon: FileArchive, href: "/rate-card" },
  { label: "Agreement Copy", icon: FileSignature, href: "/agreements" },
  { label: "Notices", icon: Bell, href: "/notices" },
];

export default function Sidebar({ active = "/" }: { active?: string }) {
  const [open, setOpen] = useState(true);
  return (
    <aside className="h-full">
      <div className="sm:hidden p-2">
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800"
        >
          <Menu size={18} /> Menu
        </button>
      </div>
      <div className={clsx(
        "sm:flex sm:flex-col sm:w-64 sm:shrink-0 sm:sticky sm:top-0 sm:h-[100dvh]",
        "border-r border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900",
        "hidden",
        { "block": open, "sm:block": true }
      )}>
        <div className="p-4 border-b border-neutral-100 dark:border-neutral-800">
          <div className="flex items-center gap-2">
            <div className="size-9 rounded-xl bg-brand"></div>
            <div className="font-semibold">KYC Portal</div>
          </div>
        </div>
        <nav className="p-2 space-y-1">
          {items.map((item) => {
            const Icon = item.icon;
            const activeItem = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={clsx(
                  "flex items-center gap-3 rounded-xl px-3 py-2 text-sm",
                  activeItem
                    ? "bg-brand text-white"
                    : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                )}
              >
                <Icon size={18} />
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
