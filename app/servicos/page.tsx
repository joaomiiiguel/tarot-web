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
      <DeckBanner
        description="Todos os serviços de tarot"
        height={20}
        title={"Serviços"}
      />
      <div className="w-[80%] mx-auto py-10 grid grid-cols-3 gap-4">
        {ListService.map((service) => (
          <Link
            key={service.title}
            className="w-full bg-secondary bg-opacity-60 rounded-lg overflow-hidden text-center hover:bg-opacity-100"
            href={service.link}
          >
            <Image
              alt="image tarot"
              height={200}
              src={service.img}
              width={390}
            />
            <p className="text-2xl font-bold py-5 uppercase font-customFont">
              {service.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
