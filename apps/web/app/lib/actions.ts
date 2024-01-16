"use server";
import { AuthError } from "next-auth";
import { signIn } from "../../auth";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    console.log('awdawdawd', formData);
    await signIn("github", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials";
        default:
          return "Something went wrong";
      }
    }

    throw error;
  }
}

