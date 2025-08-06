"use client";

import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import { useMutation } from "convex/react";

/**
 * Displays a centered page with a label, user profile button, organization switcher, and an "Add" button that triggers a user addition mutation.
 */
export default function Page() {
  const addUser = useMutation(api.users.add);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen h-full">
      <p>apps/web</p>
      <UserButton />
      <OrganizationSwitcher hidePersonal />
      <Button onClick={() => addUser()}>Add</Button>
    </div>
  );
}
