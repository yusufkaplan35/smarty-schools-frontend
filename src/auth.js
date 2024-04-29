import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials";
import { login } from "./services/auth-service";

const config = {
    providers:[
        Credentials({
            async authorize(credentials){
                const res = await login(credentials);
                const data = await res.json();

                if(!res.ok) return null;

                console.log(data);

            }
        })
    ],
    callbacks: { 
        authorized(){
            /* const isLoggedIn = !!auth;
            const isInLoginPage = nextUrl.pathname.startsWith("/login");
 */
            return false;



        }
    },
    pages: {
        signIn: "/login"
    }
}

export const { auth, signIn, signOut, handlers } = NextAuth(config);