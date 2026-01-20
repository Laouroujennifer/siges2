'use server';
import { auth } from '@/lib/auth';
import { DEFAULT_REDIRECT_URL, roleRoutes, UserRole } from '@/route';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';

export async function getSession() {
  await connection();
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return session;
}

export async function requireAuth() {
  const session = await getSession();

  if (!session) redirect('/login');

  return session;
}

export async function requireRole(allowedRoles: UserRole[]) {
  const session = await requireAuth();

  const userRole = session.user.role as UserRole;

  if (!allowedRoles.includes(userRole)) redirect('/unauthorized');

  return session;
}

export async function requireStudent() {
  return requireRole(['student']);
}

export async function requireCounselor() {
  return requireRole(['counselor']);
}

export async function requireAdmin() {
  return requireRole(['admin']);
}

export async function requireCounselorOrAdmin() {
  return requireRole(['counselor', 'admin']);
}

export async function canAccessRoute(role: UserRole, pathname: string): Promise<boolean> {
  return roleRoutes[role].some((route) => pathname.startsWith(route));
}

export async function getDestinationUrl() {
  const session = await getSession();
  if (!session) redirect('/login');

  const userRole = session.user.role as UserRole;
  return getDestinationUrlByRole(userRole);
}

export async function getDestinationUrlByRole(role: UserRole): Promise<string> {
  return roleRoutes[role][0];
}

export const resendVerificationEmail = async (email: string) => {
  try {
    await auth.api.sendVerificationEmail({
      body: {
        email,
        callbackURL: DEFAULT_REDIRECT_URL,
      },
    });

    return {
      success: 'Un email de vérification a été envoyé à votre adresse.',
    };
  } catch (error) {
    return {
      error: "Une erreur est survenue lors de l'envoi de l'email.",
    };
  }
};
