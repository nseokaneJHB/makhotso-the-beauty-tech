import { getApp, getApps, initializeApp } from "firebase/app"

import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics"

export const firebaseConfig = {
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
}

export const clientApp = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig)

export const clientAuth = getAuth(clientApp)
export const db = getFirestore(clientApp)
export const storage = getStorage(clientApp)
// export const analytics = getAnalytics(clientApp)
