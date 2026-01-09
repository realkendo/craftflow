export default function RevenueChart() {
  // Simple SVG sparkline with labels — dummy data
  return (
    <div className="card p-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-muted">Revenue (30d)</div>
          <div className="text-2xl font-semibold">N24,380</div>
        </div>
        <div className="text-sm text-green-600">+8.6%</div>
      </div>

      <div className="mt-4">
        <svg viewBox="0 0 200 40" className="w-full h-16">
          <polyline
            fill="none"
            stroke="#ff7a18"
            strokeWidth="3"
            points="0,30 20,28 40,18 60,22 80,12 100,10 120,14 140,8 160,6 180,4 200,2"
          />
        </svg>
      </div>

      <div className="mt-3 text-xs text-muted grid grid-cols-3 gap-2">
        <div>
          <div className="font-medium">Visitors</div>
          <div className="text-sm">48.2k</div>
        </div>
        <div>
          <div className="font-medium">Orders</div>
          <div className="text-sm">1.2k</div>
        </div>
        <div>
          <div className="font-medium">Avg. order</div>
          <div className="text-sm">$62</div>
        </div>
      </div>
    </div>
  );
}
