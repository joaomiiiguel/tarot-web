import { Card, Image } from "@nextui-org/react";
import { CSSProperties, MouseEventHandler } from "react";

type CardTarotTypes = {
  cardStyle?: CSSProperties;
  onPressCard: () => void;
};

export const CardTarot = ({ cardStyle, onPressCard }: CardTarotTypes) => {
  return (
    <Card
      radius="lg"
      className="border-none z w-fit"
      shadow="sm"
      isPressable
      onPress={onPressCard}
      style={cardStyle}
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        src="/Carta.png"
      />
    </Card>
  );
};
