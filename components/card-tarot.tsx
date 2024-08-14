import { Card, Image } from "@nextui-org/react";
import { CSSProperties } from "react";

type CardTarotTypes = {
  cardStyle?: CSSProperties;
};

export const CardTarot = ({ cardStyle }: CardTarotTypes) => {
  return (
    <Card
      radius="lg"
      className="border-none"
      shadow="sm"
      isPressable
      onPress={() => console.log("item pressed")}
      style={cardStyle}
    >
      <Image
        alt="Woman listing to music"
        className="object-cover" 
        height={190}
        src="/Carta.png"
        width={100}
      />
    </Card>
  );
};
