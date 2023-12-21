import { HeroSection } from "@components/landing";
import { Header } from "@components/ui";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black">
      <Header />
      <HeroSection />
    </div>
  );
}
