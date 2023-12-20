import Image from "next/image";
import { FaBitcoin } from "react-icons/fa";
import { Button } from ".";

export const HeroSection = () => {
  return (
    <section id="home" className="relative z-10 pt-48 pb-28">
      <div className="container flex flex-wrap">
        <div className="w-full px-4 mx-auto max-w-[720px] text-center">
          <h1 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white md:text-[45px]">
            Transformando la Gestión Inmobiliaria con Tokenización y Pagos
            Descentralizados
          </h1>
          <p className="mx-auto mb-4 max-w-[620px] text-lg font-medium text-body-color-2 dark:text-white">
            Descubre SmartLiving-Management, la plataforma innovadora que
            utiliza tokenización y pagos descentralizados para simplificar la
            administración de edificios y la gestión de espacios de
            estacionamiento. ¡Experimenta una nueva era de transparencia y
            seguridad en la gestión inmobiliaria!
          </p>

          <div className="-mx-1 mb-10 flex flex-wrap items-center justify-center sm:-mx-2">
            <div className="group relative mt-4 px-1 sm:px-2">
              <span className="mt-2 flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <FaBitcoin className="h-7 w-7" fill="#F7931A" />
              </span>
              <div className="absolute -top-full left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#2D2C4A] px-5 py-2 text-white opacity-0 group-hover:opacity-100">
                <span className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-[#2D2C4A]"></span>
                <span>Bitcoin (BTC)</span>
              </div>
            </div>
            <div className="group relative mt-4 px-1 sm:px-2">
              <span className="mt-2 flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <Image
                  src="/icons/ethereum-blue.svg"
                  height={28}
                  width={28}
                  alt="Ethereum icons"
                />
              </span>
              <div className="absolute -top-full left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#2D2C4A] px-5 py-2 text-white opacity-0 group-hover:opacity-100">
                <span className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-[#2D2C4A]"></span>
                <span>Ethereum (EVM)</span>
              </div>
            </div>
            <div className="group relative mt-4 px-1 sm:px-2">
              <span className="mt-2 flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <Image
                  src="/icons/safe.svg"
                  height={28}
                  width={28}
                  alt="Safe Protocol icon"
                />
              </span>
              <div className="absolute -top-full left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#2D2C4A] px-5 py-2 text-white opacity-0 group-hover:opacity-100">
                <span className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-[#2D2C4A]"></span>
                <span>Safe protocol</span>
              </div>
            </div>
          </div>

          <Button label="Explora la Revolución SmartLiving" />
        </div>
      </div>

      <div
        className="absolute top-0 left-0 -z-10 h-full w-full opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #3e7dff 0%, rgba(62, 125, 255, 0) 100%)",
        }}
      ></div>

      <Image
        src="/shapes/hero-shape-1.svg"
        width={450}
        height={450}
        className="absolute left-0 top-0 -z-10"
        alt="Shape 1"
      />

      <Image
        src="/shapes/hero-shape-2.svg"
        width={820}
        height={820}
        className="absolute right-0 top-0 -z-10"
        alt="Shape 2"
      />
    </section>
  );
};
