"use client";

import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

/**
 * Renders a centered page with a label, user profile button, and organization switcher.
 *
 * Displays the text "apps/web", a user profile button, and an organization switcher with the personal organization option hidden.
 */
export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <p>apps/web</p>
      <UserButton />
      <OrganizationSwitcher hidePersonal />
    </div>
  );
}
