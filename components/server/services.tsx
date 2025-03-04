import Image from "next/image"

import nailsImage from "@/public/services/nails.webp"
import lashesImage from "@/public/services/lashes.webp"
import Link from "next/link"

const SERVICES = [
  {
    imageUrl: nailsImage,
    name: "Nails",
    description:
      "Discover nail artistry that transforms and protects. Our expert stylists create custom designs from elegant minimalism to bold patterns, while providing nourishing treatments that strengthen and repair. Whether you want a stunning new look or need expert nail correction, we deliver precision and style tailored just for you."
  },
  {
    imageUrl: lashesImage,
    name: "Lashes",
    description:
      "Transform your look with our expert lash services that bring drama, definition, and natural beauty to your eyes. From classic extensions that enhance your natural lashes to voluminous, bold styles that make a statement, our skilled technicians customize each application to perfectly complement your unique eye shape and personal style. Using premium, lightweight materials and precision techniques, we ensure comfortable, long-lasting lashes that look stunning from day to night."
  }
]

export const Services = () => {
  return (
    <div className="mt-8 flex flex-col items-center gap-x-10 gap-y-6">
      <h1 className="font-serif text-3xl font-extrabold tracking-widest sm:text-6xl">
        Services
      </h1>
      <p className="text-center">
        Elevate your beauty with our expert nail and lash services that
        transform and perfect. From custom nail art that ranges from elegant
        minimalism to bold designs, to lash extensions that define and dramatize
        your eyes, our skilled technicians create personalized looks tailored to
        your unique style. We combine precision artistry with premium care,
        offering nourishing treatments that strengthen nails and lightweight
        lash applications that enhance your natural beauty. Whether you&#39;re
        seeking a stunning manicure, flawless lash look, or expert repair and
        correction, we deliver exceptional results that make you look and feel
        your absolute best.
      </p>
      <div className="mt-6 flex flex-col justify-center gap-6 md:flex-row">
        {SERVICES.map(({ imageUrl, name, description }) => (
          <div
            key={name.toLowerCase()}
            className="bg-foreground/10 flex w-full flex-col gap-y-6 rounded-lg p-4 text-center shadow-md"
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
            <Link
              aria-disabled={true}
              href="/book-appointment"
              title="Book an Appointment"
              className="mx-auto mb-4 w-fit shrink rounded-2xl bg-pink-400 px-8 py-6 font-extrabold text-white hover:bg-pink-500"
            >
              Book an Appointment
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
