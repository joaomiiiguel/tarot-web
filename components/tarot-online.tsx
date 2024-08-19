"use client";

import { SetStateAction, useEffect, useState } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import {
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { CardTarot } from "./card-tarot";

export const TarotOnline = () => {
  const [step, setStep] = useState<number>(1);
  const [nameUser, setName] = useState<string | undefined>(undefined);
  const [cardSelected, setCardSelected] = useState<number | undefined>(
    undefined
  );
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [hovered, setHovered] = useState<null | number>(null);

  const handleMouseEnter = (item: number) => setHovered(item);

  const handleSelectedCard = (item: number) => {
    onOpen();
    const number = Math.floor(Math.random() * 20) + 1;
    console.log("Carta Selecionada:", number);
    setCardSelected(number);
  };

  const handleMouseLeave = () => setHovered(null);

  useEffect(() => {}, [cardSelected]);

  return (
    <div className="flex flex-col w-full h-[70vh] bg-secondary rounded">
      {/* <div className="w-full h-fit items-center justify-center  bg-primary rounded">
        <div className="flex justify-center flex-row gap-5 items-center py-3">
          <div className="bg-secondary flex items-center justify-center rounded-full w-8 h-8">
            1
          </div>
          <div className="bg-secondary flex items-center justify-center rounded-full w-8 h-8">
            2
          </div>
          <div className="bg-secondary flex items-center justify-center rounded-full w-8 h-8">
            3
          </div>
        </div>
      </div> */}
      <div className="w-full py-2 items-center justify-center  bg-primary rounded">
        <p className="text-secondary uppercase font-bold text-center">Tarot do dia</p>
      </div>

      {step === 1 ? (
        <div className="flex-1 flex-col gap-8 flex items-center justify-center mb-16">
          <div className="flex flex-col items-center justify-between w-1/3 mt-20 mb-4">
            <Input
              value={nameUser}
              onChange={(e) => setName(e.target.value)}
              color="primary"
              variant="underlined"
              type="name"
              placeholder="Digite seu nome"
            />
            <Button
              color="primary"
              className="w-full font-semibold mt-16"
              onClick={() => {
                setStep(2);
              }}
              disabled={nameUser === undefined}
            >
              Embaralhar Cartas
            </Button>
          </div>
          <div className="flex flex-col justify-center">
            <Image
              alt="Woman listing to music"
              height={190}
              src="/GroupCartas.png"
              width={130}
            />
          </div>
        </div>
      ) : step === 2 ? (
        <div className="flex-col gap-8 flex items-center justify-between w-full mt-16">
          <p>Escolha sua carta:</p>
          <div className="flex flex-row relative justify-center w-full ">
            {[
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20, 21,
            ].map((item) => (
              <div
                key={item}
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                <CardTarot
                  key={item}
                  onPressCard={() => handleSelectedCard(item)}
                  cardStyle={{
                    position: "absolute",
                    transition: "transform 0.5s",
                    zIndex: item,
                    height: 200,
                    width: 110,
                    left: item * 40,
                    transform:
                      hovered === item
                        ? "translateY(-10px)"
                        : "translateY(0px)",
                    boxShadow:
                      hovered === item
                        ? "0 8px 16px rgba(0, 0, 0, 0.2)"
                        : "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex-1 flex-col gap-8 flex items-center justify-center mb-16">
          <p>Step 3</p>
        </div>
      )}

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="5xl"
        className="bg-primary text-secondary"
        scrollBehavior="inside"
        isDismissable={false}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-bold">
                Sua carta de hoje é:
              </ModalHeader>
              <ModalBody className="flex flex-row justify-between align-center">
                <div className="flex flex-col w-1/3 justify-center align-top">
                  <Image
                    alt="Woman listing to music"
                    className="object-cover w-[220px]"
                    src="/carta1.png"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <p className="font-semibold mb-2">
                    {nameUser},
                  </p>
                  <p className="h-60 overscroll-contain">
                    O Louco é o começo e o fim, o alpha e o omega do tarô. Ele é
                    o viajante eterno, sempre pronto para embarcar em uma nova
                    aventura com um espírito leve e aberto. O Louco é o vento
                    que sopra para onde quer que queira, trazendo consigo a
                    promessa de novos começos e a excitante incerteza do
                    desconhecido. Em uma leitura terapêutica, O Louco é um
                    convite para que você se desapegue das limitações que a vida
                    impôs sobre você. Ele te encoraja a abraçar o desconhecido
                    com o coração aberto e uma mente curiosa, para encontrar
                    alegria e aprendizado em todas as experiências, mesmo as
                    mais desafiadoras. O Louco te chama para a jornada, uma que
                    não é sempre linear, mas cheia de reviravoltas e surpresas.
                    Ele pede que você acredite em si mesmo, em seu poder
                    interior e em sua intuição. Ele te convida a sair da sua
                    zona de conforto e a abraçar a mudança, por mais assustadora
                    que possa parecer. Ele te diz: "Não tenha medo de errar.
                    Cada passo em falso é uma chance para aprender, crescer e se
                    tornar mais forte. Em cada erro, em cada queda, há uma lição
                    a ser aprendida. Não tenha medo de se arriscar, de sonhar
                    grande, de voar alto. Porque é na incerteza e na aventura
                    que encontramos a nós mesmos e descobrimos o que realmente
                    somos capazes de fazer." Então, meu querido amigo, aceite o
                    convite do Louco. Pegue essa mochila de sonhos, esperanças e
                    medos, e dê o salto. A jornada pode ser incerta, o caminho
                    pode ser sinuoso, mas as recompensas são inestimáveis.
                    Lembre-se, você tem a força, a coragem e a sabedoria para
                    enfrentar qualquer coisa que venha pela frente. Abrace a
                    aventura, celebre o desconhecido e permita que o Louco te
                    guie em sua jornada de autodescoberta e crescimento.
                  </p>
                </div>
              </ModalBody>
              <ModalFooter className="flex items-center mt-5">
                <p>Saiba mais sobre as cartas de tarot e suas combinações: </p>
                <Button
                  color="secondary"
                  variant="shadow"
                  onPress={() => {
                    onClose(), setStep(1);
                  }}
                >
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
