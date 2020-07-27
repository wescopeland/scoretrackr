import { PrismaClient } from '@prisma/client';
import { argon2id, verify } from 'argon2';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const prisma = new PrismaClient();

const options = {
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      authorize: async ({ email, password }) => {
        const user = await prisma.user.findOne({ where: { email } });

        if (!user) {
          return Promise.reject(new Error('Invalid credentials.'));
        }

        const isValid = await verify(user.password, password, {
          type: argon2id
        });

        if (!isValid) {
          return Promise.reject(new Error('Invalid credentials.'));
        } else {
          return Promise.resolve(user);
        }
      }
    })
  ],

  callbacks: {
    signIn: async (user, account, profile) => {
      console.log({ user });
      return Promise.resolve(false);
    }
  },

  session: { jwt: true },

  database: process.env.DATABASE_URL
};

export default (req, res) => NextAuth(req, res, options);
