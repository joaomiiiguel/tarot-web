"use client";

import Link from "next/link";
import Image from "next/image";

import { DeckBanner } from "@/components/deck-banner";
import { siteConfig } from "@/config/site";

const NumerologiaPage = () => {
  const ListService = [
    {
      title: "Numerologia do Nome",
      description:
        "Descubra os segredos ocultos por trás do seu nome com a nossa análise completa de numerologia. Ao interpretar o significado dos números associados às letras do seu nome, revelamos características pessoais, potenciais e desafios que podem influenciar sua vida. Entenda como a energia do seu nome impacta sua jornada e explore maneiras de maximizar seu crescimento pessoal.",
      img: "/calendario-lunar.png",
      link: siteConfig.links.numerologiaNome,
    },
  ];

  return (
    <div className="w-screen">
      <DeckBanner
        description="Os números revelam mais do que você imagina!"
        height={20}
        title={"Numerologia"}
      />
      <div className="flex flex-col w-[70%] mx-auto py-10 gap-4">
        {ListService.map((service) => (
          <div
            key={service.title}
            className="flex flex-row w-full bg-secondary rounded-lg overflow-hidden"
          >
            <div className="flex w-1/3">
              <Image
                alt="image tarot"
                height={250}
                src={service.img}
                width={250}
              />
            </div>
            <div className="flex flex-col p-5 gap-4 w-2/3">
              <p className="text-2xl font-bold uppercase font-customFont">
                {service.title}
              </p>
              <p className="text-justify">{service.description}</p>
              <Link
                className="bg-primary rounded py-2 px-16 text-secondary font-bold text-center w-fit cursor-pointer hover:bg-opacity-80"
                href={service.link}
              >
                Entrar
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumerologiaPage;
