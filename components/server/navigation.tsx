import Link from "next/link"

import { ToggleTheme } from "@/components/client/toggle-theme"
import { UserPicture } from "@/components/client/user-picture"

export const Navigation = async () => {
  return (
    <header className="dark:border-muted dark:bg-background fixed inset-x-0 top-0 z-50 flex items-center justify-center border-b border-pink-100 bg-pink-100 shadow backdrop-blur-sm">
      <nav className="flex w-full max-w-7xl items-center justify-between p-4 sm:px-8">
        <Link
          href="/"
          title="Home"
          className="font-serif text-2xl font-extrabold tracking-widest text-pink-400"
        >
          MK
        </Link>
        <div className="flex items-center gap-x-4">
          <ToggleTheme />
          <UserPicture />
        </div>
      </nav>
    </header>
  )
}
