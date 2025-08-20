import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function FilterPrice() {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-2">Precio</h4>
      <div className="grid grid-cols-2 gap-5">
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Min" />
          </SelectTrigger>

          <SelectContent className="z-[1000]">
            <SelectItem value="60000">60.000</SelectItem>
            <SelectItem value="80000">80.000</SelectItem>
            <SelectItem value="100000">100.000</SelectItem>
            <SelectItem value="120000">120.000</SelectItem>
            <SelectItem value="140000">140.000</SelectItem>
            <SelectItem value="160000">160.000</SelectItem>
            <SelectItem value="180000">180.000</SelectItem>
            <SelectItem value="200000">200.000</SelectItem>
            <SelectItem value="220000">220.000</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Max" />
          </SelectTrigger>

          <SelectContent className="z-[1000]">
            <SelectItem value="60000">60.000</SelectItem>
            <SelectItem value="80000">80.000</SelectItem>
            <SelectItem value="100000">100.000</SelectItem>
            <SelectItem value="120000">120.000</SelectItem>
            <SelectItem value="140000">140.000</SelectItem>
            <SelectItem value="160000">160.000</SelectItem>
            <SelectItem value="180000">180.000</SelectItem>
            <SelectItem value="200000">200.000</SelectItem>
            <SelectItem value="220000">220.000</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
