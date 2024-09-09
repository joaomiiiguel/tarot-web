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

import deckTarot from "./../database/cartas.json";
import { useRouter } from "next/navigation";

interface CardType {
  id: string;
  name: string;
  description: string;
}

export const TarotOnline = () => {
  const router = useRouter();
  const [step, setStep] = useState<number>(1);
  const [nameUser, setName] = useState<string | undefined>(undefined);
  const [isInvalidBtn, setIsInvalidBtn] = useState<boolean>(false);

  const [hovered, setHovered] = useState<null | number>(null);

  const numbersMaior = Array.from({ length: 21 }, (_, index) => index + 1);
  const numbersMenor = Array.from({ length: 56 }, (_, index) => index + 1);

  const [cardMaiorSelected, setCardMaiorSelected] = useState<
    CardType | undefined
  >(undefined);
  const [cardMenorSelected, setCardMenorSelected] = useState<
    CardType | undefined
  >(undefined);
  const [resultTarot, setResultTarot] = useState<CardType | undefined>(
    undefined
  );
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  const handleMouseEnter = (item: number) => setHovered(item);

  const handleSelectedMaiorCard = (item: number) => {
    const number = Math.floor(Math.random() * 22);
    console.log("Carta Selecionada:", number);
    setCardMaiorSelected(deckTarot[number]);
    setStep(3);
  };
  const handleSelectedMenorCard = async (item: number) => {
    const numeroAleatorio = Math.floor(Math.random() * (55 - 22 + 1)) + 22;
    console.log("Carta Selecionada:", numeroAleatorio);
    setCardMenorSelected(deckTarot[numeroAleatorio]);

    const result = `${cardMaiorSelected?.id}_${deckTarot[numeroAleatorio]?.id}`;

    console.log(result);

    const selected = deckTarot.filter((item: CardType) => item.id === result);

    setResultTarot(await selected[0]);

    onOpen();
  };

  const handleMouseLeave = () => setHovered(null);

  useEffect(() => {}, [cardMaiorSelected, cardMenorSelected, resultTarot]);

  return (
    <div className="flex flex-col w-[80%] min-h-[70vh] bg-secondary rounded pb-4">
      <div className="w-full py-2 items-center justify-center  bg-primary rounded">
        <p className="text-secondary uppercase font-bold text-center">
          Calculadora Tarot
        </p>
      </div>

      {step > 1 && (
        <div className="flex-row gap-8 flex items-center justify-around mt-6 w-1/2 mx-auto">
          <p>Arcana Maior:{cardMaiorSelected?.name}</p>
          <p>Arcana Menor:{cardMenorSelected?.name}</p>
        </div>
      )}

      {step === 1 ? (
        <div className="flex-1 flex-col gap-8 flex items-center justify-center mb-16">
          <div className="flex flex-col items-center justify-between w-1/3 mb-4">
            <Input
              value={nameUser}
              onChange={(e) => setName(e.target.value)}
              color="primary"
              variant="underlined"
              type="name"
              placeholder="Digite seu nome"
              isInvalid={isInvalidBtn}
              errorMessage="É necessário seu nome para avançar"
            />
            <Button
              color="primary"
              className="w-full font-semibold mt-16"
              onClick={() => {
                if (nameUser === undefined) {
                  setIsInvalidBtn(true);
                } else setStep(2);
              }}
              // disabled={nameUser === undefined}
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
          <p>Escolha sua carta de arcana maior:</p>
          <div className="flex flex-row relative justify-center w-full ">
            {numbersMaior.map((item) => (
              <div
                key={item}
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                <CardTarot
                  key={item}
                  onPressCard={() => handleSelectedMaiorCard(item)}
                  disabled={cardMaiorSelected !== undefined}
                  cardStyle={{
                    position: "absolute",
                    transition: "transform 0.5s",
                    zIndex: item,
                    height: 200,
                    width: 110,
                    left: item * 40,
                    transform:
                      cardMaiorSelected === undefined && hovered === item
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
        <div className="flex-col gap-8 flex items-center justify-between w-full mt-16">
          <p>Escolha sua carta de arcana menor:</p>
          <div className="grid px-4 gap-y-4 grid-cols-12 w-full">
            {numbersMenor.map((item) => (
              <div
                key={item}
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                <CardTarot
                  key={item}
                  onPressCard={() => handleSelectedMenorCard(item)}
                  disabled={cardMenorSelected !== undefined}
                  cardStyle={{
                    opacity: cardMenorSelected !== undefined ? 0.2 : 1,
                    transition: "transform 0.5s",
                    zIndex: item,
                    transform:
                      cardMenorSelected === undefined && hovered === item
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
      )}

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={() => {
          onClose(),
            setStep(1),
            setCardMaiorSelected(undefined),
            setCardMenorSelected(undefined);
        }}
        size="5xl"
        className="bg-primary text-secondary"
        scrollBehavior="inside"
        isDismissable={false}
        style={{ zIndex: 100 }}
      >
        <ModalContent>
          {() => (
            <>
              <div className="w-full py-2 items-center justify-center  bg-secondary rounded">
                <p className="text-primary uppercase font-bold text-center">
                  Resultado Calcuradora Tarot
                </p>
              </div>

              <ModalBody className="flex flex-col justify-between align-center">
                <p className="text-secondary font-bold text-center">
                  {nameUser}, sua escolha foi:
                </p>
                <div className="flex flex-row justify-around align-center">
                  <div className="flex flex-col justify-center align-center">
                    <p className="text-secondary font-bold text-center">
                      {cardMaiorSelected?.name}
                    </p>
                    <Image
                      alt="Woman listing to music"
                      className="object-cover w-[150px] border-4	border-secondary"
                      src={
                        `/deck/${cardMaiorSelected?.id}.jpg` ?? "/carta1.png"
                      }
                    />
                  </div>
                  <div className="flex flex-col justify-center align-top">
                    <p className="text-secondary font-bold text-center">
                      {cardMenorSelected?.name}
                    </p>
                    <Image
                      alt="Woman listing to music"
                      className="object-cover w-[150px] border-4	border-secondary"
                      src={`/deck/${cardMenorSelected?.id}.jpg`}
                    />
                  </div>
                </div>
                <div className="flex flex-col w-5/6 mx-auto h-60 overscroll-contain">
                  <p className="text-justify">{resultTarot?.description}</p>
                </div>
              </ModalBody>
              <ModalFooter className="w-2/3 mx-auto my-4 py-2 items-center justify-center  bg-secondary rounded">
                <p className="text-primary">
                  Saiba mais sobre as cartas de tarot e suas combinações:{" "}
                </p>
                <Button color="primary" onPress={() => router.push("/service")}>
                  Combinações
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
