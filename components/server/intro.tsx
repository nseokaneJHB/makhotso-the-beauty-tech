import Image from "next/image"

import artistImage from "@/public/artist.webp"

export const Intro = () => {
  return (
    <div className="mt-8 flex flex-col-reverse items-center gap-x-10 gap-y-6 text-start md:flex-row">
      <div className="w-full space-y-6 text-center md:mt-0 md:text-start">
        <h1 className="font-serif text-3xl font-extrabold tracking-widest sm:text-6xl">
          Meet Your Beauty Tech
        </h1>
        <div className="space-y-4">
          <p>
            Welcome to Makhotso The Beauty Tech, your one-stop beauty
            destination for all your nail and eyelash needs. We are here for you
            &#34;A peace of art, unleashing your confidence&#34;
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab maxime
            qui, nulla nisi quo tenetur dolore tempora placeat harum aut.
          </p>
        </div>
      </div>
      <div className="flex w-full max-w-96 transform items-center justify-center rounded-full transition-all duration-300 ease-linear sm:h-[330px] sm:items-start sm:rounded-b-none sm:bg-pink-400 sm:pt-6">
        <div className="relative h-80 w-full max-w-80 overflow-hidden rounded-full border-2 border-pink-400">
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
