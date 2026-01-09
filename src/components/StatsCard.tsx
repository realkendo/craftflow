import type { ReactNode } from "react";

export default function StatsCard({
  title,
  value,
  delta,
  icon,
}: {
  title: string;
  value: string;
  delta?: string;
  icon?: ReactNode;
}) {
  return (
    <div className="card flex items-start gap-4 p-4">
      <div className="w-12 h-12 rounded-lg flex items-center justify-center text-orange-600">
        {icon}
      </div>

      <div className="flex-1">
        <div className="text-sm text-muted">{title}</div>
        <div className="mt-1 text-2xl font-semibold">{value}</div>
      </div>

      {delta && (
        <div className="text-sm text-green-600 font-medium self-center">
          {delta}
        </div>
      )}
    </div>
  );
}
