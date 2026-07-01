export type NavigationIcon =
  | "dashboard"
  | "markets"
  | "smart-money"
  | "research"
  | "alerts"
  | "settings";

export interface NavigationItem {
  label: string;
  href: string;
  icon: NavigationIcon;
  description?: string;
  disabled?: boolean;
}

export const navigation: NavigationItem[] = [
  {
    label: "Dashboard",
    href: "/",
    icon: "dashboard",
    description: "Market overview",
  },
  {
    label: "Markets",
    href: "/markets",
    icon: "markets",
    description: "Prediction markets",
  },
  {
    label: "Smart Money",
    href: "/wallets",
    icon: "smart-money",
    description: "Elite traders",
  },
  {
    label: "Research",
    href: "/research",
    icon: "research",
    description: "AI research",
  },
  {
    label: "Alerts",
    href: "/alerts",
    icon: "alerts",
    description: "Notifications",
  },
  {
    label: "Settings",
    href: "/settings",
    icon: "settings",
    description: "Preferences",
  },
];