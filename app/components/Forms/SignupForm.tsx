"use client";

import { Checkbox, TextField } from "@components/inputs";
import { Button } from "@components/ui";
import { SignupFormData } from "@core/models";
import { RegisterFormSchema } from "@core/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

export const SignupForm = () => {
  const { formState, handleSubmit, register } = useForm<SignupFormData>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      termsAndConditions: false,
    },
    resolver: zodResolver(RegisterFormSchema),
  });

  const onSubmit: SubmitHandler<SignupFormData> = (data) => {
    console.log("SUCCESS", data);
  };

  return (
    <>
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
              <a href="#" className="text-primary hover:underline">
                Términos y Condiciones
              </a>
              y nuestra
              <a href="#" className="text-primary hover:underline">
                Política de Privacidad
              </a>
            </span>
          }
          name="termsAndConditions"
          register={register}
          error={formState.errors.termsAndConditions}
        />

        <Button label="Registrarse" />
      </form>

      <p className="text-center text-base font-medium text-body-color-2 dark:text-body-color mt-6">
        ¿Ya tienes una cuenta?
        <Link className="text-primary hover:underline" href="/signin">
          Inicia sesión
        </Link>
      </p>
    </>
  );
};
