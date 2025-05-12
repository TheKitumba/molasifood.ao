import Image from "next/image";

export function AboutSection() {
  return (
    <section id="sobre" className="w-full py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold sm:text-4xl">
            Nossa História
          </h2>
          <div className="mx-auto h-1 w-20 rounded bg-molasi-red" />
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative w-full aspect-square overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/logo.png"
              alt="Restaurante Molasi Food"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="space-y-6">
            <h3 className="font-display text-2xl font-semibold text-molasi-red">
              Tradição e Paixão
            </h3>

            <p className="text-lg leading-relaxed">
              Fundado em 2025, o Molasi Food nasceu da paixão pela culinária
              tradicional angolana e do desejo de compartilhar o autêntico sabor
              do mufete com o mundo.
            </p>

            <p className="text-lg leading-relaxed">
              Nossa equipe de chefs especializados seleciona cuidadosamente os
              ingredientes mais frescos para criar pratos que honram as receitas
              tradicionais, mas com um toque moderno e sofisticado.
            </p>

            <p className="text-lg leading-relaxed">
              No Molasi Food, não servimos apenas refeições - oferecemos uma
              experiência cultural completa que celebra a rica herança
              gastronômica de Angola.
            </p>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-molasi-orange text-white">
                <span className="font-bold">1+/-</span>
              </div>
              <div>
                <h4 className="font-semibold">Anos de Experiência</h4>
                <p className="text-sm text-muted-foreground">
                  Servindo autêntica culinária angolana
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
