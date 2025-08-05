"use client";

import { UserButton } from "@clerk/nextjs";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import { useMutation, useQuery } from "convex/react";

/**
 * Renders a page that displays user data and allows adding users when authenticated, or prompts for sign-in when unauthenticated.
 *
 * Shows a user profile button, a list of users, and an "Add" button for authenticated users. Unauthenticated users are prompted to log in.
 */
export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <p>apps/web</p>
      <UserButton />
      <Button onClick={() => addUser()}>Add</Button>
      <div className="max-w-sm w-full mx-auto">
        {JSON.stringify(users, null, 2)}
      </div>
    </div>
  );
}
