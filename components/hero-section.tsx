"use client";

import { ReservationModal } from "@/components/reservation-modal";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/mufete.jpg"
          alt="Mufete tradicional angolano"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 hero-gradient opacity-70" />
      </div>

      <div className="container relative z-10 flex min-h-[90vh] flex-col items-center justify-center py-20 text-center text-white">
        <div className="animate-float mb-8">
          <Image
            src="/images/logo.png"
            alt="Molasi Food Logo"
            width={180}
            height={180}
            className="rounded-full shadow-2xl"
          />
        </div>

        <h1 className="mb-6 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          O verdadeiro sabor do{" "}
          <span className="text-molasi-yellow">mufete angolano</span>
        </h1>

        <p className="mb-8 max-w-2xl text-lg text-gray-100 sm:text-xl">
          Experimente a autêntica culinária angolana em um ambiente acolhedor e
          moderno
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <ReservationModal />
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/20"
            onClick={scrollToMenu}
          >
            Ver Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
