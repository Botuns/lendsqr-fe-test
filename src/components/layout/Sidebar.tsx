import type { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import {
  BadgeDollarSign,
  Banknote,
  BriefcaseBusiness,
  Building2,
  FileStack,
  HandCoins,
  Landmark,
  Layers,
  LayoutDashboard,
  PiggyBank,
  ReceiptText,
  RefreshCw,
  Scale,
  ShieldCheck,
  UserRound,
  Users,
} from "lucide-react";
import lendsqrLogo from "../../assets/lendsqrlogo.svg";
import "../../styles/components/sidebar.scss";

type SidebarGroupKey = "customers" | "businesses";

type SidebarItem = {
  key: string;
  label: string;
  icon: ReactNode;
  to?: string;
  group: SidebarGroupKey;
};

const sidebarItems: SidebarItem[] = [
  {
    key: "users",
    label: "Users",
    icon: <Users size={18} />,
    to: "/users",
    group: "customers",
  },
  {
    key: "guarantors",
    label: "Guarantors",
    icon: <UserRound size={18} />,
    group: "customers",
  },
  {
    key: "loans",
    label: "Loans",
    icon: <HandCoins size={18} />,
    group: "customers",
  },
  {
    key: "decision-models",
    label: "Decision Models",
    icon: <BadgeDollarSign size={18} />,
    group: "customers",
  },
  {
    key: "savings",
    label: "Savings",
    icon: <PiggyBank size={18} />,
    group: "customers",
  },
  {
    key: "loan-requests",
    label: "Loan Requests",
    icon: <FileStack size={18} />,
    group: "customers",
  },
  {
    key: "whitelist",
    label: "Whitelist",
    icon: <ShieldCheck size={18} />,
    group: "customers",
  },
  {
    key: "karma",
    label: "Karma",
    icon: <Scale size={18} />,
    group: "customers",
  },
  {
    key: "organization",
    label: "Organization",
    icon: <Building2 size={18} />,
    group: "businesses",
  },
  {
    key: "loan-products",
    label: "Loan Products",
    icon: <Landmark size={18} />,
    group: "businesses",
  },
  {
    key: "savings-products",
    label: "Savings Products",
    icon: <Layers size={18} />,
    group: "businesses",
  },
  {
    key: "fees-and-charges",
    label: "Fees and Charges",
    icon: <ReceiptText size={18} />,
    group: "businesses",
  },
  {
    key: "transactions",
    label: "Transactions",
    icon: <Banknote size={18} />,
    group: "businesses",
  },
  {
    key: "services",
    label: "Services",
    icon: <RefreshCw size={18} />,
    group: "businesses",
  },
];

const renderSidebarItem = (item: SidebarItem) => {
  if (item.to) {
    return (
      <NavLink
        key={item.key}
        to={item.to}
        className={({ isActive }) =>
          isActive
            ? "sidebar__item sidebar__item--nav sidebar__item--active"
            : "sidebar__item sidebar__item--nav"
        }
      >
        <span className="sidebar__item-icon" aria-hidden>
          {item.icon}
        </span>
        <span className="sidebar__item-label">{item.label}</span>
      </NavLink>
    );
  }

  return (
    <button
      key={item.key}
      type="button"
      className="sidebar__item sidebar__item--nav"
      disabled
    >
      <span className="sidebar__item-icon" aria-hidden>
        {item.icon}
      </span>
      <span className="sidebar__item-label">{item.label}</span>
    </button>
  );
};

const Sidebar: FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <img src={lendsqrLogo} alt="Lendsqr" />
      </div>

      <div className="sidebar__section sidebar__section--top">
        <button type="button" className="sidebar__switch-org">
          <span className="sidebar__switch-org-icon" aria-hidden>
            <BriefcaseBusiness size={18} />
          </span>
          <span className="sidebar__switch-org-label">Switch Organization</span>
          <span className="sidebar__chevron" aria-hidden>
            ▾
          </span>
        </button>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "sidebar__item sidebar__item--active" : "sidebar__item"
          }
        >
          <span className="sidebar__item-icon" aria-hidden>
            <LayoutDashboard size={18} />
          </span>
          <span className="sidebar__item-label">Dashboard</span>
        </NavLink>
      </div>

      <nav className="sidebar__nav" aria-label="Main">
        <p className="sidebar__group-label">Customers</p>
        {sidebarItems
          .filter((item) => item.group === "customers")
          .map(renderSidebarItem)}

        <p className="sidebar__group-label">Businesses</p>
        {sidebarItems
          .filter((item) => item.group === "businesses")
          .map(renderSidebarItem)}
      </nav>
    </aside>
  );
};

export default Sidebar;
