import AdminNavigation from "@/components/admin/Navigation";
import Link from "next/link";

export const metadata = {
  title: "Admin Panel",
  description: "Generated by create next app",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container mx-auto px-4">
      <AdminNavigation />
      <main>{children}</main>
    </section>
  );
}
