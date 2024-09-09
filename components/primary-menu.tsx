"use client";

import { Button } from "@nextui-org/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const PrimaryMenuList = () => {
  const router = useRouter();

  const listMenus = [
    {
      name: "Tarot do dia",
      icon: "/iconTarot.png",
      href: "/servicos/tarot",
    },
    {
      name: "Céu do Momento",
      icon: "/iconTarot.png",
      href: "/servicos/tarot",
    },
    {
      name: "Mapa Natal",
      icon: "/iconTarot.png",
      href: "/servicos/tarot",
    },
    {
      name: "Numerologia do Nome",
      icon: "/iconTarot.png",
      href: "/servicos/tarot",
    },
  ];

  return (
    <div className="flex justify-between items-stretch w-full h-[30vh] my-10">
      {listMenus.map((item) => (
        <div
          key={item.name}
          className="flex flex-col items-center justify-around bg-primary text-secondary w-1/6 rounded-lg uppercase font-bold p-4 text-center"
        >
          <p className="font-customFont">{item.name}</p>
          <Image alt="asdlkajsd" height={68} src={item.icon} width={98} />
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
      ))}
    </div>
  );
};
