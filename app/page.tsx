"use client";

import { useEffect, useState } from "react";
import { Header, HeroSection } from "./components";

export default function Home() {
  const [scrolledFromTop, setScrolledFromTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset >= 50;
      setScrolledFromTop(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-white dark:bg-black">
      <Header scrolledFromTop={scrolledFromTop} />
      <HeroSection />
    </div>
  );
}
