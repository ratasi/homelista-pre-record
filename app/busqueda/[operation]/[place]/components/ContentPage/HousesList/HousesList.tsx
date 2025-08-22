import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { dataHousesList } from "./HousesList.data";
import { HouseListFooter } from "./HouseListFooter";
import { InfoHouse } from "./InfoHouse";
import { useRouter } from "next/navigation";

export function HousesList() {
  const router = useRouter();

  const showInfoHouse = (id: number) => {
    router.push(`/inmueble/${id}`);
  };

  return (
    <div>
      {dataHousesList.map(
        ({
          id,
          images,
          title,
          rooms,
          meters,
          floor,
          price,
          elevator,
          description,
          phone,
        }) => (
          <div
            key={id}
            onClick={() => showInfoHouse(id)}
            className="flex flex-col md:flex-row w-full cursor-pointer"
          >
            <div className="max-w-xl relative">
              <Carousel className="max-w-[350px]">
                <CarouselContent className="max-w-[350px]">
                  {images.map((img, i) => (
                    <CarouselItem key={i}>
                      <Image
                        src={img}
                        alt={`${title} ${i + 1}`}
                        width={340}
                        height={280}
                        className="w-full h-[280px] object-cover"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full shadow-md" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full shadow-md" />
              </Carousel>
            </div>
            <div className="bg-white w-full">
              <div className="flex flex-col justify-between h-full p-4">
                <InfoHouse
                  description={description}
                  title={title}
                  price={price}
                  rooms={rooms}
                  meters={meters}
                  floor={floor}
                  elevator={elevator}
                />

                <HouseListFooter houseId={id} phone={phone} />
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
