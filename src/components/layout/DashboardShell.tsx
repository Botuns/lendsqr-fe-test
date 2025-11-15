import type { FC, ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface DashboardShellProps {
  children: ReactNode;
}

const DashboardShell: FC<DashboardShellProps> = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <div className="dashboard-layout__sidebar">
        <Sidebar />
      </div>
      <div className="dashboard-layout__header">
        <Header />
      </div>
      <main className="dashboard-layout__content">{children}</main>
    </div>
  );
};

export default DashboardShell;
