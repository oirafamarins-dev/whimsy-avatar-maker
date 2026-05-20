"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"


interface WhimsyProps {
  className?: string
  height?: number
}

export function Whimsy({ className, height = 32 }: WhimsyProps) {
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
      src=<div className="text-2xl font-semibold tracking-[0.3em]">
      WHIMSY
    </div>
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
