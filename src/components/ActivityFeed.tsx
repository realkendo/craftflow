const ACTIVITY = [
  { id: 1, text: "Order #A1023 marked as shipped", time: "2h ago" },
  { id: 2, text: "New product 'Organic Flour' added", time: "6h ago" },
  { id: 3, text: "Inventory low for SKU-1122", time: "1d ago" },
  { id: 4, text: "New user signup: jamie@example.com", time: "2d ago" },
];

export default function ActivityFeed() {
  return (
    <div className="card p-4">
      <div className="text-lg font-semibold">Activity</div>

      <div className="mt-3 space-y-3">
        {ACTIVITY.map((a) => (
          <div key={a.id} className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-orange-400 mt-2" />
            <div>
              <div className="text-sm">{a.text}</div>
              <div className="text-xs text-muted">{a.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
