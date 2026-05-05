import { MiddlewareContext } from "./context";

export async function refreshSession(ctx: MiddlewareContext) {
  const { data } = await ctx.supabase.auth.getUser();
  ctx.user = data.user ?? null;
  ctx.userLoaded = true;
}
