import Navbar from "../components/Navbar";
import useUIStore from "../store/useUIStore";
import type { UIState } from "../store/useUIStore";
import logo from "../assets/kraftflowzlogo.png";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const active = useUIStore((s: UIState) => s.activeTab);

  const getTitle = (id: string) => {
    switch (id) {
      case "overview":
        return "Dashboard";
      case "orders":
        return "Orders";
      case "products":
        return "Products";
      case "costs":
        return "Costs";
      case "analytics":
        return "Analytics";
      case "customers":
        return "Customers";
      default:
        return "Dashboard";
    }
  };

  return (
    <div className="h-screen flex overflow-hidden">
      <Navbar />

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-14 border-b border-black/5 px-4 md:px-6 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            {/* Mobile logo */}
            <a href="/">
              <img
                src={logo}
                alt="App logo"
                className="h-16 w-auto md:hidden"
              />
            </a>

            {/* Desktop title */}
            <h2 className="hidden md:block text-lg font-semibold uppercase tracking-wider text-black/80">
              {getTitle(active)}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#FF4500]/10 flex items-center justify-center text-[#FF4500] text-[8px]">
              BETA
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto overscroll-contain p-4 md:p-6 pb-24 md:pb-6 no-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
}
