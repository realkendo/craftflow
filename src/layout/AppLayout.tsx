import Navbar from "../components/Navbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-[var(--brand-bg)]">
      <Navbar />

      {/* Main area */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <header className="h-14 bg-white border-b border-black/5 px-4 md:px-6 flex items-center">
          <h2 className="text-lg font-medium">Dashboard</h2>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 md:p-6 pb-20 md:pb-6">{children}</main>
      </div>
    </div>
  );
}
