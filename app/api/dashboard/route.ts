import { NextRequest } from "next/server";

const base = {
  statuses: [
    { label: "KYC Initiated", count: 120 },
    { label: "Under Process", count: 80 },
    { label: "Registered", count: 150 },
    { label: "Validated", count: 110 },
    { label: "Hold", count: 12 },
    { label: "Docs Pending", count: 20 },
  ],
  categories: {
    individual: { RI: 68, NRI: 32 },
    nonIndividual: { RI: 55, NRI: 45 },
  },
  circular: { solicited: 400, received: 360, consumed: 300, pending: 60 },
  panStats: {
    solicited: { withImage: 240, withoutImage: 160 },
    dataReceived: { withImage: 210, withoutImage: 90 },
  },
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const range = searchParams.get("range") || "Today";
  const view = searchParams.get("view") || "Individual";

  // Mock different numbers based on range and view
  const bump = range === "This Month" ? 1.25 : range === "Custom" ? 0.85 : 1;
  const viewMul = view === "Non-Individual" ? 0.75 : 1;

  const todayInd = Math.round(180 * bump * viewMul);
  const todayNonInd = Math.round(140 * bump * (2 - viewMul));
  const yestInd = Math.round(150 * bump * viewMul);
  const yestNonInd = Math.round(120 * bump * (2 - viewMul));

  return Response.json({
    totals: {
      newKyc: { count: Math.round(320 * bump), changePct: 8 },
      modifiedKyc: { count: Math.round(64 * bump), changePct: -4 },
    },
    bars: {
      today: { individual: todayInd, nonIndividual: todayNonInd },
      yesterday: { individual: yestInd, nonIndividual: yestNonInd },
    },
    statuses: base.statuses.map(s => ({ ...s, count: Math.round(s.count * bump) })),
    categories: base.categories,
    circular: base.circular,
    panStats: base.panStats,
    profile: { name: "Alex Johnson", date: new Date().toISOString() },
  });
}
