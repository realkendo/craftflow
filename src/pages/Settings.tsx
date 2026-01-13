// React import not required with the automatic JSX runtime

function ProfileCard() {
  return (
    <div className="card p-4">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-orange-200 flex items-center justify-center text-orange-600 font-bold">
          KZ
        </div>
        <div>
          <div className="font-semibold">Kraftflowz Inc.</div>
          <div className="text-sm text-muted">account@kraftflowz.example</div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div>
          <div className="text-xs text-muted">Plan</div>
          <div className="font-medium">Pro — $49/mo</div>
        </div>
        <div>
          <div className="text-xs text-muted">Members</div>
          <div className="font-medium">12</div>
        </div>
      </div>
    </div>
  );
}

function Preferences() {
  return (
    <div className="card p-4">
      <div className="text-lg font-semibold">Preferences</div>

      <div className="mt-3 space-y-3">
        <label className="flex items-center justify-between">
          <span className="text-sm">Email notifications</span>
          <input type="checkbox" defaultChecked />
        </label>

        <label className="flex items-center justify-between">
          <span className="text-sm">Auto-create invoices</span>
          <input type="checkbox" />
        </label>

        <label className="flex items-center justify-between">
          <span className="text-sm">Enable two-factor</span>
          <input type="checkbox" defaultChecked />
        </label>
      </div>
    </div>
  );
}

export default function Settings() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1">
          <ProfileCard />
          <Preferences />
        </div>

        <div className="md:col-span-2 space-y-4">
          <div className="card p-4">
            <div className="text-lg font-semibold">Company details</div>

            <div className="mt-3 grid grid-cols-2 gap-3">
              <div>
                <div className="text-xs text-muted">Company name</div>
                <div className="font-medium">Kraftflowz Inc.</div>
              </div>
              <div>
                <div className="text-xs text-muted">Address</div>
                <div className="font-medium">742 Market St, Suite 200</div>
              </div>
              <div>
                <div className="text-xs text-muted">VAT</div>
                <div className="font-medium">GB123456789</div>
              </div>
              <div>
                <div className="text-xs text-muted">Phone</div>
                <div className="font-medium">+1 (555) 123-4567</div>
              </div>
            </div>
          </div>

          <div className="card p-4">
            <div className="text-lg font-semibold">Billing</div>

            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3 border rounded">
                <div className="text-xs text-muted">Card ending</div>
                <div className="font-medium">**** 4242</div>
                <div className="text-sm text-muted">Exp: 09/27</div>
              </div>
              <div className="p-3 border rounded">
                <div className="text-xs text-muted">Subscription</div>
                <div className="font-medium">Pro — $49/mo</div>
                <div className="text-sm text-muted">
                  Next billing: Feb 1, 2026
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
