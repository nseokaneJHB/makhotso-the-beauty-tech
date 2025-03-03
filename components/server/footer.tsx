import Link from "next/link"
import { JSX, SVGProps } from "react"

export const FOOTER_LINKS = [
  {
    name: "LinkedIn",
    href: "",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 448 512" {...props}>
        <path
          fill="currentColor"
          d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
        />
      </svg>
    )
  },
  {
    name: "GitHub",
    href: "",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
      </svg>
    )
  },
  {
    name: "Instagram",
    href: "",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
        />
      </svg>
    )
  },
  {
    name: "WhatsApp",
    href: "",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.043 2c-5.523 0-10 4.477-10 10 0 1.758.455 3.415 1.254 4.876L2 22l5.256-1.253a9.965 9.965 0 004.787 1.253c5.523 0 10-4.477 10-10s-4.477-10-10-10zm5.848 14.122c-.242.681-1.2 1.247-1.963 1.412-.523.11-1.205.2-3.505-.752-2.941-1.212-4.827-4.253-4.971-4.45-.142-.197-1.178-1.564-1.178-2.981 0-1.418.748-2.118 1.024-2.411.275-.293.601-.367.802-.367.2 0 .401.003.576.01.185.008.433-.07.677.518.25.6.847 2.086.921 2.238.075.151.125.327.025.524-.1.197-.15.319-.301.49-.15.17-.317.38-.453.511-.15.15-.307.312-.132.613.175.3.776 1.291 1.662 2.09.939.85 1.761 1.123 2.062.975.3-.148.4-.393.65-.64.25-.248.524-.395.722-.246.197.15 1.246.937 1.461 1.11.214.174.357.261.407.407.05.146.05.84-.192 1.52z"
        />
      </svg>
    )
  }
]

export const Footer = () => {
  return (
    <footer className="dark:border-muted dark:bg-background flex items-center justify-center border-t border-pink-100 bg-pink-100 shadow backdrop-blur-sm">
      <div className="text-muted-foreground flex w-full max-w-7xl flex-col items-center justify-between gap-4 p-4 sm:flex-row sm:px-8">
        <div className="flex justify-center space-x-6">
          {FOOTER_LINKS.map(item => (
            <Link
              key={item.name}
              target="_blank"
              href={item.href}
              title={item.name}
              rel="noreferrer noopener"
              className="hover:text-foreground"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="h-5 w-5" />
            </Link>
          ))}
        </div>
        <p className="text-center text-sm leading-5">
          &copy; 2025 Makhotso The Beauty Tech. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
