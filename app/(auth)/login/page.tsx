import Link from "next/link";

// import { Button } from "@/components/ui/button";
// import { signIn, signUp } from "@/server/users";
// import { auth } from "@/auth";
// import { headers } from "next/headers";
// import { SignOut } from "./components/SignOut";
import { authClient } from "@/lib/auth-client";
import { LoginForm } from "./components";

export default async function LoginPage() {
  // const session = await auth.api.getSession({
  //   headers: await headers(),
  // });

  const sess = await authClient.getSession();
  console.log(sess);

  return (
    <>
      <h2 className="py-8 text-xl font-bold">Inicia sesión</h2>

      <LoginForm />

      <div className="mt-5">
        <Link href="/register" className="text-blue-700 underline">
          Regístrate aquí
        </Link>
      </div>
      {/* <div className="pt-12">
        <div className="flex justify-between mt-10">
          <Button onClick={signIn}>Sign IN</Button>
          <Button variant="outline" onClick={signUp}>
            Sign UP
          </Button>
        </div>

        <div className="bg-red-400 h-5">
          {!sess.data ? "Not auth" : sess.data?.user.name}
        </div>
      </div>
      <SignOut /> */}
    </>
  );
}
