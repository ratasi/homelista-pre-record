import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function RemoveFilters() {
  return (
    <div className="mt-2">
      <Button variant="ghost" className="w-full text-blue-700">
        <X width={8} height={8} />
        <span className="font-semibold text-lg">Eliminar filtros</span>
      </Button>
    </div>
  );
}
