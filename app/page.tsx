import GlobalLayout from "@components/GlobalLayout";
import { ReactNode } from "react";

export default async function Home({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <GlobalLayout>{children}</GlobalLayout>;
}
