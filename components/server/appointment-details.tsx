import Link from "next/link"

import { FOOTER_LINKS } from "@/components/server/footer"
import { BookAppointmentButton } from "@/components/client/book-appointment-button"

export const AppointmentDetails = () => {
  return (
    <div className="mt-8 flex flex-col gap-x-10 gap-y-6 text-center lg:flex-row">
      <div className="flex w-full flex-col gap-y-6">
        <h1 className="font-serif text-3xl font-extrabold tracking-widest sm:text-5xl">
          Business Hours
        </h1>
        <p>By appointments only</p>
        <BookAppointmentButton />
      </div>
      <div className="mt-6 flex w-full flex-col gap-y-6 lg:mt-0">
        <h1 className="font-serif text-3xl font-extrabold tracking-widest sm:text-5xl">
          Contact Info
        </h1>
        <div className="space-y-2">
          <p>
            <strong>Contact Number: </strong>0723434543
          </p>
          <p>
            <strong>Email: </strong>test@@gmail.com
          </p>
          <p>
            <strong>Address:</strong> 365 Reid Road, Roodeport 1709,
            Johannesburg, Gauteng
          </p>
        </div>
        <div className="mx-auto flex flex-wrap justify-center gap-4">
          {FOOTER_LINKS.map(item => (
            <Link
              key={item.name}
              target="_blank"
              href={item.href}
              title={item.name}
              rel="noreferrer noopener"
              className="flex w-fit items-center gap-x-1 text-pink-400 underline-offset-4 hover:text-pink-500 hover:underline"
            >
              <item.icon aria-hidden="true" className="h-7 w-7" />
              <span className="font-bold uppercase">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
