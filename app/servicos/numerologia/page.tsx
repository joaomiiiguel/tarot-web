"use client";

import { DeckBanner } from "@/components/deck-banner";

const NumerologiaPage = () => {
  return (
    <div className="w-screen">
      <DeckBanner
        description="Os números revelam mais do que você imagina!"
        height={20}
        title={"Numerologia"}
      />
    </div>
  );
};

export default NumerologiaPage;
