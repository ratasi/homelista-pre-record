"use client";

import { useState } from "react";

import { TipologySelector } from "./TipologySelector";
import { SearchInput } from "./SearchInput";
import { PropertiesTabs } from "./PropertiesTabs";

export function HeroBlock() {
  const [actionType, setActionType] = useState<
    "comprar" | "alquilar" | "compartir"
  >("comprar");
  const [propertyType, setPropertyType] = useState<string>("viviendas");
  const [searchProvince, setSearchProvince] = useState("");

  return (
    <section className="bg-[url('/bg-hero.webp')] bg-cover py-5 md:px-20 md:py-36 flex items-center justify-center">
      <div className="bg-[#E1F56E] px-10 py-5 max-w-6xl mx-auto w-full">
        <h2 className="text-3xl font-extrabold text-center">
          No puedo dejar de mirar
        </h2>

        <div className="pt-7 pb-5">
          <div className="flex flex-col md:flex-row gap-5 items-center md:max-h-[46px]">
            <PropertiesTabs
              actionType={actionType}
              setActionType={setActionType}
            />

            <TipologySelector setPropertyType={setPropertyType} />

            <SearchInput
              searchProvince={searchProvince}
              setSearchProvince={setSearchProvince}
              propertyType={propertyType}
              actionType={actionType}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
