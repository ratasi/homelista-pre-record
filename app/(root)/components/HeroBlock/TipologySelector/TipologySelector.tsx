import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { dataTipologyTypes } from "./TipologySelector.data";

export function TipologySelector() {
  const defaultValue = "Viviendas";

  return (
    <div className="w-full md:w-auto">
      <Select defaultValue={defaultValue}>
        <SelectTrigger className="!h-[46px] md:w-[192px] border border-[#cbccc7] px-3 rounded-none text-[#4d4d4c] font-extrabold text-lg bg-white box-border w-full">
          <SelectValue placeholder="Viviendas" className="h-[46px]" />
        </SelectTrigger>
        <SelectContent className="h-full">
          {dataTipologyTypes.map((tipology) => (
            <SelectItem key={tipology.value} value={tipology.value}>
              {tipology.value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
