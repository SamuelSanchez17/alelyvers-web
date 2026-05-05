import { NextResponse } from "next/server";
import { MiddlewareContext, redirectToLogin } from "./context";
import { needsAuth } from "./route-matchers";

export async function requireAuth(ctx: MiddlewareContext): Promise<NextResponse | null> {
  if (!needsAuth(ctx.pathname)) {
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

  return null;
}
