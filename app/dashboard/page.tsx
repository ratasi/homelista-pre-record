import { auth } from "@/auth";
import { headers } from "next/headers";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    // redirect("/login") si quieres
  }

  return (
    <div>
      <h1>Hola {session?.user.email}</h1>
    </div>
  );
}
