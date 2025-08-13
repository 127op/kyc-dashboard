"use client";

import clsx from "clsx";

type TabProps = {
  tabs: string[];
  value: string;
  onChange: (v: string) => void;
};

export function SegmentedTabs({ tabs, value, onChange }: TabProps) {
  return (
    <div className="inline-flex rounded-xl border border-neutral-200 dark:border-neutral-700 p-1 bg-white dark:bg-neutral-900">
      {tabs.map((t) => {
        const active = value === t;
        return (
          <button
            key={t}
            onClick={() => onChange(t)}
            className={clsx(
              "px-3 py-1.5 text-sm rounded-lg",
              active ? "bg-brand text-white" : "hover:bg-neutral-50 dark:hover:bg-neutral-800"
            )}
          >
            {t}
          </button>
        );
      })}
    </div>
  );
}
