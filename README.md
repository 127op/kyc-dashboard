# KYC Dashboard (Next.js 14 + Tailwind + Recharts)

This is a complete implementation of the **KYC Dashboard** assignment using Next.js 14 App Router, Tailwind CSS, Recharts, and mock API routes.

## Tech Stack
- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- Recharts
- Lucide Icons
- next-themes (Dark Mode)
- SWR (optional), simple `fetch` is used here

## Getting Started

```bash
# 1) Extract
unzip kyc-dashboard.zip && cd kyc-dashboard

# 2) Install
npm install

# 3) Run
npm run dev
```

Open http://localhost:3000

## Features Implemented
- Sidebar navigation with active state (Dashboard highlighted)
- Top navbar with breadcrumb, search, notifications, profile (name + date)
- Total KYC cards with up/down indicators
- Bar chart comparing **Individual vs Non-Individual** for **Today & Yesterday**
- Status cards for: *KYC Initiated, Under Process, Registered, Validated, Hold, Docs Pending*
- Categories section with progress bars (RI & NRI for Individual & Non-Individual)
- Donut chart for Solicited, Received, Consumed, Pending
- PAN & Data stats (with and without image)
- Tabs for **Time range** (Today, This Month, Custom) and **View type** (Individual / Non-Individual)
- Responsive layout + collapsible sidebar (mobile)
- Dynamic data from **/api/dashboard** mock route
- **Dark mode** (system-aware, toggle in navbar)
- **Loading skeletons** while fetching

## Notes
- Charts auto-style with Recharts default colors (assignment requires not to enforce chart colors in code unless asked).
- For production/a11y, consider adding keyboard navigation & aria roles.
- The mock API varies numbers based on selected range/view for demonstration.

## Project Structure (important files)
```
app/
  api/dashboard/route.ts
  layout.tsx
  page.tsx
  globals.css
components/
  Sidebar.tsx
  Navbar.tsx
  CardStat.tsx
  StatusGrid.tsx
  BarChartCard.tsx
  DonutChartCard.tsx
  ProgressBars.tsx
  Tabs.tsx
  Skeletons.tsx
lib/
  api.ts
public/
  logo.svg
tailwind.config.ts
postcss.config.mjs
next.config.mjs
tsconfig.json
package.json



