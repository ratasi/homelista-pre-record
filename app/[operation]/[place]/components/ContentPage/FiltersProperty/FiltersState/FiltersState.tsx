import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function FiltersState() {
  return (
    <div className="mt-5">
      <h4 className="text-lg font-semibold mb-2">Tamaño</h4>

      <div className="flex items-center gap-3 mt-3">
        <Checkbox id="new" />
        <Label htmlFor="new" className="text-lg">
          Obra nueva
        </Label>
      </div>
      <div className="flex items-center gap-3 mt-3">
        <Checkbox id="good" />
        <Label htmlFor="good" className="text-lg">
          Buen estado
        </Label>
      </div>
      <div className="flex items-center gap-3 mt-3">
        <Checkbox id="reform" />
        <Label htmlFor="reform" className="text-lg">
          A reformar
        </Label>
      </div>
    </div>
  );
}
