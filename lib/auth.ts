import {
  User,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged as _onAuthStateChanged
} from "firebase/auth"

import { clientAuth } from "@/lib/firebase"

export const onAuthStateChanged = (
  authStateListener: (user: User | null) => void
) => {
  return _onAuthStateChanged(clientAuth, authStateListener)
}

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider()

  try {
    await signInWithPopup(clientAuth, provider)
  } catch (error) {
    console.error("Error signing in with Google", error)
  }
}

export const signOut = async () => {
  try {
    return clientAuth.signOut()
  } catch (error) {
    console.error("Error signing out with Google", error)
  }
}
