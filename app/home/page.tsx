"use client";

import { useAppSelector } from "@core/store/hooks";
import { Metadata } from "next";
import { useRouter } from "next/navigation";

// export const metadata: Metadata = {
//   title: "Inicio",
// };

export default function Page() {
  const currentUser = useAppSelector((state) => state.user).user;
  const router = useRouter();
  if (!currentUser) router.push("/landing");

  return <div className="pt-48 pb-28">Home page</div>;
}
