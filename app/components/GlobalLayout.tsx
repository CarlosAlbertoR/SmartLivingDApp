"use client";

import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "@store/store";
import { Header } from "./ui";
import { Provider } from "react-redux";

export default function GlobalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Header />
        {children}
      </PersistGate>
    </Provider>
  );
}
