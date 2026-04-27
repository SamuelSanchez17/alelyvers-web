import type { Metadata } from "next";
import { AdminLoginPage } from "@/domains/admin/ui/admin-login-page";

export const metadata: Metadata = {
  title: "Admin | AlelyVers",
  description: "Acceso al panel de administracion de AlelyVers.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminRoutePage() {
  return <AdminLoginPage />;
}