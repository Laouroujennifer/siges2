import { db } from '@/data/db';
import * as schema from '@/data/schema';
import { getUserComplet } from '@/lib/user';
import { UserRole } from '@/route';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { nextCookies } from 'better-auth/next-js';
import { customSession, twoFactor } from 'better-auth/plugins';

export const auth = betterAuth({
  advanced: {
    cookiePrefix: 'SIGES',
  },
  database: drizzleAdapter(db, {
    schema,
    provider: 'sqlite',
  }),
  databaseHooks: {
    user: {
      create: {
        before: async (user) => {
          return {
            data: {
              ...user,
              firstName: user.name.split(' ')[0],
              lastName: user.name.split(' ')[1],
            },
          };
        },
      },
    },
  },
  user: {
    additionalFields: {
      role: {
        type: 'string',
        required: true,
        defaultValue: 'student',
        input: true,
      },
    },
    deleteUser: {
      enabled: true,
      sendDeleteAccountVerification: async ({ user, url }) => {},
      beforeDelete: async () => {},
      afterDelete: async () => {},
    },
  },
  emailVerification: {
    sendOnSignUp: true,
    sendVerificationEmail: async ({ user, url }) => {},
    autoSignInAfterVerification: true,
  },
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, url }) => {},
    requireEmailVerification: true,
  },
  plugins: [
    twoFactor(),
    customSession(async ({ user, session }) => {
      const complet = await getUserComplet(session.userId);
      return {
        user: {
          ...user,
          role: complet?.role ?? ('student' as UserRole),
        },
        session,
      };
    }),
    nextCookies(),
  ],
});
