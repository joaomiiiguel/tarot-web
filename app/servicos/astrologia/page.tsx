"use client";

import { DeckBanner } from "@/components/deck-banner";

const AstrologiaPage = () => {
  return (
    <div className="w-screen">
      <DeckBanner
        description="Descubra como os astros influenciam sua vida!"
        height={20}
        title={"Astrologia"}
      />
    </div>
  );
};

export default AstrologiaPage;
