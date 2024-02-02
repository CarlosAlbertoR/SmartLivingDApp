"use server";

import { RegisterFormSchema } from "@core/schemas/register-form.schema";

export type StateUserRegister = {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};

export async function signupWithEmailAndPassword(
  prevState: StateUserRegister,
  formData: FormData
) {
  // Validate form using Zod
  const validatedFields = RegisterFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Campos faltantes. Registro fallido.",
    };
  }
}
