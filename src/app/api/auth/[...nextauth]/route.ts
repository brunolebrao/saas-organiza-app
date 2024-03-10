import NextAuth from 'next-auth/next';
import { NextAuthOptions } from 'next-auth'; 
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import EmailProvider from 'next-auth/providers/email';



export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = {
          id: '1',
          name: 'Bruno Lebrão',
          email: 'bruno.lebrao@gmail.com',
          password: '123',
          role: 'admin'

        }
        const isValidEmail = user.email === credentials?.email
        const isValidPassword = user.password === credentials?.password
        
        if ( !isValidEmail || !isValidPassword) {
          throw new Error('Invalid credentials')
        }
        return user
      }
    }),
  
  ],
  callbacks: {
     jwt: async ({ token, user }) => {
      const customUser = user as unknown as any

      if (user) {
        return {
          ...token,
          role: customUser.role
        }
      }
      return token
     },
     session: async ({ session, token }) => {
      return {
        ...session,
        user: {
          name: token.name,
          email: token.email,
          role: token.role
        }
      }
     }
  },
  pages: {
    signIn: '/auth/login',
    signOut: '/',
    error: '/auth/error'
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };