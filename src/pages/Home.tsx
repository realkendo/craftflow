import { CreditCard, Users, ShoppingCart, Package } from "lucide-react";
import StatsCard from "../components/StatsCard";
import RevenueChart from "../components/RevenueChart";
import RecentOrders from "../components/RecentOrders";
import ActivityFeed from "../components/ActivityFeed";
import ProductsList from "../components/ProductsList";
import CustomersList from "../components/CustomersList";
import useUIStore from "../store/useUIStore";
// import { unitFormatter } from "../utils/unitFormatter";
// import { synchronizer } from "../utils/synchronizer";
import type { UIState } from "../store/useUIStore";

export default function Home() {
  const active = useUIStore((s: UIState) => s.activeTab);

  // console.log(unitFormatter(2_660)); // Example usage of utility function
  // synchronizer(30);

  return (
    <div className="space-y-6">
      {active === "overview" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <StatsCard
              title="Revenue"
              value="N244k"
              delta="+8.6%"
              icon={<CreditCard size={18} />}
            />
            <StatsCard
              title="Orders"
              value="1.2k"
              delta="+2.1%"
              icon={<ShoppingCart size={18} />}
            />
            <StatsCard
              title="Products"
              value="324"
              delta="-1.2%"
              icon={<Package size={18} />}
            />
            <StatsCard
              title="Customers"
              value="6.1k"
              delta="+4.4%"
              icon={<Users size={18} />}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 space-y-4">
              <RevenueChart />
              <RecentOrders />
            </div>

            <div className="space-y-4">
              {/* <QuickActions /> */}
              <ActivityFeed />
            </div>
          </div>
        </div>
      )}

      {active === "analytics" && (
        <div className="space-y-4">
          <RevenueChart />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="card p-4">
              <div className="text-sm text-muted">Conversion</div>
              <div className="text-2xl font-semibold">3.8%</div>
            </div>
            <div className="card p-4">
              <div className="text-sm text-muted">AOV</div>
              <div className="text-2xl font-semibold">$62.40</div>
            </div>
            <div className="card p-4">
              <div className="text-sm text-muted">Traffic</div>
              <div className="text-2xl font-semibold">48.2k</div>
            </div>
          </div>
        </div>
      )}

      {active === "products" && (
        <div>
          <ProductsList />
        </div>
      )}

      {active === "customers" && (
        <div>
          <CustomersList />
        </div>
      )}
    </div>
  );
}
