import { z } from "zod";

export const RegisterFormSchema = z.object({
  name: z.string().min(4, {
    message: "El nombre del cliente debe tener al menos 4 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, ingresa una dirección de correo electrónico válida.",
  }),
  password: z.string().refine(
    (value) => {
      const regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return regex.test(value);
    },
    {
      message:
        "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.",
    }
  ),
  terms: z.boolean().refine((value) => value, {
    message: "Por favor, acepta los términos y condiciones para continuar.",
  }),
});
