# KraftFlowz

KraftFlowz is a modern, high‑performance workflow and operations dashboard built for managing orders, products, costs, and daily business activity with speed and clarity.

This repository tracks **v1 development** using GitHub Milestones and Issues. Each feature is broken into actionable tasks that can be picked up and completed incrementally.

---

## 🚀 Vision

Build a fast, clean, and scalable business dashboard that:

* Feels **high‑tech and modern**
* Is **mobile‑first**, then desktop‑enhanced
* Scales cleanly beyond v1 without rewrites

v1 focuses on **core structure, navigation, and state flow**, not feature overload.

---

## 🧱 Tech Stack (v1)

**Frontend**

* React + TypeScript
* Vite
* Tailwind CSS
* Lucide Icons

**State Management**

* Zustand (global UI + app state)

**Styling & Architecture**

* Tailwind utility classes
* Custom components via `@layer components`
* Mobile‑first responsive layout

**Tooling**

* ESLint
* Prettier
* GitHub Issues & Milestones

---

## 🧩 Core Features (v1 Scope)

### 1. App Shell & Layout

* Sidebar navigation (desktop)
* Bottom navigation (mobile)
* Active state handling
* Responsive breakpoints

### 2. Navigation System

* Central nav config (labels, icons, routes)
* Active route highlighting
* Shared nav logic between desktop & mobile

### 3. Pages (Scaffold Only)

* Dashboard
* Orders
* Products
* Costs

> Note: Pages are **UI placeholders** in v1. No backend logic yet.

### 4. Global State (Zustand)

* Active navigation state
* UI toggles (sidebar open/close if needed later)
* Prepared store structure for v2 expansion

### 5. Branding & UI Identity

* KraftFlowz logo integration
* KF favicon
* Brand colors (orange / grey)
* Consistent typography & spacing

### 6. Developer Experience

* Clean folder structure
* Reusable components
* Predictable naming conventions

---

## 🗂 Suggested Folder Structure

```
src/
 ├─ assets/
 │   └─ logos & icons
 ├─ components/
 │   ├─ navigation/
 │   └─ ui/
 ├─ pages/
 │   ├─ Dashboard.tsx
 │   ├─ Orders.tsx
 │   ├─ Products.tsx
 │   └─ Costs.tsx
 ├─ store/
 │   └─ useAppStore.ts
 ├─ styles/
 │   └─ index.css
 ├─ App.tsx
 └─ main.tsx
```

---

## 🛠 Development Workflow

1. Pick an open Issue under the **v1 Milestone**
2. Create a feature branch
3. Complete the task fully
4. Commit with clear message
5. Close the issue

Repeat daily until v1 is complete.

---

## 🧭 Roadmap Philosophy

* **v1 = foundation**, not perfection
* UI + state correctness > feature count
* Anything not essential goes to v2

---

## 📌 Status

* v1: 🚧 In Progress
* Backend: ❌ Not started
* Auth: ❌ Out of scope for v1

---

## 🤝 Contribution Notes (Solo Dev)

This project is currently developed solo. Decisions prioritize:

* Simplicity
* Maintainability
* Long‑term scalability

---

## 📄 License

Private / Internal (for now)
