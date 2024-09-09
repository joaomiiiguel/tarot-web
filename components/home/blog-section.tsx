import Link from "next/link";

export const BlogSection = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row items-center justify-between">
        <p className="text-2xl font-bold">Blog</p>
        <Link href={"/blog"}>Ver mais</Link>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="flex flex-row gap-5 bg-primary rounded p-2"
          >
            <div className="bg-secondary w-1/2 h-[150px]">Img</div>
            <div className="flex flex-col gap-4 text-secondary ">
              <p className="text-lg font-bold">10 Home Decor Ideas</p>
              <p>Transform your space with these simple tips</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
