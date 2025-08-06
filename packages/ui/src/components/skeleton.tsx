import { cn } from "@workspace/ui/lib/utils"

/**
 * Renders a skeleton placeholder div with animated pulse and accent background.
 *
 * Combines default styling with any additional classes provided via the `className` prop. All other standard `div` props are supported and passed through.
 */
function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }
