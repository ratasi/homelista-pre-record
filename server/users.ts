"use server";

import { auth } from "@/auth";

export const signIn = async () => {
  await auth.api.signInEmail({
    body: {
      email: "rafatarre@gmail.com",
      password: "pasword123",
    },
  });
};
export const signUp = async () => {
  await auth.api.signUpEmail({
    body: {
      email: "rafatarre@gmail.com",
      password: "pasword123",
      name: "Rafa Tarre",
    },
  });
};
