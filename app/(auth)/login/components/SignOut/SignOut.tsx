"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export function SignOut() {
  // const signOut = await authClient.signOut();

  return <Button onClick={() => authClient.signOut()}>SignOut</Button>;
}
