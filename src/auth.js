import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { login } from "./services/auth-service";

const config = {
	providers: [
		Credentials({
			async authorize(credentials) {
				const res = await login(credentials);
				const data = await res.json();
				if (!res.ok) return null;

				const payload = {
					user: { ...data },
					accessToken: data.token.split(" ")[1],
				};
				delete payload.user.token;

				return payload;
			},
		}),
	],
	callbacks: {
		// middleware in kapsama alanina giren sayfalara yapilan isteklerden hemen once calisir
		authorized({ auth, request }) {
			const { pathname } = request.nextUrl;

			//console.log("AUTHORIZED", auth, pathname);

			const isLoggedIn = !!auth?.user?.role;
			const isInLoginPage = pathname.startsWith("/login");
			const isInDashboardPages = pathname.startsWith("/dashboard");

			if (isLoggedIn) {
				if (isInDashboardPages) {
					return true;
				} else if (isInLoginPage) {
					return Response.redirect(
						new URL("/dashboard", request.nextUrl)
					);
				}
			} else if (isInDashboardPages) {
				return false;
			}

			return true;
		},
		// JWT datasina ihtiyac duyan her route icin calisir
		async jwt({ token, user }) {
			//console.log("JWT", token, user);
			return { ...user, ...token }
		},
		// Session datasina ihtiyac duyan her route icin calisir
		async session({ session, token }) {
			//console.log("SESSION", session, token);
			
			session.accessToken = token.accessToken;
			session.user = token.user;
			return session;
			
		},
	},

	pages: {
		signIn: "/login",
	},
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
