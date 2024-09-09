"use client";

import Image from "next/image";
import { useState } from "react";

interface DeckBannerType {
  title: string;
  description?: string;
  height?: number;
}

export const DeckBanner = ({ title, description, height }: DeckBannerType) => {
  return (
    <div
      className={`flex justify-between items-stretch w-full min-h-[${height ?? 30}vh] bg-gradient-to-r from-[#AB7EB7] to-[#CD81B1] px-[10%]`}
    >
      <div className="flex flex-col justify-center items-start">
        <p className="font-bold text-3xl text-secondary">{title}</p>
        <p className="font-bold text-lg text-secondary">{description}</p>
      </div>
      <div className="flex items-end h-auto ">
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
