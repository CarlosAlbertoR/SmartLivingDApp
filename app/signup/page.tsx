import { GoogleLogin, SignupForm } from "@components/Forms";
import { createWeb3Auth, logout, getUserInfo } from "@config/web3auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registro",
};

export default async function Signup() {
  // Verifica si el usuario está conectado y obtén su información
  const checkUserConnection = async () => {
    try {
      const web3auth = await createWeb3Auth();
      await logout();
      console.log("isConected", web3auth.connected);

      // Verifica si está conectado
      if (web3auth.connected) {
        // El usuario ya está conectado, puedes llamar a getUserInfo()
        const user = await web3auth.getUserInfo();
        console.log("Información del usuario:", user);
      } else {
        console.log("El usuario no está conectado.");
      }
    } catch (error) {
      console.error("Error al verificar la conexión del usuario:", error);
    }
  };

  // Llama a la función para verificar la conexión del usuario
  // checkUserConnection();

  // const user = await web3Auth.getUserInfo();
  // console.log(user);

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
          </div>
        </div>
      </div>
    </div>
  );
}
