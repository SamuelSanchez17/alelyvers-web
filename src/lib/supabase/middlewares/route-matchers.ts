export function isAdminRoute(pathname: string) {
  if (pathname === "/admin" || pathname === "/admin/") {
    return false;
  }
  return pathname.startsWith("/admin/");
}

export function isDashboardRoute(pathname: string) {
  return pathname === "/dashboard" || pathname.startsWith("/dashboard/");
}

export function needsAuth(pathname: string) {
  return isAdminRoute(pathname) || isDashboardRoute(pathname);
}
