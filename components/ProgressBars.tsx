export default function ProgressBars({
  title,
  items,
}: {
  title: string;
  items: { label: string; value: number }[];
}) {
  return (
    <div className="card card-tight">
      <div className="mb-3 font-medium">{title}</div>
      <div className="space-y-3">
        {items.map((it) => (
          <div key={it.label}>
            <div className="flex justify-between text-sm">
              <div>{it.label}</div>
              <div>{it.value}%</div>
            </div>
            <div className="h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
              <div
                className="h-2 bg-brand rounded-full"
                style={{ width: `${it.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
