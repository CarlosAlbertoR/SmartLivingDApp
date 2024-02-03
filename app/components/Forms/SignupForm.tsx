"use client";

import { Checkbox, TextField } from "@components/inputs";
import { Button } from "@components/ui";
import { signupWithEmailAndPassword } from "@config/web3auth";
import { SignupFormData } from "@core/models";
import { RegisterFormSchema } from "@core/schemas";
import { useAppDispatch } from "@core/store/hooks";
import { setUser } from "@core/store/slices/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { parseUserInfo } from "@utils/parseUserInfo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

export const SignupForm = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { formState, handleSubmit, register } = useForm<SignupFormData>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      termsAndConditions: false,
    },
    resolver: zodResolver(RegisterFormSchema),
  });

  const onSubmit: SubmitHandler<SignupFormData> = async (data) => {
    try {
      const { email, password } = data;
      const user = await signupWithEmailAndPassword(email, password);

      if (user) {
        const parsedUser = parseUserInfo(user);
        dispatch(setUser(parsedUser));
        router.push("/home");
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Nombre Completo"
        name="name"
        type="text"
        placeholder="Ingresa tu nombre completo"
        register={register}
        error={formState.errors.name}
      />
      <TextField
        label="Correo Electrónico"
        name="email"
        type="email"
        placeholder="Ingresa tu correo electrónico"
        register={register}
        error={formState.errors.email}
      />
      <TextField
        label="Contraseña"
        name="password"
        type="password"
        placeholder="Ingresa tu contraseña"
        register={register}
        error={formState.errors.password}
      />

      <Checkbox
        id="termsCheckbox"
        formState={formState}
        label={
          <span>
            Al crear una cuenta, aceptas los
            <Link href="#" className="mx-1 text-primary hover:underline">
              Términos y Condiciones
            </Link>
            y nuestra
            <Link href="#" className="mx-1 text-primary hover:underline">
              Política de Privacidad
            </Link>
          </span>
        }
        name="termsAndConditions"
        register={register}
        error={formState.errors.termsAndConditions}
      />

      <Button label="Registrarse" />
    </form>
  );
};
