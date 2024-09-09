"use client";

import { Button } from "@nextui-org/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const CalcTarotBanner = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between items-stretch w-full min-h-[30vh]">
      <div className="flex flex-col justify-center items-start">
        <p className="font-bold text-3xl text-secondary">
          Calcuradora de Tarot
        </p>
        <p className="font-bold text-base text-secondary">Veja o resultado</p>
      </div>
      <div className="flex items-end h-auto relative">
        <Button
          className="bg-secondary text-primary font-bold border-3 border-primary px-14 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
          onClick={() => router.push("/servicos/tarot/calculadora-tarot")}
        >
          Jogue Agora
        </Button>
        <Image
          priority
          alt="asdasda"
          height={220}
          src={"/DeckBanner.webp"}
          width={573.57}
        />
      </div>
    </div>
  );
};
