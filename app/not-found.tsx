import { Metadata, NextPage } from "next"
import Link from "next/link"

import { ArrowLeftIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Not Found"
}

const NotFoundPage: NextPage = async () => {
  return (
    <section className="px-4 text-center sm:px-6 sm:py-24 sm:text-start md:grid md:place-items-center lg:px-8">
      <div className="mx-auto max-w-max">
        <main className="space-y-6 sm:flex">
          <p className="text-muted-foreground text-4xl font-bold tracking-tight sm:text-5xl">
            404
          </p>
          <div className="flex flex-col gap-y-6 sm:ml-6">
            <div className="sm:border-muted-foreground space-y-2 sm:border-l sm:pl-6">
              <h1 className="font-serif text-3xl font-extrabold tracking-widest text-pink-400 uppercase md:text-6xl">
                Page not found
              </h1>
              <p className="text-muted-foreground text-base">
                Please check the URL in the address bar and try again.
              </p>
            </div>
            <Link
              href="/"
              title="Go Back Home"
              className="mx-auto flex w-fit gap-x-4 rounded-2xl bg-pink-400 px-6 py-4 font-extrabold text-white hover:bg-pink-500 sm:mx-0"
            >
              <ArrowLeftIcon className="h-5 w-5" />
              <span>Go back home</span>
            </Link>
          </div>
        </main>
      </div>
    </section>
  )
}

export default NotFoundPage
