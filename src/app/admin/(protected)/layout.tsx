import { requireAdminUser } from "@/lib/supabase/server";

export default async function AdminProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireAdminUser();
  return <>{children}</>;
}
