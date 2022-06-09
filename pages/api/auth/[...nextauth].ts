import NextAuth from "next-auth";
import LineProvider from "next-auth/providers/line";
import jwt from "jsonwebtoken";

const clientId = process.env.LINE_CLIENT_ID;
const clientSecret = process.env.LINE_CLIENT_SECRET;

if (!clientId || !clientSecret)
  throw new Error("check authentication configure");

export default NextAuth({
  providers: [
    LineProvider({
      clientId: process.env.LINE_CLIENT_ID!,
      clientSecret: process.env.LINE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.SECRET,
  jwt: {
    encode: async ({ secret, token }) => {
      return jwt.sign(token as any, secret);
    },
    decode: async ({ secret, token }) => {
      return jwt.verify(token as string, secret) as any;
    },
  },
  callbacks: {
    async signIn({ profile }) {
      if (!process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT)
        throw new Error(
          "enviornment variable is not defined: NEXT_PUBLIC_GRAPHQL_ENDPOINT"
        );
      const response = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          query: `
            query {
              uniqueUser(id: "${profile.sub}") {
                id
              }
            }
          `,
        }),
      });
      const res = await response.json();
      if (!res.data) {
        await fetch(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            query: `
              mutation {
                createUser(id: "${profile.sub}", name: "${profile.name}", avatar: "${profile.picture}") {
                  id
                }
              }
            `,
          }),
        });
      }
      return true;
    },
    async session({ session, token }) {
      session.userId = token.sub;
      return session;
    },
  },
});
