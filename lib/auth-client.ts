import type { auth } from '@/lib/auth';
import {
  customSessionClient,
  emailOTPClient,
  inferAdditionalFields,
  twoFactorClient,
} from 'better-auth/client/plugins';
import { createAuthClient } from 'better-auth/react';

export const {
  emailOtp,
  forgetPassword,
  resetPassword,
  signIn,
  signUp,
  signOut,
  twoFactor,
  useSession,
  sendVerificationEmail,
} = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_URL || 'http://localhost:3000',
  plugins: [
    emailOTPClient(),
    customSessionClient<typeof auth>(),
    inferAdditionalFields<typeof auth>(),
    twoFactorClient({
      onTwoFactorRedirect() {
        window.location.href = '/verify';
      },
    }),
  ],
});
