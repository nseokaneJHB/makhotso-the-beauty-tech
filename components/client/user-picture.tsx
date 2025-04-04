"use client"

import { useState } from "react"

import Image from "next/image"

import { LoaderCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

import { useAuth } from "@/wrappers/AuthContext"

import { cn } from "@/lib/utils"

export const UserPicture = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { user, loading, logout } = useAuth()

  if (loading) {
    return (
      <div className="rounded-full p-2 ring-2 ring-pink-400">
        <LoaderCircle className="h-7! w-7! animate-spin" />
      </div>
    )
  }

  if (!loading && !user) {
    return null
  }

  return (
    <div className="relative flex items-center">
      <Button
        variant="ghost"
        onClick={() => setIsOpen(prev => !prev)}
        className={cn(
          "relative h-14 w-14 cursor-pointer rounded-full p-2 ring-2 ring-pink-400 hover:ring-pink-500",
          { "ring-pink-500": isOpen }
        )}
      >
        {user?.photoURL ? (
          <Image
            fill
            priority
            sizes="16rem"
            src={user?.photoURL || ""}
            className="rounded-full object-cover object-center"
            alt={user?.displayName || "Your" + "Profile Picture"}
          />
        ) : (
          <span className="text-lg font-extrabold tracking-widest">ME</span>
        )}
      </Button>

      <Button
        onClick={logout}
        className={cn(
          "absolute right-0 w-fit translate-y-[30px] scale-0 transform cursor-pointer self-end bg-pink-400 px-8 py-6 font-extrabold text-white opacity-0 transition-all delay-200 duration-300 ease-linear hover:bg-pink-500",
          {
            "z-30 translate-y-[45px] scale-100 opacity-100": isOpen
          }
        )}
      >
        <span
          className={cn("opacity-0 transition duration-300 ease-in-out", {
            "opacity-100": isOpen
          })}
        >
          Sign Out
        </span>
      </Button>
    </div>
  )
}
