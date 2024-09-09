import Link from "next/link";

export const ShopSection = () => {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-secondary text-2xl font-bold">Shop</p>

      <div className="flex flex-row gap-5">
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="flex flex-col bg-secondary rounded overflow-hidden w-full"
          >
            <div className="bg-primary text-secondary w-full h-[150px]">
              Image
            </div>
            <div className="flex flex-col gap-4 text-primary p-4 ">
              <p>Mystic Moon Tarot</p>
              <p className="text-lg font-bold">R$35</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
