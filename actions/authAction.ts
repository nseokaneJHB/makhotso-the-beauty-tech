"use server"

import { headers } from "next/headers"

import { initializeServerApp } from "firebase/app"
import { getAuth } from "firebase/auth"

import { firebaseConfig } from "@/lib/firebase"

export const isAuthenticated = async () => {
  const token = (await headers()).get("Authorization")?.split("Bearer ")[1]

  const serverApp = initializeServerApp(
    firebaseConfig,
    token ? { authIdToken: token } : {}
  )

  const serverAuth = getAuth(serverApp)

  await serverAuth.authStateReady()

  console.log("\nSERVER AUTH AFTER:", serverApp)

  return { serverApp, currentUser: serverAuth.currentUser }
}
