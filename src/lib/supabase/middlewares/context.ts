import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import type { User } from "@supabase/supabase-js";

export type MiddlewareContext = {
  request: NextRequest;
  response: NextResponse;
  supabase: ReturnType<typeof createServerClient>;
  pathname: string;
  startedAt: number;
  user: User | null;
  userLoaded: boolean;
};

export function createMiddlewareContext(request: NextRequest): MiddlewareContext {
  const response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set(name, value);
            response.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  return {
    request,
    response,
    supabase,
    pathname: request.nextUrl.pathname,
    startedAt: Date.now(),
    user: null,
    userLoaded: false,
  };
}

export function applyResponseCookies(target: NextResponse, source: NextResponse) {
  source.cookies.getAll().forEach((cookie) => {
    target.cookies.set(cookie);
  });
}

export function redirectToLogin(ctx: MiddlewareContext) {
  const response = NextResponse.redirect(new URL("/login", ctx.request.url));
  applyResponseCookies(response, ctx.response);
  return response;
}
