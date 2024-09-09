import { DeckBanner } from "@/components/deck-banner";

export default function BlogPage() {
  return (
    <div className="w-screen">
      <DeckBanner
        description="Todos os serviços de Tarot"
        height={20}
        title={"Blog"}
      />
    </div>
  );
}
