

import DashboardNavbar from "@/components/dashboard/DashboardNavbar/DashboardNavbar";
import { ConfigProvider } from "antd";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider>
      <DashboardNavbar>{children}</DashboardNavbar>
    </ConfigProvider>
  );
}
