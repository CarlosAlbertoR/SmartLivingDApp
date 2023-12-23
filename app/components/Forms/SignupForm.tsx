"use client";

import { Checkbox, InputField } from "@components/inputs";
import { Button } from "@components/ui";
import Link from "next/link";
import { useState } from "react";
import { useFormState } from "react-dom";

export const SignupForm = () => {
  const [userTerms, setUserTerms] = useState(false);
  const initialState = { message: null, errors: {} };

  // const [state, dispatch] = useFormState(
  //   signupWithEmailAndPassword,
  //   initialState
  // );

  return (
    <>
      <form action={() => {}}>
        <InputField
          label="Nombre Completo"
          name="name"
          type="text"
          placeholder="Ingresa tu nombre completo"
        />
        <InputField
          label="Correo Electrónico"
          name="email"
          type="email"
          placeholder="Ingresa tu correo electrónico"
        />
        <InputField
          label="Contraseña"
          name="password"
          type="password"
          placeholder="Ingresa tu contraseña"
        />

        <Checkbox
          id="termsCheckbox"
          label={
            <span>
              Al crear una cuenta, aceptas los{" "}
              <a href="#" className="text-primary hover:underline">
                Términos y Condiciones
              </a>{" "}
              y nuestra{" "}
              <a href="#" className="text-primary hover:underline">
                Política de Privacidad
              </a>
            </span>
          }
          checked={userTerms}
          onChange={(checked) => setUserTerms(checked)}
        />

        <Button disabled={!userTerms} label="Registrarse" />
      </form>

      <p className="text-center text-base font-medium text-body-color-2 dark:text-body-color mt-6">
        ¿Ya tienes una cuenta?{" "}
        <Link className="text-primary hover:underline" href="/signin">
          Inicia sesión
        </Link>
      </p>
    </>
  );
};
