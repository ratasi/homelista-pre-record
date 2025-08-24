"use client";
import Image from "next/image";
import axios from "axios";

import { ButtonPrimary } from "@/components/Shared";

import { SummaryProps } from "./Summary.types";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function Summary(props: SummaryProps) {
  const { formProperty } = props;
  const router = useRouter();

  const onPublish = async () => {
    try {
      await axios.post("/api/property", formProperty);

      toast("Inmueble subido");
      router.push("/usuario/tus-anuncios");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="space-y-6">
      {/* Encabezado */}
      <div>
        <h2 className="text-2xl font-bold">Revisa tu anuncio</h2>
        <p className="text-gray-600">
          Confirma que los datos son correctos antes de publicarlo
        </p>
      </div>

      {/* Bloque datos básicos */}
      <div className="p-4 border rounded-xl shadow-sm bg-white">
        <h3 className="font-semibold text-lg mb-2">Datos básicos</h3>
        <p>
          <span className="font-medium">Tipología:</span>{" "}
          {formProperty.tipology}
        </p>
        <p>
          <span className="font-medium">Operación:</span>{" "}
          {formProperty.operation}
        </p>
        <p>
          <span className="font-medium">Ubicación:</span>{" "}
          {formProperty.location}, {formProperty.streetName}{" "}
          {formProperty.streetNumber}
        </p>
      </div>

      {/* Bloque características */}
      <div className="p-4 border rounded-xl shadow-sm bg-white">
        <h3 className="font-semibold text-lg mb-2">Características</h3>
        <ul className="grid grid-cols-2 gap-2 text-gray-700">
          <li>
            <span className="font-medium">Metros construidos:</span>{" "}
            {formProperty.buildMeters || "-"} m²
          </li>
          <li>
            <span className="font-medium">Metros útiles:</span>{" "}
            {formProperty.utilsMeters || "-"} m²
          </li>
          <li>
            <span className="font-medium">Habitaciones:</span>{" "}
            {formProperty.rooms || "-"}
          </li>
          <li>
            <span className="font-medium">Baños:</span>{" "}
            {formProperty.bathrooms || "-"}
          </li>
          <li>
            <span className="font-medium">Estado:</span>{" "}
            {formProperty.stateHouse}
          </li>
          <li>
            <span className="font-medium">Certificado energético:</span>{" "}
            {formProperty.energyCertificate}
          </li>
        </ul>
      </div>

      {/* Bloque precio */}
      <div className="p-4 border rounded-xl shadow-sm bg-white">
        <h3 className="font-semibold text-lg mb-2">Precio</h3>
        <p className="text-2xl font-bold text-green-600">
          {formProperty.price ? `${formProperty.price} €` : "-"}
        </p>
      </div>

      {/* Bloque imágenes */}
      {formProperty.images && formProperty.images.length > 0 && (
        <div className="p-4 border rounded-xl shadow-sm bg-white">
          <h3 className="font-semibold text-lg mb-2">Imágenes</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {formProperty.images.map((img, i) => (
              <div
                key={i}
                className="relative w-full h-40 rounded-lg overflow-hidden"
              >
                <Image
                  src={img.url || ""}
                  alt={`Imagen ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-center">
        <ButtonPrimary text="Publicar anuncio" onClick={onPublish} />
      </div>
    </div>
  );
}
