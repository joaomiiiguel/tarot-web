"use client";

import Link from "next/link";
import Image from "next/image";

import { DeckBanner } from "@/components/deck-banner";
import { siteConfig } from "@/config/site";

const AstrologiaPage = () => {
  const ListService = [
    {
      title: "Calendário Lunar",
      description:
        "Acompanhe as fases da lua de maneira simples e intuitiva. Saiba exatamente quando a lua estará nova, crescente, cheia ou minguante, e planeje suas atividades de acordo com as influências lunares. Conecte-se com os ciclos naturais e aproveite as energias que cada fase oferece em seu dia a dia.",
      img: "/calendario-lunar.png",
      link: siteConfig.links.calendarioLunar,
    },
    {
      title: "Céu do Momento",
      description:
        "Descubra o que o cosmos reserva para você com a nossa visão em tempo real dos eventos celestes. Acompanhe a posição dos planetas, conjunções e fenômenos astrológicos que podem influenciar diretamente suas emoções e decisões. Obtenha insights sobre como os astros impactam o seu momento atual e tome decisões mais alinhadas com as energias do universo.",
      img: "/ceu-momento.png",
      link: siteConfig.links.ceuMomento,
    },
  ];

  return (
    <div className="w-screen">
      <DeckBanner
        description="Descubra como os astros influenciam sua vida!"
        height={20}
        title={"Astrologia"}
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

export default AstrologiaPage;
