import { Button } from "@/components/ui/button";
import { Forward, Heart, Trash } from "lucide-react";

export function Actions() {
  return (
    <div className="mt-6 flex flex-col md:flex-row gap-6">
      <Button
        variant="ghost"
        className="bg-[#e5e6e1] text-[#141414] border border-[#a3a3a0]  rounded-none text-lg"
      >
        <Heart strokeWidth={3} /> Guardar favorito
      </Button>

      <Button variant="ghost" className="text-lg text-[#145bc7]">
        <Trash strokeWidth={3} /> Descartar
      </Button>

      <Button variant="ghost" className="text-lg text-[#145bc7]">
        <Forward strokeWidth={3} /> Compartir
      </Button>
    </div>
  );
}
