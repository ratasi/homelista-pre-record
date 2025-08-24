import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

export function SaveSearch() {
  return (
    <div className="px-6 py-4 bg-[#e1f56e]">
      <h3 className="text-center font-semibold text-lg mb-3">
        Nuevos anuncios en tu email
      </h3>
      <Button className="bg-[#b62682] text-white rounded-none w-full text-lg font-semibold">
        <Bell fill="white" />
        Guardar búsqueda
      </Button>
    </div>
  );
}
