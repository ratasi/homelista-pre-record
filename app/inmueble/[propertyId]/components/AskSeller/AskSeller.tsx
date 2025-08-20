import { Button } from "@/components/ui/button";
import { MessageSquareMore, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function AskSeller() {
  return (
    <div className="mt-4 border-t-4 border-[#b62682] shadow-lg h-fit sticky top-10 ">
      <div className="bg-white p-6">
        <h3 className="text-xl text-center font-extrabold mb-3">
          Pregunta al anunciante
        </h3>
        <div className="p-4 border mb-3">
          Hola, me interesa este inmueble y me gustaría hacer una visita. Un
          saludo
        </div>

        <Button className="bg-[#b62682] text-white rounded-none w-full text-lg font-semibold">
          <MessageSquareMore strokeWidth={3} />
          Contactar por chat
        </Button>
      </div>
      <div className="p-4">
        <Link
          href={`telto:1234`}
          target="_blank"
          className="flex items-center gap-2 text-[#145bc7] font-bold hover:underline text-xl"
        >
          <Phone />
          Ver teléfono
        </Link>

        <p className="text-[#6f6f6d] mt-4 text-lg">Referencia del anuncio</p>
        <p className="text-lg">1234</p>
        <p className="text-[#6f6f6d] mt-4 text-lg">Profesional</p>
        <p className="text-lg">INMOBILIARIA </p>
      </div>
      <div className="border-t p-4">
        <div className="flex gap-5 justify-between">
          <div className="text-lg">
            <Link href="#" className="text-[#145bc7]">
              Inmobiliaria
            </Link>
            <p>Valencia</p>
          </div>
          <div>
            <Image
              src="/real-state.jpg"
              alt="Imagen de la inmobiliaria"
              width={100}
              height={60}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
