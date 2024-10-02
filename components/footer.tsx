import { Icon } from "@iconify/react";
import { Link } from "@nextui-org/link";

import { siteConfig } from "@/config/site";

const Footer = () => {
  const linksTarot = [
    {
      name: "Tarot do dia",
      link: siteConfig.links.tarotDia,
    },
    {
      name: "Calculadora de Tarot",
      link: siteConfig.links.calcTarot,
    },
    {
      name: "Combinações",
      link: siteConfig.links.combinacoes,
    },
  ];
  const linksAstrologia = [
    {
      name: "Céu do Momento",
      link: siteConfig.links.ceuMomento,
    },
    {
      name: "Calendário Lunar",
      link: siteConfig.links.calendarioLunar,
    },
  ];
  const linksNumerologia = [
    {
      name: "Numerologia do nome",
      link: siteConfig.links.numerologiaNome,
    },
  ];
  const linksLinks = [
    {
      name: "Quem somos",
      link: siteConfig.links.about,
    },
    {
      name: "Política de Privacidade",
      link: siteConfig.links.privacyPolicy,
    },
  ];

  return (
    <footer className="w-[80%] mx-auto flex flex-col items-center justify-between py-10 gap-10 border-t-1 border-primary">
      <div className="flex flex-col md:flex-row  justify-between w-full gap-10">
        <div className="flex flex-col md:flex-row gap-10">
          <div>
            <Link href={siteConfig.links.tarotHome}>
              <h4 className="text-medium md:text-lg font-bold">Tarot</h4>
            </Link>
            <div className="flex flex-col">
              {linksTarot.map((item) => (
                <Link key={item.name} href={item.link}>
                  <p className="text-small md:text-medium">{item.name}</p>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <Link href={siteConfig.links.astrologiaHome}>
              <h4 className="text-medium md:text-lg font-bold">Astrologia</h4>
            </Link>
            <div className="flex flex-col">
              {linksAstrologia.map((item) => (
                <Link key={item.name} href={item.link}>
                  <p className="text-small md:text-medium">{item.name}</p>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <Link href={siteConfig.links.numerologiaHome}>
              <h4 className="text-medium md:text-lg font-bold">Numerologia</h4>
            </Link>
            <div className="flex flex-col">
              {linksNumerologia.map((item) => (
                <Link key={item.name} href={item.link}>
                  <p className="text-small md:text-medium">{item.name}</p>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-medium md:text-lg font-bold">Links</h4>
            <div className="flex flex-col">
              {linksLinks.map((item) => (
                <Link key={item.name} href={item.link}>
                  <p className="text-small md:text-medium">{item.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-bold">Redes Sociais</h4>
          <ul className="flex space-x-4">
            <li>
              <Link href="#">
                <Icon fontSize={20} icon={"mdi:youtube"} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Icon fontSize={20} icon={"mdi:facebook"} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Icon fontSize={20} icon={"mdi:instagram"} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Icon fontSize={20} icon={"prime:twitter"} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row justify-between w-full text-primary">
        <span className="text-xs sm:text-sm">
          Damanda @ 2024. Todos direitos reservados.
        </span>
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="#"
          title="nextui.org homepage"
        >
          <span className="text-xs sm:text-sm">Desenvolvidor por</span>
          <p className="text-primary text-xs sm:text-sm">Agência Lapê</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
