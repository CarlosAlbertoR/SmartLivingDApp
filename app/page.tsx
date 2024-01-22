import GlobalLayout from "@components/GlobalLayout";
import { RootLayoutProps } from "./layout";

export default async function Home({ children }: Readonly<RootLayoutProps>) {
  return <GlobalLayout>{children}</GlobalLayout>;
}
