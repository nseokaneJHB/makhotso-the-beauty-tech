import Image from "next/image"

import { BookAppointmentButton } from "@/components/client/book-appointment-button"

import nailsImage from "@/public/services/nails.webp"
import lashesImage from "@/public/services/lashes.webp"
import makeUpImage from "@/public/services/makeup.webp"

const SERVICES = [
  {
    name: "Nails",
    imageUrl: nailsImage,
    description:
      "Discover nail artistry that transforms and protects. Our expert stylists create custom designs from elegant minimalism to bold patterns, while providing nourishing treatments that strengthen and repair. Whether you want a stunning new look or need expert nail correction, we deliver precision and style tailored just for you."
  },
  {
    name: "Lashes",
    imageUrl: lashesImage,
    description:
      "Enhance your gaze with our expert lash services tailored to your eye shape and style. From subtle, natural extensions to bold, dramatic volume, our technicians apply premium, lightweight lashes with precision for comfortable, long-lasting results that captivate from day to night."
  },
  {
    name: "Make Up",
    imageUrl: makeUpImage,
    description:
      "Transform your look with our expert makeup services tailored to your unique features and style. From subtle daily enhancement to dramatic event glamour, our artists use premium products to create flawless, long-lasting results that help you look and feel your absolute best for any occasion."
  }
]

export const Services = () => {
  return (
    <div className="mt-8 flex flex-col items-center gap-x-10 gap-y-6">
      <h1 className="font-serif text-3xl font-extrabold tracking-widest sm:text-6xl">
        Services
      </h1>
      <p className="text-center">
        Transform your look with our expert nail, lash, and makeup services
        tailored to your unique style. From custom nail designs and precision
        lash applications to flawless makeup for any occasion, our skilled
        technicians use premium products to create stunning, long-lasting
        results. Experience beauty services that enhance your natural features
        and leave you feeling your absolute best.
      </p>
      <div className="flex flex-col justify-center gap-4 md:flex-row">
        {SERVICES.map(({ imageUrl, name, description }) => (
          <div
            key={name.toLowerCase()}
            className="bg-foreground/10 flex w-full flex-col gap-y-6 rounded-lg p-4 pb-6 text-center shadow-md"
          >
            <div className="relative mx-auto h-80 w-full overflow-hidden rounded-lg">
              <Image
                fill
                alt={name}
                sizes="16rem"
                src={imageUrl}
                loading="lazy"
                className="rounded-md object-cover object-center"
              />
            </div>
            <h3 className="font-serif text-xl font-extrabold tracking-widest sm:text-3xl">
              {name}
            </h3>
            <p className="grow">{description}</p>
          </div>
        ))}
      </div>
      <BookAppointmentButton />
    </div>
  )
}
