"use client"

import { Button } from "@/components/ui/button"
import { useAuth } from "@/wrappers/AuthContext"

export const GoogleSignIn = () => {
  const { signInWithGoogle } = useAuth()

  return (
    <Button
      size="lg"
      onClick={signInWithGoogle}
      className="group mx-auto flex h-[42px] items-center gap-x-[2px] rounded-2xl bg-pink-400 px-6 py-4 text-base font-extrabold text-white hover:cursor-pointer hover:bg-pink-500"
    >
      Sign In to Book an Appointment
    </Button>
  )
}
