"use client";

import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Slider from "react-slick";

export const PrimaryMenuList = () => {
  const router = useRouter();

  const listMenus = [
    {
      name: "Tarot do dia",
      icon: "/iconTarot.png",
      href: siteConfig.links.tarotDia,
    },
    {
      name: "Céu do Momento",
      icon: "/iconTarot.png",
      href: siteConfig.links.ceuMomento,
    },
    {
      name: "Mapa Natal",
      icon: "/iconTarot.png",
      href: siteConfig.links.astrologiaHome,
    },
    {
      name: "Numerologia do Nome",
      icon: "/iconTarot.png",
      href: siteConfig.links.numerologiaNome,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-10 w-full">
      <Slider {...settings}>
        {listMenus.map((item) => (
          <div key={item.name} className="p-4">
            <div className="flex flex-col items-center justify-around bg-primary text-secondary rounded-lg uppercase font-bold p-4 text-center">
              <p className="font-customFont">{item.name}</p>
              <Image alt={item.name} height={68} src={item.icon} width={98} />
              <Button
                fullWidth
                className="text-secondary font-bold"
                size="sm"
                variant="bordered"
                onClick={() => router.push(item.href)}
              >
                Acesse
              </Button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
