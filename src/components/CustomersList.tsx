const CUSTOMERS = [
  { id: "C1001", name: "Olivia Martin", orders: 12, lifetime: "$1,240" },
  { id: "C1002", name: "Liam Johnson", orders: 3, lifetime: "$320" },
  { id: "C1003", name: "Emma Williams", orders: 19, lifetime: "$2,980" },
  { id: "C1004", name: "Noah Brown", orders: 1, lifetime: "$45" },
];

export default function CustomersList() {
  return (
    <div className="card p-4">
      <div className="text-lg font-semibold">Top customers</div>
      <div className="mt-3 space-y-2">
        {CUSTOMERS.map((c) => (
          <div key={c.id} className="flex items-center justify-between">
            <div>
              <div className="font-medium">{c.name}</div>
              <div className="text-xs text-muted">
                {c.id} • {c.orders} orders
              </div>
            </div>
            <div className="font-medium">{c.lifetime}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
