"use client"
import Link from "next/link"

import { useAuth } from "@/wrappers/AuthContext"

export const BookAppointmentButton = () => {
  const { user, signInWithGoogle } = useAuth()

  const buttonClasses =
    "mx-auto break-words w-fit rounded-2xl bg-pink-400 px-6 py-4 text-base font-extrabold text-white hover:bg-pink-500"

  return user ? (
    <Link
      aria-disabled={true}
      href="/book-appointment"
      className={buttonClasses}
      title="Book an Appointment"
    >
      Book an Appointment
    </Link>
  ) : (
    <Link
      href="#"
      className={buttonClasses}
      onClick={signInWithGoogle}
      title="Sign in to Book an Appointment"
    >
      Sign in to Book an Appointment
    </Link>
  )
}
