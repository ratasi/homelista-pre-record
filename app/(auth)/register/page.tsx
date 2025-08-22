import React from "react";
import { RegisterForm } from "./components";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <>
      <h2 className="py-8 text-xl font-bold">Regístrate</h2>

      <RegisterForm />

      <div className="mt-5">
        <Link href="/login" className="text-blue-700 underline">
          Inicia sesión aquí
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
