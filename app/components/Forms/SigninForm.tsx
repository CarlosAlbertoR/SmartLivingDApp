"use client";

import { Checkbox, TextField } from "@components/inputs";
import { Button } from "@components/ui";
import { loginWithEmailAndPassword } from "@config/web3auth";
import { SigninFormData } from "@core/models";
import { LoginFormSchema } from "@core/schemas";
import { useAppDispatch } from "@core/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { setUser } from "@store/slices";
import { parseUserInfo } from "@utils/parseUserInfo";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

export const SigninForm = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { formState, handleSubmit, register } = useForm<SigninFormData>({
    defaultValues: { email: "", password: "", keepSignedIn: false },
    resolver: zodResolver(LoginFormSchema),
  });

  const onSubmit: SubmitHandler<SigninFormData> = async (data) => {
    try {
      const { email, password } = data;
      const user = await loginWithEmailAndPassword(email, password);

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
        id="keepCheckbox"
        formState={formState}
        label="Mantenerme conectado"
        name="keepSignedIn"
        register={register}
        error={formState.errors.keepSignedIn}
      />

      <Button label="Iniciar sesión" />
    </form>
  );
};
