import Link from "next/link"
import { FOOTER_LINKS } from "./footer"

export const AppointmentDetails = () => {
  return (
    <div className="mt-8 flex flex-col gap-x-10 gap-y-6 text-center lg:flex-row">
      <div className="flex w-full flex-col gap-y-6">
        <h1 className="font-serif text-3xl font-extrabold tracking-widest sm:text-5xl">
          Business Hours
        </h1>
        <p>By appointment only</p>
        <Link
          aria-disabled={true}
          href="/book-appointment"
          title="Book an Appointment"
          className="mx-auto w-fit rounded-2xl bg-pink-400 px-8 py-6 font-extrabold text-white hover:bg-pink-500"
        >
          Book an Appointment
        </Link>
      </div>
      <div className="mt-6 flex w-full flex-col lg:mt-0">
        <h1 className="font-serif text-3xl font-extrabold tracking-widest sm:text-5xl">
          Contact Information and Location
        </h1>
        <p className="mt-6">
          <strong>Contact Number: </strong>0723434543
        </p>
        <p className="mt-2">
          <strong>Email: </strong>test@@gmail.com
        </p>
        <p className="mt-2">
          <strong>Address:</strong> 365 Reid Road, Roodeport 1709, Johannesburg,
          Gauteng
        </p>
        <div className="mx-auto mt-6 grid grid-cols-2 gap-2 sm:w-1/2">
          {FOOTER_LINKS.map(item => (
            <Link
              key={item.name}
              target="_blank"
              href={item.href}
              title={item.name}
              rel="noreferrer noopener"
              className="flex w-fit items-center gap-x-2 text-pink-400 underline-offset-4 hover:text-pink-500 hover:underline"
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
