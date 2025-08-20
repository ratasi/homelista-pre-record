"use client";
import { MapPin, Image as ImageLucide } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import dynamic from "next/dynamic";

const MapSearch = dynamic(
  () => import("@/components/Shared/MapSearch/MapSearch"),
  {
    ssr: false,
  }
);

export function SubSlider() {
  return (
    <div className="mt-4 flex gap-4">
      <div className="py-1.5 px-2 border border-[#4d4d4c] w-fit flex font-semibold items-center gap-1 hover:border-[#b62682] hover:text-[#b62682] hover:bg-[#fff0f9]">
        <ImageLucide className="w-6 h-6" />
        16 fotos
      </div>
      <Dialog>
        <DialogTrigger>
          <div className="py-1.5 px-2 border border-[#4d4d4c] w-fit flex font-semibold items-center gap-1 hover:border-[#b62682] hover:text-[#b62682] hover:bg-[#fff0f9]">
            <MapPin className="w-6 h-6" />
            Mapa
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle hidden />
            <DialogDescription asChild>
              <MapSearch />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
