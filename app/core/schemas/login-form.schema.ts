import { SigninFormData } from "@core/models";
import { z, ZodType } from "zod";

export const LoginFormSchema: ZodType<SigninFormData> = z.object({
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
  keepSignedIn: z.boolean(),
});
