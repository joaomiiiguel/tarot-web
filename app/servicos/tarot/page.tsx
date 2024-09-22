"use client";

import Link from "next/link";
import Image from "next/image";

import { DeckBanner } from "@/components/deck-banner";

export default function TarotPage() {
  const ListService = [
    {
      title: "Tarot do dia",
      description:
        "Comece seu dia com a orientação espiritual de uma carta do Tarot, escolhida especialmente para você. A leitura traz uma mensagem exclusiva, seja de um arcano maior ou menor, oferecendo insights sobre as energias que cercam seu caminho hoje. Descubra como aproveitar as oportunidades ou enfrentar os desafios que podem surgir ao longo do dia, com reflexões profundas e diretas sobre seu momento atual.",
      img: "/tarot.png",
      link: "/servicos/tarot/calculadora-tarot",
    },
    {
      title: "Calculadora de Tarot",
      description:
        "Com a Calculadora Tarot, você pode explorar o impacto combinado de dois arcanos — um maior e um menor — e ver como essas energias se entrelaçam. Escolha uma carta de cada grupo e descubra o que essa combinação específica diz sobre seu futuro, suas decisões e os caminhos que estão se abrindo diante de você. A calculadora oferece uma leitura detalhada e única, decodificando as mensagens que esses arcanos trazem em conjunto, proporcionando uma visão profunda sobre sua jornada pessoal e espiritual.",
      img: "/astrology.png",
      link: "/servicos/tarot/calculadora-tarot",
    },
    {
      title: "Combinações",
      description:
        "Mergulhe no universo das combinações de cartas de Tarot e explore o poder das interações entre os arcanos. Neste serviço, você pode selecionar livremente cartas dos arcanos maiores e menores e descobrir o significado por trás de suas escolhas. Cada combinação revela uma sinergia única, destacando conexões ocultas entre as cartas que podem iluminar áreas específicas da sua vida, como amor, trabalho, ou espiritualidade. Ideal para quem busca uma interpretação mais detalhada e personalizada.",
      img: "/numberology.png",
      link: "/servicos/tarot/calculadora-tarot",
    },
  ];

  return (
    <div className="w-screen">
      <DeckBanner
        description="Desvende os mistérios do seu destino!"
        height={20}
        title={"Tarot"}
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
}
