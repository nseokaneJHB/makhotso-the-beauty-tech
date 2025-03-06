import { NextPage } from "next"
import Image from "next/image"

import logoImage from "@/public/transparent-logo.png"

import { Intro } from "@/components/server/intro"
import { Services } from "@/components/server/services"
import { AppointmentDetails } from "@/components/server/appointment-details"
import { SectionContainer } from "@/components/server/section-container"

const HomePage: NextPage = () => {
  return (
    <>
      <SectionContainer>
        <p className="text-muted-foreground tracking-wider italic">
          😘 Welcome to my booking site 😘
        </p>
      </SectionContainer>
      <div className="bg-secondary-foreground dark:bg-foreground/10 my-8">
        <div className="relative mx-auto h-40 w-full max-w-80 overflow-hidden sm:h-36 md:h-40 lg:h-56">
          <Image
            fill
            priority
            sizes="16rem"
            src={logoImage}
            alt="The Artist Makhotso"
            className="object-cover object-center"
          />
        </div>
      </div>
      <SectionContainer>
        <p className="tracking-wide uppercase">Located in Soweto</p>
        <Intro />
        <AppointmentDetails />
        <Services />
      </SectionContainer>
    </>
  )
}

export default HomePage
