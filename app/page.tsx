import { NextPage } from "next"
import Image from "next/image"

import artistImage from "@/public/artist.webp"

const HomePage: NextPage = () => {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-y-16 text-center xl:px-8">
      <p className="text-muted-foreground tracking-wider italic">
        😘 Welcome to my booking site 😘
      </p>
      <div>
        <h1 className="font-serif text-3xl font-extrabold tracking-widest text-pink-500 uppercase underline decoration-pink-500/50 decoration-2 underline-offset-8 sm:text-6xl">
          MAKHOTSO
        </h1>
        <p className="mt-4 font-bold italic sm:text-xl">The Beauty Tech</p>
      </div>
      <p className="tracking-wide uppercase">Located in Soweto</p>
      <div className="flex flex-col-reverse items-center gap-x-10 gap-y-6 text-start sm:flex-row">
        <div className="flex-1 text-center sm:mt-0 sm:text-start">
          <h1 className="font-serif text-3xl font-extrabold tracking-widest sm:text-6xl">
            Meet Your Beauty Tech
          </h1>
          <p className="mt-4">
            Welcome to Makhotso The Beauty Tech, your one-stop beauty
            destination for all your nail and eyelash needs. We are here for you
            &#34;A peace of art, unleashing your confidence&#34;
          </p>
          <p className="mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab maxime
            qui, nulla nisi quo tenetur dolore tempora placeat harum aut.
          </p>
        </div>
        <div className="relative h-72 w-72 overflow-hidden rounded-full">
          <Image
            fill
            priority
            sizes="16rem"
            src={artistImage}
            alt="The Artist Makhotso"
            className="rounded-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  )
}

export default HomePage
