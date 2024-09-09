"use client";

import Link from "next/link";
import Image from "next/image";

import { DeckBanner } from "@/components/deck-banner";

export default function TarotPage() {
  const ListService = [
    {
      title: "Tarot do dia",
      description:
        "Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis.",
      img: "/tarot.png",
      link: "/servicos/tarot/calculadora-tarot",
    },
    {
      title: "Calculadora de Tarot",
      description:
        "Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis.",
      img: "/astrology.png",
      link: "/servicos/tarot/calculadora-tarot",
    },
    {
      title: "Combinações",
      description:
        "Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis.",
      img: "/numberology.png",
      link: "/servicos/tarot/calculadora-tarot",
    },
  ];

  return (
    <div className="w-screen">
      <DeckBanner
        description="Todos os serviços de Tarot"
        height={20}
        title={"Tarot"}
      />
      <div className="flex flex-col w-[70%] mx-auto py-10 gap-4">
        {ListService.map((service) => (
          <div
            key={service.title}
            className="flex flex-row w-full bg-secondary rounded-lg overflow-hidden"
          >
            <Image
              alt="image tarot"
              height={100}
              src={service.img}
              width={250}
            />
            <div className="flex flex-col p-5 gap-4">
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
}
