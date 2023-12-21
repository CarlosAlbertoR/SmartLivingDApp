"use client";

import { Button, Header } from "@/app/components";
import { signupWithEmailAndPassword } from "@/app/lib/login/actions";
import { Metadata } from "next";
import Image from "next/image";
import { useFormState } from "react-dom";
import { FcGoogle } from "react-icons/fc";

// export const metadata: Metadata = {
//     title: 'Registro',
// };

export default function Signup() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(
    signupWithEmailAndPassword,
    initialState
  );

  return (
    <div className="bg-white dark:bg-black">
      <Header />

      <div className="relative z-10 pt-48 pb-28">
        <div className="container">
          <div className="mx-[-16px] flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[500px] rounded-md border border-[#f5f5f5] bg-white p-12 dark:border-0 dark:bg-dark sm:p-[60px]"
                data-wow-delay="0s"
              >
                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Create your account
                </h3>
                <p className="mb-11 text-center text-base font-medium text-body-color-2 dark:text-body-color">
                  It's totally super easy
                </p>
                <Button
                  icon={FcGoogle}
                  className="mb-6"
                  label="Sign up with Google"
                  type="secondary"
                />

                <div className="mb-8 flex items-center justify-center">
                  <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color bg-opacity-50 sm:block"></span>
                  <p className="w-full px-5 text-center text-base font-medium text-body-color-2 dark:text-body-color">
                    Or, register with your email
                  </p>
                  <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color bg-opacity-50 sm:block"></span>
                </div>
              </div>
            </div>
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
      </div>
    </div>
  );
}
