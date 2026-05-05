import { NextResponse } from "next/server";
import { MiddlewareContext, redirectToLogin } from "./context";
import { isAdminRoute } from "./route-matchers";

export async function requireAdminRole(ctx: MiddlewareContext): Promise<NextResponse | null> {
  if (!isAdminRoute(ctx.pathname)) {
    return null;
  }

  if (!ctx.userLoaded) {
    const { data } = await ctx.supabase.auth.getUser();
    ctx.user = data.user ?? null;
    ctx.userLoaded = true;
  }

  if (!ctx.user) {
    return redirectToLogin(ctx);
  }

  const { data: profile, error } = await ctx.supabase
    .from("profiles")
    .select("role")
    .eq("id", ctx.user.id)
    .maybeSingle();

  const role = profile?.role ? String(profile.role).toUpperCase() : null;
  if (error || role !== "ADMIN") {
    return redirectToLogin(ctx);
  }

  return null;
}
