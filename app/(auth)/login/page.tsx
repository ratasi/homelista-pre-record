import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { signIn, signUp } from "@/server/users";
import { auth } from "@/auth";
import { headers } from "next/headers";
import { authClient } from "@/lib/auth-client";
import { SignOut } from "./components/SignOut";

export default async function LoginPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log({ session });

  return (
    <div className="flex h-screen justify-center items-center bg-[#F4F5F2]">
      <div className="bg-white p-5 w-[450px] mx-auto shadow-md">
        <Link href="/" className="text-center">
          <h1 className="px-4 md:px-0">
            <p className="text-2xl font-[Pixelify_Sans]">Homelista</p>
          </h1>
        </Link>

        <h2 className="py-8 text-xl font-bold">Inicia sesión o regístrate</h2>

        <div className="grid w-full items-center gap-2">
          <Label htmlFor="email" className="text-lg">
            Tu email
          </Label>
          <Input id="email" type="email" />
        </div>
        <div className="pt-3">
          <Button
            variant="ghost"
            size="lg"
            className="bg-[#b62682] text-white text-lg w-full border-none hover:bg-[#8f156a]"
          >
            Continuar
          </Button>
        </div>

        <div className="pt-12">
          <p className="text-center text-[#141414]">También puedes</p>

          <Button variant="outline" className="w-full mt-4 flex ">
            <Image src="/google.png" alt="Google" width={20} height={20} />
            <span className="pl-2">Continuar con Google</span>
          </Button>

          <div className="flex justify-between mt-10">
            <Button onClick={signIn}>Sign IN</Button>
            <Button variant="outline" onClick={signUp}>
              Sign UP
            </Button>
          </div>

          {!session ? "Not auth" : session.user.name}
        </div>
        <SignOut />
      </div>
    </div>
  );
}
