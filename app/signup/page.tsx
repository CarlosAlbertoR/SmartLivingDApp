import { GoogleLogin, SignupForm } from "@components/Forms";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Registro",
};

export default async function Signup() {
  return (
    <div className="container pt-48 pb-28">
      <div className="mx-[-16px] flex flex-wrap">
        <div className="w-full px-4">
          <div
            className="wow fadeInUp mx-auto max-w-[500px] rounded-md border border-[#f5f5f5] bg-white p-12 dark:border-0 dark:bg-dark sm:p-[60px]"
            data-wow-delay="0s"
          >
            <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
              Crea tu cuenta
            </h3>
            <p className="mb-11 text-center text-base font-medium text-body-color-2 dark:text-body-color">
              Es increíblemente sencillo
            </p>

            <GoogleLogin />

            <div className="mb-8 flex items-center justify-center">
              <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color bg-opacity-50 sm:block"></span>
              <p className="w-full px-5 text-center text-base font-medium text-body-color-2 dark:text-body-color">
                O con tu correo electrónico
              </p>
              <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color bg-opacity-50 sm:block"></span>
            </div>

            <SignupForm />

            <p className="text-center text-base font-medium text-body-color-2 dark:text-body-color mt-6">
              ¿Ya tienes una cuenta?
              <Link
                className="ml-1 text-primary hover:underline"
                href="/signin"
              >
                Inicia sesión
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
