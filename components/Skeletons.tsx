export function CardSkeleton() {
  return (
    <div className="card card-tight animate-pulse">
      <div className="h-4 w-24 bg-neutral-200 dark:bg-neutral-800 rounded mb-3" />
      <div className="h-8 w-16 bg-neutral-200 dark:bg-neutral-800 rounded" />
    </div>
  );
}

export function ChartSkeleton() {
  return (
    <div className="card card-tight animate-pulse">
      <div className="h-4 w-40 bg-neutral-200 dark:bg-neutral-800 rounded mb-3" />
      <div className="h-56 bg-neutral-200 dark:bg-neutral-800 rounded" />
    </div>
  );
}
