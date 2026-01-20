export const publicRoutes = [
  '/login',
  '/register',
  '/forgot-password',
  '/reset-password',
  '/verify',
];

export const authRoutes = ['/login', '/register', '/forgot-password', '/reset-password', '/verify'];

export const protectedRoutes = ['/dashboard', '/student', '/counselor', '/counselor/dashboard', '/admin'];

export const DEFAULT_REDIRECT_URL = '/student';

export const roleRoutes = {
  admin: ['/admin'],
  counselor: ['/counselor/dashboard'],
  student: ['/student'],
} as const;

export type UserRole = keyof typeof roleRoutes;
