"use client";

import { useState } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { CardTarot } from "./card-tarot";

export const TarotOnline = () => {
  const [step, setStep] = useState<number>(1);
  const [name, setName] = useState<string>();

  return (
    <div className="flex flex-col w-full h-[70vh] bg-[#321A3E] rounded">
      <div className="w-full h-fit items-center justify-center  bg-[#FFD0F7] rounded">
        <div className="flex justify-center flex-row gap-5 items-center py-3">
          <div className="bg-[#321A3E] flex items-center justify-center rounded-full w-8 h-8">
            1
          </div>
          <div className="bg-[#321A3E] flex items-center justify-center rounded-full w-8 h-8">
            2
          </div>
          <div className="bg-[#321A3E] flex items-center justify-center rounded-full w-8 h-8">
            3
          </div>
        </div>
      </div>

      <div className="w-full h-full flex-col gap-4 flex items-center justify-around ">
        <div className="w-1/3 mt-20">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="underlined"
            type="name"
            placeholder="Digite seu nome"
          />
        </div>
        <Button>Iniciar Tarot</Button>
        <div className="flex flex-row justify-center relative">
          <CardTarot cardStyle={{ position: "relative", left: 10, top: 0 }} />
          <CardTarot cardStyle={{ position: "relative", left: 0, top: 0 }} />
        </div>
      </div>
    </div>
  );
};
