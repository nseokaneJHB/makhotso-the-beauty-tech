import Image from "next/image"

import artistImage from "@/public/artist.webp"

export const Intro = () => {
  return (
    <div className="mt-8 flex flex-col-reverse items-center gap-x-10 gap-y-6 text-start md:flex-row">
      <div className="w-full text-center md:mt-0 md:text-start">
        <h1 className="font-serif text-3xl font-extrabold tracking-widest sm:text-6xl">
          Meet Your Beauty Tech
        </h1>
        <p className="mt-6">
          Welcome to Makhotso The Beauty Tech, your one-stop beauty destination
          for all your nail and eyelash needs. We are here for you &#34;A peace
          of art, unleashing your confidence&#34;
        </p>
        <p className="mt-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab maxime
          qui, nulla nisi quo tenetur dolore tempora placeat harum aut.
        </p>
      </div>
      <div className="flex h-80 w-2/3 justify-center rounded-full border bg-pink-400 sm:rounded-b-none md:h-[350px] md:w-1/2 md:p-6">
        <div className="relative h-full w-full overflow-hidden rounded-full sm:h-80 sm:w-80">
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
    </div>
  )
}
