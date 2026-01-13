import { create } from "zustand";

export type UIState = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export const useUIStore = create<UIState>((set) => ({
  activeTab: "overview",
  setActiveTab: (tab: string) => set({ activeTab: tab }),
}));

export default useUIStore;
