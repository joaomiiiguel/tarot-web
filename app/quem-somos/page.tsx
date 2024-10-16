"use client";

import { useState } from "react";

import { DeckBanner } from "@/components/deck-banner";

export default function AboutPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Lógica para envio do formulário, como enviar para uma API ou serviço de e-mail.

    console.log("Dados enviados:", formData);
  };

  return (
    <div className="w-screen">
      <DeckBanner height={20} title={"Quem somos"} />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <p className="w-1/2 text-lg text-center mb-8 mx-auto">
            Somos uma empresa comprometida em oferecer os melhores serviços de
            ecoturismo, conectando pessoas à natureza e promovendo experiências
            inesquecíveis. Nossa missão é cuidar do meio ambiente, preservá-lo e
            proporcionar aventuras com segurança e respeito à biodiversidade.
          </p>
        </div>
      </section>

      <section className=" py-8">
        <div className="container mx-auto px-4 max-w-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Entre em Contato
          </h2>
          <form
            onSubmit={handleSubmit}
            className="bg-white bg-opacity-20 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="nome">
                Nome
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="nome"
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Seu nome"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="email">
                E-mail
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Seu e-mail"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="mensagem"
              >
                Mensagem
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                placeholder="Escreva sua mensagem"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
