import Image from "next/image";

export function GallerySection() {
  const galleryImages = [
    { src: "/pratos-principais/foto-01.jpeg", alt: "Mufete tradicional" },
    { src: "restaurante-a-grelha.jpg", alt: "Peixe grelhado" },
    {
      src: "/acompanhamentos/feijao-de-oleo-de-palma.jpeg",
      alt: "Feijão de óleo de palma",
    },
    { src: "/acompanhamentos/banana-asada.png", alt: "Banana assada" },
    {
      src: "/acompanhamentos/funge-bombo.jpg",
      alt: "Funge",
    },
    { src: "/bebidas/agua.jpg", alt: "Água mineral" },
  ];

  return (
    <section id="galeria" className="w-full bg-muted py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold sm:text-4xl">
            Nossa Galeria
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Conheça um pouco dos nossos pratos e do ambiente acolhedor do Molasi
            Food
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded bg-molasi-orange" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative h-64 overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 w-full p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-lg font-semibold">{image.alt}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
