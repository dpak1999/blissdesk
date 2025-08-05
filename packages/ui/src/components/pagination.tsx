import * as React from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"
import { Button, buttonVariants } from "@workspace/ui/components/button"

/**
 * Renders a navigation container for pagination controls with appropriate ARIA roles and labels.
 *
 * Combines default and custom class names for layout and centering. Additional props are spread onto the `<nav>` element.
 */
function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  )
}

/**
 * Renders a flex container for pagination items within a pagination UI.
 *
 * Accepts additional props and class names for customization.
 */
function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  )
}

/**
 * Renders a list item for use within pagination controls.
 *
 * Spreads all received props onto the `<li>` element and adds a data attribute for identification.
 */
function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />
}

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">

/**
 * Renders a styled pagination link with active state and accessibility attributes.
 *
 * Applies button-like styling and sets `aria-current="page"` when active for accessibility. The link's appearance changes based on its active state and size.
 *
 * @param isActive - Whether the link represents the current page
 * @param size - The size variant of the link button (default is "icon")
 * @returns An anchor element styled as a pagination link
 */
function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a pagination link styled as a "Previous" button with a left chevron icon.
 *
 * Displays the "Previous" label on small screens and larger for accessibility.
 */
function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pl-2.5", className)}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  )
}

/**
 * Renders a pagination link styled as a "Next" button with an icon and accessible label.
 *
 * Displays a right chevron icon and the text "Next" (visible on larger screens), and sets appropriate ARIA attributes for accessibility.
 */
function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pr-2.5", className)}
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon />
    </PaginationLink>
  )
}

/**
 * Renders an ellipsis indicator for skipped pagination pages.
 *
 * Displays a horizontal "more" icon and includes screen-reader-only text for accessibility.
 */
function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}
