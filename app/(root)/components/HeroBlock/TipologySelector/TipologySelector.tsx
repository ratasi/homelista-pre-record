import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { dataTipologyTypes } from "@/models/tipology.data";
import { TipologySelectorProps } from "./TipologySelector.types";

export function TipologySelector(props: TipologySelectorProps) {
  const { setPropertyType } = props;

  return (
    <div className="w-full md:w-auto">
      <Select
        onValueChange={(val) => {
          const normalized = val.toLowerCase().trim().replace(/\s+/g, "-");
          setPropertyType(normalized);
        }}
      >
        <SelectTrigger className="!h-[46px] md:w-[192px] border border-[#cbccc7] px-3 rounded-none text-[#4d4d4c] font-extrabold text-lg bg-white box-border w-full">
          <SelectValue placeholder="Viviendas" className="h-[46px]" />
        </SelectTrigger>
        <SelectContent className="h-full">
          {dataTipologyTypes.map((tipology) => (
            <SelectItem
              key={tipology.value}
              value={tipology.value.toLowerCase().trim().replace(/\s+/g, "-")}
            >
              {tipology.value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
