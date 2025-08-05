"use client"

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

/**
 * A wrapper component for Radix UI's Collapsible root that forwards all props and adds a `data-slot="collapsible"` attribute.
 */
function Collapsible({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
}

/**
 * A React component that renders a trigger for toggling the collapsible state, forwarding all props to the Radix UI CollapsibleTrigger primitive.
 *
 * Adds a `data-slot="collapsible-trigger"` attribute for identification or styling.
 */
function CollapsibleTrigger({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...props}
    />
  )
}

/**
 * A React component that renders collapsible content using Radix UI, forwarding all props and adding a `data-slot="collapsible-content"` attribute.
 */
function CollapsibleContent({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      {...props}
    />
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
