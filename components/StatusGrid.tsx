export default function StatusGrid({ statuses }: { statuses: { label: string; count: number }[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
      {statuses.map((s) => (
        <div key={s.label} className="card card-tight">
          <div className="text-sm text-neutral-500">{s.label}</div>
          <div className="mt-2 text-xl font-semibold">{s.count}</div>
        </div>
      ))}
    </div>
  );
}
