// import NextAuth from "next-auth";
// import google from "next-auth/providers/google";
// import credentials from "next-auth/providers/credentials";
// import { authenticate } from "@/services/auth";
// import { AuthResponseType } from "@/types/auth";

// const api = process.env.NEXT_PUBLIC_API_BASE_URL2;

// export const {
//   handlers: { GET, POST },
//   auth,
//   signIn,
//   signOut,
// } = NextAuth({
//   providers: [
//     credentials({
//       // The name to display on the sign in form (e.g. "Sign in with...")
//       name: "Credentials",
//       // `credentials` is used to generate a form on the sign in page.
//       // You can specify which fields should be submitted, by adding keys to the `credentials` object.
//       // e.g. domain, username, password, 2FA token, etc.
//       // You can pass any HTML attribute to the <input> tag through the object.
//       credentials: {
//         email: { type: "text" },
//         password: { type: "password" },
//       },
//       async authorize(credentials, req) {
//         const { email, password } = credentials;

//         const auth: AuthResponseType = await authenticate(
//           email as string,
//           password as string
//         );

//         // if data returned with access token -> get user profile
//         if (!!auth.access_token) {
//           return {
//             accessToken: auth.access_token,
//             refreshToken: auth.refresh_token,
//           };
//         } else {
//           return null;
//         }
//       },
//     }),
//     google({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       authorization: {
//         params: {
//           prompt: "consent",
//           access_type: "offline",
//           response_type: "code",
//         },
//       },
//     }),
//   ],
//   callbacks: {
//     jwt: async ({ token, user }) => {
//       if (user) {
//         token.jwtToken = user.accessToken;
//       }
//       return token;
//     },
//     session: async ({ session, token, user }) => {
//       console.log(user);

//       session.user.accessToken = token.jwtToken as string;
//       return session;
//     },
//     async signIn({ user, account, profile, email, credentials }) {
//       // if user is existed -> allow to sign in
//       const isAllowedToSignIn = !!user;
//       if (isAllowedToSignIn) {
//         // redirect to home
//         return true;
//       } else {
//         // redirect to login page with error param
//         return "/login?error=InvalidCredentials";
//       }
//     },
//   },
// });
