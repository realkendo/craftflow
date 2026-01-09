export default function QuickActions() {
  return (
    <div className="card p-4">
      <div className="text-lg font-semibold">Quick actions</div>

      <div className="mt-3 grid grid-cols-2 gap-3">
        <button className="btn btn-primary">Create order</button>
        <button className="btn btn-ghost">New product</button>
        <button className="btn btn-secondary">Import CSV</button>
        <button className="btn btn-ghost">Export data</button>
      </div>
    </div>
  );
}
