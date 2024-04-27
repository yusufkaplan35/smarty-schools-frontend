import NextAuth from "next-auth/next"

const config = {
    providers:[],
    callbacks: {},
    pages: {}
}

export const { auth, signIn, signOut, handlers } = NextAuth(config);