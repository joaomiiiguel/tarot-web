import Link from "next/link";
import Image from "next/image";

import { DeckBanner } from "@/components/deck-banner";

export default function ServicePage() {
  const ListService = [
    {
      title: "Tarot",
      description:
        "Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis.",
      img: "/tarot.png",
      link: "/servicos/tarot",
    },
    {
      title: "Astrologia",
      description:
        "Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis.",
      img: "/astrology.png",
      link: "/servicos/astrologia",
    },
    {
      title: "Numerologia",
      description:
        "Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis.",
      img: "/numberology.png",
      link: "/servicos/numerologia",
    },
  ];

  return (
    <div className="w-screen">
      <DeckBanner height={20} title={"Serviços"} />
      <div className="w-[80%] flex flex-row justify-between mx-auto py-10 gap-4">
        {ListService.map((service) => (
          <Link
            key={service.title}
            className="bg-primary bg-opacity-60 rounded-lg overflow-hidden text-center hover:bg-opacity-100"
            href={service.link}
          >
            <Image
              alt="image tarot"
              height={240}
              src={service.img}
              width={240}
            />
            <p className="text-xl text-secondary font-bold py-4 uppercase font-customFont">
              {service.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
