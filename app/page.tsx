import { HeroSection } from "@components/landing";
import { Header } from "@components/ui";
import { createWeb3Auth } from "@config/web3auth";

export default async function Home() {

  const web3Auth = await createWeb3Auth();
  
  if (web3Auth.isInitialized) {
    // El usuario ya está conectado, puedes llamar a getUserInfo()
    const user = await web3Auth.getUserInfo();
  console.log(user);
  }
 
  
  return (
    <div className="bg-white dark:bg-black">
      <Header />
      <HeroSection />
    </div>
  );
}
