"use client";

import { persistor, store } from "@store/store";
import Image from "next/image";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { Header } from "./ui";

export default function GlobalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="bg-white dark:bg-black">
          <Header />
          <div className="relative z-10 ">
            {children}

            <div
              className="absolute top-0 left-0 -z-10 h-full w-full opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #3e7dff 0%, rgba(62, 125, 255, 0) 100%)",
              }}
            ></div>

            <Image
              src="/shapes/hero-shape-1.svg"
              width={411}
              height={276}
              className="absolute left-0 top-0 -z-10"
              alt="Shape 1"
            />

            <Image
              src="/shapes/hero-shape-2.svg"
              width={820}
              height={692}
              className="absolute right-0 top-0 -z-10"
              alt="Shape 2"
            />
          </div>
        </div>
      </PersistGate>
    </Provider>
  );
}
