"use client";

import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

/**
 * Renders a page that displays user data and allows adding users when authenticated, or prompts for sign-in when unauthenticated.
 *
 * Shows a user profile button, a list of users, and an "Add" button for authenticated users. Unauthenticated users are prompted to log in.
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
