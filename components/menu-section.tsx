import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export function MenuSection() {
  const menuCategories = [
    { id: "principais", name: "Pratos Principais" },
    { id: "acompanhamentos", name: "Acompanhamentos" },
    { id: "bebidas", name: "Bebidas" },
  ];

  const menuItems = {
    principais: [
      {
        name: "Mufete Tradicional",
        description:
          "Peixe grelhado, feijão de óleo de palma, banana assada e farinha de mandioca",
        price: "3.500 Kz",
        image: "/pratos-principais/foto-01.jpeg",
      },
      {
        name: "Mufete Especial",
        description:
          "Peixe grelhado premium, feijão de óleo de palma, banana assada, batata doce e farinha de mandioca",
        price: "4.200 Kz",
        image: "/pratos-principais/foto-02.jpeg",
      },
      {
        name: "Calulu de Peixe",
        description:
          "Peixe cozido com quiabo, bertalha e óleo de palma, servido com funge",
        price: "3.800 Kz",
        image: "/pratos-principais/foto-03.jpeg",
      },
      {
        name: "Moamba de Galinha",
        description:
          "Galinha cozida em molho de óleo de palma e pasta de amendoim, servida com funge",
        price: "3.600 Kz",
        image: "/pratos-principais/foto-04.jpeg",
      },
    ],
    acompanhamentos: [
      {
        name: "Feijão de Óleo de Palma",
        description: "Feijão cozido com óleo de palma e temperos tradicionais",
        price: "800 Kz",
        image: "/acompanhamentos/feijao-de-oleo-de-palma.jpeg",
      },
      {
        name: "Banana Assada",
        description: "Banana-pão assada na brasa",
        price: "500 Kz",
        image: "/acompanhamentos/banana-asada.png",
      },
      {
        name: "Funge",
        description: "Massa tradicional de mandioca ou milho",
        price: "600 Kz",
        image: "/acompanhamentos/funge-bombo.jpg",
      },
      {
        name: "Salada Mista",
        description: "Mix de vegetais frescos com vinagrete",
        price: "700 Kz",
        image: "/acompanhamentos/salada-mista.jpg",
      },
    ],
    bebidas: [
      {
        name: "Sumo de Múcua",
        description: "Bebida tradicional feita com fruta do embondeiro",
        price: "900 Kz",
        image: "/bebidas/sumo-de-mucua.jpeg",
      },
      {
        name: "Kissangua",
        description: "Bebida fermentada tradicional de milho",
        price: "800 Kz",
        image: "/bebidas/kissangua.jpeg",
      },
      {
        name: "Cerveja Nacional",
        description: "Garrafa de 330ml",
        price: "700 Kz",
        image: "/bebidas/cerveja.jpeg",
      },
      {
        name: "Água Mineral",
        description: "Garrafa de 500ml",
        price: "300 Kz",
        image: "/bebidas/agua.jpg",
      },
    ],
  };

  return (
    <section id="menu" className="w-full py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold sm:text-4xl">
            Nosso Menu
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Descubra os sabores autênticos da culinária angolana
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded bg-molasi-green" />
        </div>

        <Tabs defaultValue="principais" className="w-full">
          <div className="overflow-x-auto">
            <TabsList className="mx-auto mb-8 flex items-center w-full max-w-lg">
              {menuCategories.map((category) => (
                <TabsTrigger
                  className="text-nowrap flex-1"
                  key={category.id}
                  value={category.id}
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {Object.entries(menuItems).map(([category, items]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((item, index) => (
                  <Card key={index} className="menu-card overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-display text-lg font-semibold">
                          {item.name}
                        </h3>
                        <span className="rounded-full bg-molasi-orange px-3 py-1 text-sm font-bold text-white">
                          {item.price}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
