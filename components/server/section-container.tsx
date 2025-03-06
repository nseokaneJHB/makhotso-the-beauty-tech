import React from "react"

export const SectionContainer = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="px-4 sm:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-y-8 text-center xl:px-8">
        {children}
      </div>
    </div>
  )
}
