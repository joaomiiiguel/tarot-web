import { Card, Image } from "@nextui-org/react";
import { CSSProperties, MouseEventHandler } from "react";

type CardTarotTypes = {
  cardStyle?: CSSProperties;
  disabled?: boolean
  onPressCard: () => void;
};

export const CardTarot = ({ cardStyle, disabled, onPressCard }: CardTarotTypes) => {
  return (
    <Card
      radius="lg"
      className="border-none z w-fit"
      shadow="sm"
      isPressable={!disabled}
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
