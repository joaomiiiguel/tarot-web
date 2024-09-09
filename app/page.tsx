import { CalcTarotBanner } from "@/components/calc-banner";
import { BlogSection } from "@/components/home/blog-section";
import ClientsSection from "@/components/home/clients-section";
import { ShopSection } from "@/components/home/shop-section";
import StatusSection from "@/components/home/status-section";
import { PrimaryMenuList } from "@/components/primary-menu";

export default function Home() {
  return (
    <section className="w-screen">
      <section className="w-full flex items-center justify-between py-3 min-h-[50vh] relative bg-[url('/bg-BannerHome.webp')]">
        <div className="w-full flex items-center justify-center">
          <p className="text-3xl font-customFont">
            Você quer saber mais <br /> sobre seu destino?
          </p>
        </div>
      </section>
      <section className="w-[80%] mx-auto">
        <PrimaryMenuList />
      </section>
      <section className="bg-gradient-to-r from-[#AB7EB7] to-[#CD81B1] px-[10%]">
        <CalcTarotBanner />
      </section>
      <section className="w-[80%] mx-auto py-10">
        <BlogSection />
      </section>
      <section className="bg-gradient-to-r from-[#AB7EB7] to-[#CD81B1] px-[10%] py-10">
        <ShopSection />
      </section>
      <section className="w-[80%] mx-auto py-10">
        <StatusSection />
      </section>
      <section className="bg-gradient-to-r from-[#AB7EB7] to-[#CD81B1] px-[10%] py-10">
        <ClientsSection />
      </section>
    </section>
  );
}
