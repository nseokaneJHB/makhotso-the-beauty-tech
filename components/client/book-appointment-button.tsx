"use client"
import Link from "next/link"

import { GoogleSignIn } from "@/components/client/google-sign-in"

import { useAuth } from "@/wrappers/AuthContext"

export const BookAppointmentButton = () => {
  const { user } = useAuth()

  return user ? (
    <Link
      aria-disabled={true}
      href="/book-appointment"
      title="Book an Appointment"
      className="mx-auto w-fit rounded-2xl bg-pink-400 px-6 py-4 font-extrabold text-white hover:bg-pink-500"
    >
      Book an Appointment
    </Link>
  ) : (
    <GoogleSignIn />
  )
}
