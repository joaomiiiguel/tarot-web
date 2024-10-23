/* eslint-disable no-console */
"use client";

import { useEffect, useState } from "react";

import { DeckBanner } from "@/components/deck-banner";

export default function CalendarioLunarPage() {
  const [calendar, setCalendar] = useState<string>("");
  const fetchCalendarioLunar = async () => {
    const url = "https://moon-phase.p.rapidapi.com/calendar?format=html";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "7033c2d311msh7d0eb333ce61811p131a17jsn712fa9a97230",
        "x-rapidapi-host": "moon-phase.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();

      const result_BR = result
        .replace("Month", "Mês")
        .replace("January", "Janeiro")
        .replace("February", "Fevereiro")
        .replace("March", "Março")
        .replace("April", "Abril")
        .replace("May", "Maio")
        .replace("June", "Junho")
        .replace("July", "Julho")
        .replace("August", "Agosto")
        .replace("September", "Setembro")
        .replace("October", "Outubro")
        .replace("November", "Novembro")
        .replace("December", "Dezembro");

      setCalendar(result_BR);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCalendarioLunar();
  }, []);

  return (
    <section className="w-screen flex flex-col items-center justify-center gap-8">
      <DeckBanner title={"Calendário Lunar"} />
      <div className="flex flex-col items-center justify-between w-8/12 md:w-10/12 mt-4">
        <p>
          Acompanhe as fases da lua de maneira simples e intuitiva. Saiba
          exatamente quando a lua estará nova, crescente, cheia ou minguante, e
          planeje suas atividades de acordo com as influências lunares.
          Conecte-se com os ciclos naturais e aproveite as energias que cada
          fase oferece em seu dia a dia.
        </p>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-3 justify-between">
        <div className="px-6 py-3">
          <h2 className="font-bold uppercase text-center p-2 divide-y bg-primary text-secondary mb-2">
            Janeiro
          </h2>
          <ul className="mb-4">
            <li>🌑 - Lua Nova: 11 de janeiro</li>
            <li>🌒 - Crescente: 19 de janeiro</li>
            <li>🌕 - Lua Cheia: 25 de janeiro</li>
            <li>🌒 - Minguante: 2 de fevereiro</li>
          </ul>
        </div>

        <div className="px-6 py-3">
          <h2 className="font-bold uppercase text-center p-2 divide-y bg-primary text-secondary mb-2">
            Fevereiro
          </h2>
          <ul>
            <li>🌑 - Lua Nova: 9 de fevereiro</li>
            <li>🌒 - Crescente: 17 de fevereiro</li>
            <li>🌕 - Lua Cheia: 24 de fevereiro</li>
            <li>🌒 - Minguante: 1 de março</li>
          </ul>
        </div>

        <div className="px-6 py-3">
          <h2 className="font-bold uppercase text-center p-2 divide-y bg-primary text-secondary mb-2">
            Março
          </h2>
          <ul>
            <li>🌑 - Lua Nova: 10 de março</li>
            <li>🌒 - Crescente: 17 de março</li>
            <li>🌕 - Lua Cheia: 25 de março</li>
            <li>🌒 - Minguante: 1 de abril</li>
          </ul>
        </div>

        <div className="px-6 py-3">
          <h2 className="font-bold uppercase text-center p-2 divide-y bg-primary text-secondary mb-2">
            Abril
          </h2>
          <ul>
            <li>🌑 - Lua Nova: 8 de abril</li>
            <li>🌒 - Crescente: 16 de abril</li>
            <li>🌕 - Lua Cheia: 24 de abril</li>
            <li>🌒 - Minguante: 1 de maio</li>
          </ul>
        </div>

        <div className="px-6 py-3">
          <h2 className="font-bold uppercase text-center p-2 divide-y bg-primary text-secondary mb-2">Maio</h2>
          <ul>
            <li>🌑 - Lua Nova: 8 de maio</li>
            <li>🌒 - Crescente: 15 de maio</li>
            <li>🌕 - Lua Cheia: 23 de maio</li>
            <li>🌒 - Minguante: 30 de maio</li>
          </ul>
        </div>

        <div className="px-6 py-3">
          <h2 className="font-bold uppercase text-center p-2 divide-y bg-primary text-secondary mb-2">
            Junho
          </h2>
          <ul>
            <li>🌑 - Lua Nova: 6 de junho</li>
            <li>🌒 - Crescente: 14 de junho</li>
            <li>🌕 - Lua Cheia: 21 de junho</li>
            <li>🌒 - Minguante: 29 de junho</li>
          </ul>
        </div>

        <div className="px-6 py-3">
          <h2 className="font-bold uppercase text-center p-2 divide-y bg-primary text-secondary mb-2">
            Julho
          </h2>
          <ul>
            <li>🌑 - Lua Nova: 5 de julho</li>
            <li>🌒 - Crescente: 13 de julho</li>
            <li>🌕 - Lua Cheia: 21 de julho</li>
            <li>🌒 - Minguante: 28 de julho</li>
          </ul>
        </div>

        <div className="px-6 py-3">
          <h2 className="font-bold uppercase text-center p-2 divide-y bg-primary text-secondary mb-2">
            Agosto
          </h2>
          <ul>
            <li>🌑 - Lua Nova: 4 de agosto</li>
            <li>🌒 - Crescente: 12 de agosto</li>
            <li>🌕 - Lua Cheia: 19 de agosto</li>
            <li>🌒 - Minguante: 26 de agosto</li>
          </ul>
        </div>

        <div className="px-6 py-3">
          <h2 className="font-bold uppercase text-center p-2 divide-y bg-primary text-secondary mb-2">
            Setembro
          </h2>
          <ul>
            <li>🌑 - Lua Nova: 3 de setembro</li>
            <li>🌒 - Crescente: 11 de setembro</li>
            <li>🌕 - Lua Cheia: 17 de setembro</li>
            <li>🌒 - Minguante: 25 de setembro</li>
          </ul>
        </div>

        <div className="px-6 py-3">
          <h2 className="font-bold uppercase text-center p-2 divide-y bg-primary text-secondary mb-2">
            Outubro
          </h2>
          <ul>
            <li>🌑 - Lua Nova: 2 de outubro</li>
            <li>🌒 - Crescente: 10 de outubro</li>
            <li>🌕 - Lua Cheia: 17 de outubro</li>
            <li>🌒 - Minguante: 24 de outubro</li>
          </ul>
        </div>

        <div className="px-6 py-3">
          <h2 className="font-bold uppercase text-center p-2 divide-y bg-primary text-secondary mb-2">
            Novembro
          </h2>
          <ul>
            <li>🌑 - Lua Nova: 1 de novembro</li>
            <li>🌒 - Crescente: 9 de novembro</li>
            <li>🌕 - Lua Cheia: 15 de novembro</li>
            <li>🌒 - Minguante: 23 de novembro</li>
          </ul>
        </div>

        <div className="px-6 py-3">
          <h2 className="font-bold uppercase text-center p-2 divide-y bg-primary text-secondary mb-2">
            Dezembro
          </h2>
          <ul>
            <li>🌑 - Lua Nova: 30 de dezembro</li>
          </ul>
        </div>
      </section>
    </section>
  );
}
