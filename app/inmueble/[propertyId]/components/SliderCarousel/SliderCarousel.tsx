"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function SliderCarousel() {
  const images = [
    "/houses/1.webp",
    "/houses/2.jpg",
    "/houses/3.jpg",
    "/houses/4.jpg",
    "/houses/5.jpg",
  ];

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className="relative w-full aspect-[4/3] max-h-[460px] cursor-pointer">
            <Image
              src="/houses/1.webp"
              alt="Imagen de la propiedad"
              className="object-cover"
              fill
            />
          </div>
        </DialogTrigger>

        <DialogContent className="max-w-7xl border-0 bg-black/90 p-0">
          <DialogTitle hidden />
          <div className="relative h-[calc(100vh-280px)] w-full overflow-hidden rounded-md">
            <Carousel className="w-full h-full ">
              <CarouselContent className="h-full">
                {images.map((img, i) => (
                  <CarouselItem
                    key={i}
                    className="flex items-center justify-center"
                  >
                    <div className="relative h-[calc(100vh-180px)] w-[800px]">
                      <Image
                        src={img}
                        alt={"Imagen"}
                        className="object-cover"
                        fill
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 rounded-full" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 rounded-full" />
            </Carousel>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
