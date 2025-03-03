import Link from "next/link"
import { ToggleTheme } from "../client/toggle-theme"

export const Navigation = () => {
  return (
    <header className="dark:border-muted dark:bg-background fixed inset-x-0 top-0 z-50 flex items-center justify-center border-b border-pink-100 bg-pink-100 shadow backdrop-blur-sm">
      <nav className="flex w-full max-w-7xl items-center justify-between px-4 py-8 sm:px-8">
        <Link href="/" title="Home" className="flex flex-col">
          <span className="font-serif text-2xl font-extrabold tracking-widest text-pink-500">
            MK
          </span>
          <span className="text-muted-foreground tracking-wider italic">
            The Beauty Tech
          </span>
        </Link>
        <ToggleTheme />
      </nav>
    </header>
  )
}
