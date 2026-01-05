import {
  LayoutDashboard,
  ClipboardList,
  Package,
  Calculator,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Orders", icon: ClipboardList },
  { label: "Products", icon: Package },
  { label: "Costs", icon: Calculator },
];

export default function Navbar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1 className="sidebar-title">kraftflowz</h1>
        </div>

        <nav>
          {navItems.map(({ label, icon: Icon, active }) => (
            <div
              key={label}
              className={`nav-item ${active ? "nav-item-active" : ""}`}
            >
              <span className={`nav-rail ${active ? "nav-rail-active" : ""}`} />

              <Icon
                size={18}
                className={`nav-icon ${active ? "nav-icon-active" : ""}`}
              />

              <span>{label}</span>
            </div>
          ))}
        </nav>
      </aside>

      {/* Mobile Bottom Nav */}
      <nav className="bottom-nav">
        {navItems.map(({ label, icon: Icon, active }) => (
          <div
            key={label}
            className={`bottom-nav-item ${
              active ? "bottom-nav-item-active" : ""
            }`}
          >
            <Icon
              size={20}
              className={`bottom-nav-icon ${
                active ? "bottom-nav-icon-active" : ""
              }`}
            />
            {label}
          </div>
        ))}
      </nav>
    </>
  );
}
