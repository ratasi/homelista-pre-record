"use client";
import { ButtonPrimary, Navbar } from "@/components/Shared";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const fakeData = [
  {
    id: 1,
    urlImage: "/houses/1.webp",
    price: "69.000€",
    description:
      "Venta de oficina en avenida del País Valencià, 30, 1ª planta, Puerta A, Alaquás (Cod. 92183629)",
    meters: "35 m²",
    isActive: false,
  },
  {
    id: 2,
    urlImage: "/houses/2.jpg",
    price: "69.000€",
    description:
      "Venta de oficina en avenida del País Valencià, 30, 1ª planta, Puerta A, Alaquás (Cod. 92183629)",
    meters: "35 m²",
    isActive: false,
  },
];
export default function TusAnunciosPage() {
  const router = useRouter();

  const publishAd = () => {
    router.push("/usuario/publicar-anuncio");
  };

  return (
    <div className="w-full bg-[#F4F5F2] min-h-screen">
      <Navbar theme="yellow" />

      <div className="bg-white w-full py-5">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Tus anuncios</h1>

          <ButtonPrimary text="Publicar tu anuncio" onClick={publishAd} />
        </div>
      </div>

      <div className="max-w-2xl mx-auto mt-16">
        {fakeData.map((item) => (
          <div
            key={item.id}
            className="bg-white grid grid-cols-1 md:grid-cols-2 gap-2 shadow-md my-5"
          >
            <div className="flex items-center justify-center px-2">
              <Image
                src={item.urlImage}
                alt="Anuncio 1"
                width={300}
                height={400}
              />
            </div>
            <div className="py-10 px-5">
              {!item.isActive && (
                <div className="bg-gray-100 flex flex-col items-center gap-3 mb-3 p-2">
                  <p className="text-lg font-bold">Desactivado</p>
                  <p className="text-center">
                    Puedes reactivarlo comprando un periodo de publicación nuevo
                  </p>
                  <Button
                    className="bg-[#cbccc7] text-black border border-black rounded-none font-extrabold text-lg hover:text-white cursor-pointer"
                    size="lg"
                  >
                    Reactivar
                  </Button>
                </div>
              )}
              <h3 className="text-lg font-bold">
                {item.price} <span className="font-normal">{item.meters}</span>
              </h3>
              <p className="text-[#141414]">{item.description}</p>
              <div className="text-center mt-5">
                <Link
                  href={`/usuario/tus-anuncios/anuncio/${item.id}`}
                  className="text-2xl text-center font-bold text-blue-600"
                >
                  Gestionar anuncio
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
