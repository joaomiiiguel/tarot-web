"use client";

import { useState } from "react";

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [fileContent, setFileContent] = useState("");

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      const result = e.target?.result;
      if (typeof result === "string") {
        setFileContent(result);
      }
    };

    reader.readAsText(file);
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-2">
      {children}
    </section>
  );
}
