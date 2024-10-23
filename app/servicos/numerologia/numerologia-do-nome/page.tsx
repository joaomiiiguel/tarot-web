"use client";

import { useState } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

import { DeckBanner } from "@/components/deck-banner";
import { NumerologiaSignific } from "@/app/api/numerologia-nome/route";

export default function NumerologiaNomePage() {
  const [nome, setNome] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [resultado, setResultado] = useState<NumerologiaSignific | null>(null);

  const calcularNumerologia = async () => {
    const res = await fetch("/api/numerologia-nome", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome }),
    });

    const data = await res.json();

    setLoading(false);

    setResultado(data.numerologia.significado);
  };

  return (
    <section className="w-screen flex flex-col items-center justify-center gap-8">
      <DeckBanner title={"Numerologia do Nome"} />
      <div className="flex flex-col items-center justify-between w-8/12 md:w-10/12 mt-4">
        <p>
          Descubra os segredos ocultos por trás do seu nome com a nossa análise
          completa de numerologia. Ao interpretar o significado dos números
          associados às letras do seu nome, revelamos características pessoais,
          potenciais e desafios que podem influenciar sua vida. Entenda como a
          energia do seu nome impacta sua jornada e explore maneiras de
          maximizar seu crescimento pessoal.
        </p>
      </div>
      <div className="flex flex-col items-center justify-between w-8/12 md:w-1/3 mt-4">
        <Input
          color="primary"
          errorMessage="É necessário seu nome para avançar"
          label="Digite seu nome"
          placeholder="José Silva"
          type="name"
          value={nome}
          variant="underlined"
          onChange={(e) => setNome(e.target.value)}
        />
        <Button
          className="w-full font-semibold mt-4"
          color="primary"
          isDisabled={!nome}
          onClick={calcularNumerologia}
        >
          Calcular
        </Button>
      </div>
      {!resultado ? null : loading ? (
        <div>Carregando...</div>
      ) : (
        <div
          key={resultado.id}
          className="bg-secondary bg-opacity-60 w-11/12 lg:w-2/3 mx-auto text-center mb-10 p-10 rounded"
        >
          <div className="flex flex-col">
            <div className="flex flex-row items-center justify-center gap-4 mb-4">
              <p style={{ fontSize: 22, fontWeight: 800 }}>{resultado.title}</p>
            </div>
            <div className="flex flex-row text-justify mb-4">
              <p style={{ fontSize: 20 }}>{resultado.description}</p>
            </div>
            <div className="flex flex-col text-left mb-4">
              <p className="font-semibold mb-2">Pontos Positivos:</p>
              <ul className="list-disc ml-6">
                {resultado.pontos_positivos.map((ponto, index) => (
                  <li key={index} className="mb-1">
                    {ponto}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col text-left mb-4">
              <p className="font-semibold mb-2">Pontos Negativos:</p>
              <ul className="list-disc ml-6">
                {resultado.pontos_negativos.map((ponto, index) => (
                  <li key={index} className="mb-1">
                    {ponto}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col text-left">
              <p className="font-semibold mb-2">Influências na Vida:</p>
              <ul className="list-disc ml-6">
                <li>
                  <strong>Carreira:</strong> {resultado.influencias.carreira}
                </li>
                <li>
                  <strong>Relacionamentos:</strong>{" "}
                  {resultado.influencias.relacionamentos}
                </li>
                <li>
                  <strong>Desenvolvimento Pessoal:</strong>{" "}
                  {resultado.influencias.desenvolvimento_pessoal}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
