import { DeckBanner } from "@/components/deck-banner";

export default function AboutPage() {
  return (
    <div className="w-screen">
      <DeckBanner
        description="Todos os serviços de Tarot"
        height={20}
        title={"Quem somos"}
      />
    </div>
  );
}
