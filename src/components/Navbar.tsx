import {
  LayoutDashboard,
  ClipboardList,
  Package,
  Calculator,
} from "lucide-react";
import useUIStore from "../store/useUIStore";
import type { UIState } from "../store/useUIStore";
import logo from "../assets/kraftflowzlogo.png";

const navItems = [
  { id: "overview", label: "Dashboard", icon: LayoutDashboard },
  { id: "orders", label: "Orders", icon: ClipboardList },
  { id: "products", label: "Products", icon: Package },
  { id: "costs", label: "Costs", icon: Calculator },
];

export default function Navbar() {
  const current = useUIStore((s: UIState) => s.activeTab);
  const setCurrent = useUIStore((s: UIState) => s.setActiveTab);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header flex items-center gap-2">
          <img src={logo} alt="Kraftflowz Logo" className="sidebar-logo" />
        </div>

        <nav>
          {navItems.map(({ id, label, icon: Icon }) => (
            <div
              key={id}
              onClick={() => setCurrent(id)}
              className={`nav-item ${current === id ? "nav-item-active" : ""}`}
            >
              <span
                className={`nav-rail ${
                  current === id ? "nav-rail-active" : ""
                }`}
              />

              <Icon
                size={18}
                className={`nav-icon ${
                  current === id ? "nav-icon-active" : ""
                }`}
              />

              <span>{label}</span>
            </div>
          ))}
        </nav>
      </aside>

      {/* Mobile Bottom Nav */}
      <nav className="bottom-nav">
        {navItems.map(({ id, label, icon: Icon }) => (
          <div
            key={id}
            onClick={() => setCurrent(id)}
            className={`bottom-nav-item ${
              current === id ? "bottom-nav-item-active" : ""
            }`}
          >
            <Icon
              size={20}
              className={`bottom-nav-icon ${
                current === id ? "bottom-nav-icon-active" : ""
              }`}
            />
            {label}
          </div>
        ))}
      </nav>
    </>
  );
}
