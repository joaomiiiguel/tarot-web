const StatusSection = () => {
  const dados = [
    {
      name: "Happy customer",
      value: "250+",
    },
    {
      name: "Completed projects",
      value: "600+",
    },
    {
      name: "Available Resources",
      value: "1.8K+",
    },
    {
      name: "Subscribers",
      value: "11K+",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <p className="text-primary text-2xl font-bold">Nossos Dados</p>
      <div className="flex flex-col md:flex-row justify-around gap-8">
        {dados.map((card) => (
          <div
            key={card.name}
            className="w-full flex flex-row items-center justify-center text-center bg-secondary text-primary border-primary border-2 rounded py-4"
          >
            <div className="h-full w-1/3 bg-primary ml-4">imagem</div>
            <div className="flex flex-col items-center justify-center h-full w-2/3 pl-2">
              <p className="text-3xl font-bold">{card.value}</p>
              <p className="font-bold">{card.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusSection;
