"use server";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}
