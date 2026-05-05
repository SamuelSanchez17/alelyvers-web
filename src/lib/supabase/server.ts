import {createServerClient} from "@supabase/ssr";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createClient as createSupabaseClient } from '@supabase/supabase-js'

export async function createClient()
{
    const cookieStore = await cookies();

    return createServerClient
    (
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: { 
                getAll() {
                    return cookieStore.getAll()
                },
                setAll(cookiesToSet) {
                    try {
                        cookiesToSet.forEach(({ name, value, options}) => cookieStore.set(name, value, options))
                    }catch{
                        // Esto se maneja en el middleware
                    }
                }
            }
        }
    )
}


// Cliente Admin (Se salta RLS - SOLO PARA SERVER ACTIONS O API)
export function createAdminClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    }
  )
}

export async function requireAuthUser() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) {
    redirect("/login");
  }

  return { supabase, user: data.user };
}

export async function requireAdminUser() {
  const { supabase, user } = await requireAuthUser();
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle();

  const role = profile?.role ? String(profile.role).toUpperCase() : null;
  if (profileError || role !== "ADMIN") {
    redirect("/login");
  }

  return { user, profile };
}