import { NextPage } from "next"

import { Intro } from "@/components/server/intro"
import { AppointmentDetails } from "@/components/server/appointment-details"
import { Services } from "@/components/server/services"

const HomePage: NextPage = () => {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-y-8 text-center xl:px-8">
      <p className="text-muted-foreground tracking-wider italic">
        😘 Welcome to my booking site 😘
      </p>
      <div>
        <h1 className="font-serif text-3xl font-extrabold tracking-widest text-pink-400 uppercase underline decoration-pink-500/50 decoration-2 underline-offset-8 sm:text-6xl">
          MAKHOTSO
        </h1>
        <p className="mt-4 font-bold italic sm:text-xl">The Beauty Tech</p>
      </div>
      <p className="tracking-wide uppercase">Located in Soweto</p>

      <Intro />

      <AppointmentDetails />

      <Services />
    </section>
  )
}

export default HomePage
