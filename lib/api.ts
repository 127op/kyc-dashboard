export type DashboardResponse = {
  totals: {
    newKyc: { count: number; changePct: number };
    modifiedKyc: { count: number; changePct: number };
  };
  bars: {
    today: { individual: number; nonIndividual: number };
    yesterday: { individual: number; nonIndividual: number };
  };
  statuses: { label: string; count: number }[];
  categories: {
    individual: { RI: number; NRI: number };
    nonIndividual: { RI: number; NRI: number };
  };
  circular: { solicited: number; received: number; consumed: number; pending: number };
  panStats: {
    solicited: { withImage: number; withoutImage: number };
    dataReceived: { withImage: number; withoutImage: number };
  };
  profile: { name: string; date: string };
};

export async function fetchDashboard(range: string, view: string) {
  const res = await fetch(`/api/dashboard?range=${encodeURIComponent(range)}&view=${encodeURIComponent(view)}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch");
  return (await res.json()) as DashboardResponse;
}
