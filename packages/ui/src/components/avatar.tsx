"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@workspace/ui/lib/utils"

/**
 * Renders a styled avatar container using Radix UI's Avatar primitive.
 *
 * Combines default avatar layout and shape styles with any additional class names provided. All other props are forwarded to the underlying primitive.
 */
function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders an avatar image with default styling, wrapping the Radix UI Avatar Image primitive.
 *
 * Combines default aspect ratio and sizing classes with any additional class names provided.
 * All other props are forwarded to the underlying Radix Avatar Image component.
 */
function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

/**
 * Displays a fallback UI within the avatar when the image cannot be loaded.
 *
 * Applies default styling for background, alignment, and shape, and accepts additional props for customization.
 */
function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }
