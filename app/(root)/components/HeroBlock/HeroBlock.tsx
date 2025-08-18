import { TipologySelector } from "./TipologySelector";
import { SearchInput } from "./SearchInput";

export function HeroBlock() {
  return (
    <section className="bg-[url('/bg-hero.webp')] bg-cover py-5 md:px-20 md:py-36 flex items-center justify-center">
      <div className="bg-[#E1F56E] px-10 py-5 max-w-6xl mx-auto w-full">
        <h2 className="text-3xl font-extrabold text-center">
          No puedo dejar de mirar
        </h2>

        <div className="pt-7 pb-5">
          <div className="flex flex-col md:flex-row gap-5 items-center md:max-h-[46px]">
            <div className="flex h-full">
              <span className="border-[#b62682] border-2 py-1.5  px-3 rounded-none text-[#b62682] font-extrabold text-lg bg-[#fff0f9] flex items-center justify-center">
                Comprar
              </span>
              <span className="border border-[#cbccc7] py-1.5  px-3 rounded-none text-[#4d4d4c] font-extrabold text-lg bg-white box-border hover:border-[#b62682]">
                Alquilar
              </span>
              <span className="border border-[#cbccc7] py-1.5 px-3 rounded-none text-[#4d4d4c] font-extrabold text-lg bg-white box-border hover:border-[#b62682]">
                Compartir
              </span>
            </div>

            <TipologySelector />

            <SearchInput />
          </div>
        </div>
      </div>
    </section>
  );
}
