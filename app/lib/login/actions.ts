"use server";

import { RegisterFormSchema } from "@schemas/register-form.schema";

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

  return new Promise((resolve, reject) => {
    // Puedes realizar tareas asíncronas aquí
    setTimeout(() => {
      // Simulando una tarea asíncrona, puedes reemplazar esto con tu lógica real
      const success = true; // Indica si la operación fue exitosa

      if (success) {
        resolve(200);
      } else {
        reject(/* Datos que deseas devolver en caso de error */);
      }
    }, 1000); // Tiempo de espera simulado de 1 segundo
  });
}
