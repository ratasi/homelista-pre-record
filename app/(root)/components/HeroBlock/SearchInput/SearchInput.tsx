import { ButtonPrimary } from "@/components/Shared";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function SearchInput() {
  // TODO: Autocomplete with Google Places API

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 w-full">
      <div className="relative w-full md:w-[350px]">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4d4d4c] h-5 w-5" />
        <Input
          className="w-full bg-white rounded-none border border-[#cbccc7] text-[#4d4d4c] !text-xl h-[46px] pl-10 placeholder:text-xl"
          placeholder="Municipio, barrio, metro..."
        />
      </div>

      <ButtonPrimary text="Buscar" className="h-[46px]" />
    </div>
  );
}
