"use client";

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import CardStat from "@/components/CardStat";
import StatusGrid from "@/components/StatusGrid";
import BarChartCard from "@/components/BarChartCard";
import DonutChartCard from "@/components/DonutChartCard";
import ProgressBars from "@/components/ProgressBars";
import { SegmentedTabs } from "@/components/Tabs";
import { CardSkeleton, ChartSkeleton } from "@/components/Skeletons";
import { fetchDashboard } from "@/lib/api";
import { useEffect, useState } from "react";

type Range = "Today" | "This Month" | "Custom";
type View = "Individual" | "Non-Individual";

export default function Page() {
  const [range, setRange] = useState<Range>("Today");
  const [view, setView] = useState<View>("Individual");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchDashboard(range, view)
      .then((d) => { if (mounted) setData(d); })
      .finally(() => mounted && setLoading(false));
    return () => { mounted = false; };
  }, [range, view]);

  const barData = data ? [
    { label: "Today", Individual: data.bars.today.individual, "Non-Individual": data.bars.today.nonIndividual },
    { label: "Yesterday", Individual: data.bars.yesterday.individual, "Non-Individual": data.bars.yesterday.nonIndividual },
  ] : [];

  const donutData = data ? [
    { name: "Solicited", value: data.circular.solicited },
    { name: "Received", value: data.circular.received },
    { name: "Consumed", value: data.circular.consumed },
    { name: "Pending", value: data.circular.pending },
  ] : [];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container-pd py-6 grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-6">
        <Sidebar active="/" />
        <main className="space-y-6">
          {/* Controls */}
          <div className="flex flex-wrap items-center gap-3">
            <SegmentedTabs tabs={["Today","This Month","Custom"]} value={range} onChange={(v)=>setRange(v as Range)} />
            <SegmentedTabs tabs={["Individual","Non-Individual"]} value={view} onChange={(v)=>setView(v as View)} />
          </div>

          {/* Totals */}
          <div className="grid sm:grid-cols-2 gap-3">
            {loading ? <CardSkeleton /> : (
              <CardStat title="New KYC" value={data.totals.newKyc.count} change={data.totals.newKyc.changePct} positive={true} />
            )}
            {loading ? <CardSkeleton /> : (
              <CardStat title="Modified KYC" value={data.totals.modifiedKyc.count} change={data.totals.modifiedKyc.changePct} positive={false} />
            )}
          </div>

          {/* Chart */}
          {loading ? <ChartSkeleton /> : <BarChartCard data={barData} />}

          {/* Statuses */}
          {loading ? <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">{Array.from({length:6}).map((_,i)=>(<CardSkeleton key={i}/>))}</div>
            : <StatusGrid statuses={data.statuses} />
          }

          {/* Categories & Donut */}
          <div className="grid lg:grid-cols-3 gap-3">
            {loading ? <CardSkeleton /> : (
              <ProgressBars
                title="Categories (Individual)"
                items={[
                  { label: "RI", value: data.categories.individual.RI },
                  { label: "NRI", value: data.categories.individual.NRI },
                ]}
              />
            )}
            {loading ? <CardSkeleton /> : (
              <ProgressBars
                title="Categories (Non-Individual)"
                items={[
                  { label: "RI", value: data.categories.nonIndividual.RI },
                  { label: "NRI", value: data.categories.nonIndividual.NRI },
                ]}
              />
            )}
            {loading ? <ChartSkeleton /> : <DonutChartCard data={donutData} />}
          </div>

          {/* PAN & Data Stats */}
          <div className="grid md:grid-cols-2 gap-3">
            <div className="card card-tight">
              <div className="mb-3 font-medium">No. of PANs Solicited</div>
              {loading ? <div className="h-24 animate-pulse bg-neutral-200 dark:bg-neutral-800 rounded" /> : (
                <div className="grid grid-cols-2 gap-3">
                  <div className="card card-tight">
                    <div className="text-sm text-neutral-500">With Image</div>
                    <div className="mt-2 text-2xl font-semibold">{data.panStats.solicited.withImage}</div>
                  </div>
                  <div className="card card-tight">
                    <div className="text-sm text-neutral-500">Without Image</div>
                    <div className="mt-2 text-2xl font-semibold">{data.panStats.solicited.withoutImage}</div>
                  </div>
                </div>
              )}
            </div>
            <div className="card card-tight">
              <div className="mb-3 font-medium">Data Received</div>
              {loading ? <div className="h-24 animate-pulse bg-neutral-200 dark:bg-neutral-800 rounded" /> : (
                <div className="grid grid-cols-2 gap-3">
                  <div className="card card-tight">
                    <div className="text-sm text-neutral-500">With Image</div>
                    <div className="mt-2 text-2xl font-semibold">{data.panStats.dataReceived.withImage}</div>
                  </div>
                  <div className="card card-tight">
                    <div className="text-sm text-neutral-500">Without Image</div>
                    <div className="mt-2 text-2xl font-semibold">{data.panStats.dataReceived.withoutImage}</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="h-6" />
        </main>
      </div>
    </div>
  );
}
