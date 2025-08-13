import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function CardStat({
  title,
  value,
  change,
  positive,
}: {
  title: string;
  value: number | string;
  change: number;
  positive: boolean;
}) {
  return (
    <div className="card card-tight">
      <div className="text-sm text-neutral-500">{title}</div>
      <div className="mt-2 flex items-end justify-between">
        <div className="text-2xl font-semibold">{value}</div>
        <div className={`badge ${positive ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"}`}>
          {positive ? <ArrowUpRight size={16}/> : <ArrowDownRight size={16}/>}
          {change}%
        </div>
      </div>
    </div>
  );
}
