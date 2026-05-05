import { type NextRequest } from "next/server";
import { createMiddlewareContext } from "@/lib/supabase/middlewares/context";
import { logRequest } from "@/lib/supabase/middlewares/logger";
import { requireAuth } from "@/lib/supabase/middlewares/require-auth";
import { requireAdminRole } from "@/lib/supabase/middlewares/require-role";
import { refreshSession } from "@/lib/supabase/middlewares/session-refresh";

export async function middleware(request: NextRequest) {
  const ctx = createMiddlewareContext(request);

  await refreshSession(ctx);

  const authRedirect = await requireAuth(ctx);
  if (authRedirect) {
    logRequest(ctx, authRedirect);
    return authRedirect;
  }

  const roleRedirect = await requireAdminRole(ctx);
  if (roleRedirect) {
    logRequest(ctx, roleRedirect);
    return roleRedirect;
  }

  logRequest(ctx, ctx.response);
  return ctx.response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|map|txt|xml|json|woff2|woff|ttf|eot)$).*)",
  ],
};
