"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

const LOGO_SRC = "/logo/whimsy-logo.png"

interface WhimsyLogoProps {
  className?: string
  height?: number
}

export function WhimsyLogo({ className, height = 32 }: WhimsyLogoProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <span
        className={cn(
          "font-medium tracking-[0.32em] text-foreground uppercase",
          className,
        )}
        style={{ fontSize: height * 0.55 }}
      >
        WHIMSY
      </span>
    )
  }

  return (
    <Image
      src={LOGO_SRC}
      alt="WHIMSY"
      width={height * 4}
      height={height}
      className={cn("h-auto w-auto max-w-[200px] object-contain object-left", className)}
      style={{ height, width: "auto" }}
      priority
      unoptimized
      onError={() => setFailed(true)}
    />
  )
}
