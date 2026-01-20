import { auth } from '@/lib/auth';
import { canAccessRoute, getDestinationUrlByRole } from '@/lib/auth-utils';
import { authRoutes, protectedRoutes, UserRole } from '@/route';
import { getSessionCookie } from 'better-auth/cookies';
import { NextRequest, NextResponse } from 'next/server';

function isAuthRoute(pathname: string) {
  return authRoutes.some((route) => pathname.startsWith(route));
}

function isProtectedRoute(pathname: string) {
  return protectedRoutes.some((route) => pathname.startsWith(route));
}

export async function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  const sessionCookie = getSessionCookie(request, {
    cookiePrefix: 'SIGES',
  });

  const callbackUrl = searchParams.get('callbackUrl');

  const session = sessionCookie ? await auth.api.getSession({ headers: request.headers }) : null;

  if (session && isAuthRoute(pathname)) {
    const role = session.user.role as UserRole;
    const destination =
      callbackUrl && !isAuthRoute(callbackUrl) ? callbackUrl : await getDestinationUrlByRole(role);
    return NextResponse.redirect(new URL(destination, request.url));
  }

  if (!session && isProtectedRoute(pathname)) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (session && isProtectedRoute(pathname)) {
    const role = session.user.role as UserRole;

    if (!canAccessRoute(role, pathname)) {
      return NextResponse.redirect(new URL(await getDestinationUrlByRole(role), request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|css|js|woff|woff2)).*)',
  ],
};
