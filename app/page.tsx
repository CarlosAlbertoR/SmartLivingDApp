import GlobalLayout from "@components/GlobalLayout";
import { RootLayoutProps } from "./layout";

export default async function Home({ children }: RootLayoutProps) {
  return <GlobalLayout>{children}</GlobalLayout>;
}
