import { NextResponse } from "next/server";
import { MiddlewareContext } from "./context";

export function logRequest(ctx: MiddlewareContext, response: NextResponse) {
  const durationMs = Date.now() - ctx.startedAt;
  const userId = ctx.user?.id ? ` user=${ctx.user.id}` : "";
  console.info(
    `[middleware] ${ctx.request.method} ${ctx.pathname} ${response.status} ${durationMs}ms${userId}`
  );
}
