'use server';
import { db } from '@/data/db';
import { user } from '@/data/schema';
import { eq } from 'drizzle-orm';

export const getUserComplet = async (userId: string) => {
  const [existUser] = await db.select().from(user).where(eq(user.id, userId)).limit(1);

  return existUser ? existUser : null;
};

export const getUserByEmail = async (email: string) => {
  const [existUser] = await db
    .select({ id: user.id })
    .from(user)
    .where(eq(user.email, email))
    .limit(1);

  return existUser ? existUser.id : null;
};

export const getRolesByUserId = async (userId: string) => {
  const [roles] = await db
    .select({ role: user.role })
    .from(user)
    .where(eq(user.id, userId))
    .limit(1);

  return roles?.role;
};
