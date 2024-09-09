import { DeckBanner } from "@/components/deck-banner";
import { TarotOnline } from "@/components/tarot-online";

export default function CalcTarotPage() {
  return (
    <section className="w-screen flex flex-col items-center justify-center gap-8">
      <DeckBanner title={"Calculadora de Tarot"} />
      <TarotOnline />
    </section>
  );
}
