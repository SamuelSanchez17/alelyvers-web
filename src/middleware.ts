import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function middleware(request: NextRequest) {
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
            // Actualiza las cookies en la respuesta que va al navegador
            cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set(name, value); // Sincroniza con el request
            response.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  // Asegura que las cookies de sesión se actualicen correctamente en cada solicitud, especialmente cuando el token de acceso está cerca de expirar.
  await supabase.auth.getUser();

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|map|txt|xml|json|woff2|woff|ttf|eot)$).*)",
  ],
};
