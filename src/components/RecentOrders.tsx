const ORDERS = [
  {
    id: "#A1023",
    customer: "Olivia Martin",
    amount: "$420",
    status: "Shipped",
    date: "Jan 6",
  },
  {
    id: "#A1022",
    customer: "Liam Johnson",
    amount: "$1,240",
    status: "Processing",
    date: "Jan 5",
  },
  {
    id: "#A1021",
    customer: "Emma Williams",
    amount: "$89",
    status: "Delivered",
    date: "Jan 4",
  },
  {
    id: "#A1020",
    customer: "Noah Brown",
    amount: "$560",
    status: "Cancelled",
    date: "Jan 3",
  },
];

export default function RecentOrders() {
  return (
    <div className="card p-4">
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold">Recent orders</div>
        <div className="text-sm text-muted">Showing latest 4</div>
      </div>

      <div className="mt-3 overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Order</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {ORDERS.map((o) => (
              <tr key={o.id}>
                <td className="font-medium">{o.id}</td>
                <td>{o.customer}</td>
                <td>{o.amount}</td>
                <td>
                  <span
                    className={`badge ${
                      o.status === "Delivered"
                        ? "badge-profit"
                        : o.status === "Cancelled"
                        ? "badge-loss"
                        : ""
                    }`}
                  >
                    {o.status}
                  </span>
                </td>
                <td className="text-muted">{o.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
