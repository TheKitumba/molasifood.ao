import { INFO } from "@/constants/info";
import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Molasi Food Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="font-display text-xl font-bold">
                Molasi Food
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Trazendo o verdadeiro sabor do mufete angolano para sua mesa desde
              2025.
            </p>
            <div className="flex gap-4">
              <Link
                href={INFO.facebookURL}
                target="_black"
                className="rounded-full bg-molasi-red p-2 text-white hover:bg-molasi-red/80"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href={INFO.instagramURL}
                className="rounded-full bg-molasi-red p-2 text-white hover:bg-molasi-red/80"
              >
                <Instagram target="_black" className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="#sobre"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="#menu"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="#galeria"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Galeria
                </Link>
              </li>
              <li>
                <Link
                  href="#contato"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Horário</h3>
            <ul className="space-y-2">
              <li className="flex justify-between text-sm">
                <span className="text-muted-foreground">Segunda-Sexta</span>
                <span>11h - 23h</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-muted-foreground">Sábado</span>
                <span>11h - 23h</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-muted-foreground">Domingo</span>
                <span>11h - 16h</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Newsletter</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Inscreva-se para receber nossas promoções e novidades
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Seu email"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                required
              />
              <button
                type="submit"
                className="rounded-md bg-molasi-red px-3 py-2 text-sm font-medium text-white hover:bg-molasi-red/90"
              >
                OK
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Molasi Food. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
