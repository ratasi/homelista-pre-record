"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

import { ButtonPrimary } from "@/components/Shared";
import { Input } from "@/components/ui/input";

import { SearchInputProps } from "./SearchInput.types";
import { toast } from "sonner";

export function SearchInput(props: SearchInputProps) {
  const { searchProvince, setSearchProvince, actionType, propertyType } = props;

  const router = useRouter();
  const onSearch = () => {
    if (!searchProvince) {
      toast("Debes añadir una localidad para buscar.");
    } else {
      const cleanProvince = searchProvince
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-");
      router.push(`/busqueda/${actionType}/${propertyType}/${cleanProvince}`);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 w-full">
      <div className="relative w-full md:w-[350px]">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4d4d4c] h-5 w-5" />
        <Input
          className="w-full bg-white rounded-none border border-[#cbccc7] text-[#4d4d4c] !text-xl h-[46px] pl-10 placeholder:text-xl"
          placeholder="Municipio, barrio, metro..."
          value={searchProvince}
          onChange={(e) => setSearchProvince(e.target.value)}
        />
      </div>

      <ButtonPrimary text="Buscar" className="h-[46px]" onClick={onSearch} />
    </div>
  );
}
