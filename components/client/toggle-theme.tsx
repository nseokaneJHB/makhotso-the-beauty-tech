"use client"
import { useState, useEffect } from "react"

import { useTheme } from "next-themes"

import { MoonIcon, SunIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export const ToggleTheme = () => {
  const { setTheme, resolvedTheme } = useTheme()
  const [mount, setMount] = useState<boolean>(false)

  useEffect(() => {
    setMount(true)
  }, [])

  if (!mount) {
    return <div className="w-9" />
  }

  return (
    <Button
      size="icon"
      variant="ghost"
      className="group rounded-full hover:cursor-pointer"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <MoonIcon className="!h-7 !w-7" />
      ) : (
        <SunIcon className="!h-7 !w-7" />
      )}
      <span className="sr-only">Toggle Theme</span>
    </Button>
  )
}
