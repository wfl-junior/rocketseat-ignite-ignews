import { query as q } from "faunadb";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { fauna } from "../../../services/fauna";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: "https://github.com/login/oauth/authorize?scope=read:user",
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        await fauna.query(
          q.Create(q.Collection("users"), {
            data: {
              email: user.email,
            },
          }),
        );

        return true;
      } catch (error) {
        console.log({ error });
        return false;
      }
    },
  },
});
