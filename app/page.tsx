import GlobalLayout from "@components/GlobalLayout";
import { RootLayoutProps } from "./layout";

export default async function Home({ children }: Readonly<RootLayoutProps>) {
  return (
    <div className="bg-white dark:bg-black">
      <GlobalLayout>{children}</GlobalLayout>;
    </div>
  );
}
