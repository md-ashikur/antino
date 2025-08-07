
import DashboardNavbar from "@/components/dashboard/DashboardNavbar/DashboardNavbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <DashboardNavbar>{children}</DashboardNavbar>;
}
