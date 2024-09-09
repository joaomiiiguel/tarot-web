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
      className="border-none z w-fit"
      isPressable={!disabled}
      radius="lg"
      shadow="sm"
      style={cardStyle}
      onPress={onPressCard}
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        src="/Carta.png"
      />
    </Card>
  );
};
