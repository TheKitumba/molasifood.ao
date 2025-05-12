import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { GallerySection } from "@/components/gallery-section"
import { MenuSection } from "@/components/menu-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <MenuSection />
      <ContactSection />
    </div>
  )
}
