import type { NextAuthConfig } from 'next-auth';

export const authConfig =  {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoginIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');    
            if (isOnDashboard) {
                if (isLoginIn) return true
                return false
            } else if (isLoginIn) {
                return Response.redirect(new URL('/dashboard', nextUrl))
            }

            return true;
        }
    },
    providers: []
} satisfies NextAuthConfig