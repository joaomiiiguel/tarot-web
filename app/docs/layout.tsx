"use client";
import { useEffect, useState } from "react";

import cartas from "../../database/teste.json";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [fileContent, setFileContent] = useState("");

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = async (e) => {
      const result = e.target?.result;
      if (typeof result === "string") {
        const dataLines = result.split("\r\n");
        console.log("Loading...");

        const data: { id: string; name: string; description: string }[] = [];

        console.log(cartas.length);

        await cartas.map((carta: { name: any; id: any }) => {
          const searchTerm = carta.name;

          let foundDescription = "";
          let isCartaFound = false;

          for (let i = 0; i < dataLines.length; i++) {
            const line = dataLines[i];
            if (line.includes(searchTerm)) {
              isCartaFound = true;
            } else if (isCartaFound && line.trim() === "") {
              break;
            } else if (isCartaFound) {
              foundDescription += line + " ";
            }
          }
          if (foundDescription) {
            const resultCard = {
              id: carta.id,
              name: carta.name,
              description: foundDescription.trim(),
            };
            data.push(resultCard);
          }
        });

        console.log(data);

        setFileContent(JSON.stringify(data));
      }
    };

    reader.readAsText(file);
  };

  useEffect(() => {
    console.log(cartas.length);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <input type="file" accept=".txt" onChange={handleFileUpload} />
        <pre>{fileContent}</pre>
      </div>
    </section>
  );
}
