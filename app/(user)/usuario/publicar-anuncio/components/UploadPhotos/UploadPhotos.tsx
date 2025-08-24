"use client";

import { useState } from "react";
import Image from "next/image";
import { ClientUploadedFileData } from "uploadthing/types";

import { UploadButton } from "@/utils/uploadthing";

import { ButtonPrimary } from "@/components/Shared";

import { UploadPhotosProps } from "./UploadPhotos.types";

// type UploadedImage = ClientUploadedFileData<{ completed: boolean }>;
type UploadedImage = { url: string };
export function UploadPhotos(props: UploadPhotosProps) {
  const { formProperty, setFormProperty, setStep } = props;
  const [imagesProperty, setImagesProperty] = useState<UploadedImage[] | null>(
    formProperty.images
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mt-5 mb-3">
        Añadir fotos de tu inmueble
      </h2>

      <div className="border-dashed border-2 border-[#e5e6e1] p-10">
        <p>
          Arrastra y suelta tus fotos aquí o selecciónalas desde tu dispositivo
        </p>

        <Image
          src="/upload-images.png"
          alt="Upload images"
          width={600}
          height={400}
        />

        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            // setImagesProperty(res);
            // setFormProperty((prev) => ({
            //   ...prev,
            //   images: res,
            // }));
            const urls = res.map((file) => ({ url: file.ufsUrl }));

            setImagesProperty(res); // si quieres guardar localmente
            setFormProperty((prev) => ({
              ...prev,
              images: urls,
            }));
          }}
          onUploadError={() => {
            console.error("Ha ocurrido un error");
          }}
          className="bg-gray-300 p-4"
        />
      </div>

      {imagesProperty && (
        <div className="grid grid-cols-2 gap-2">
          {imagesProperty.map((image) => (
            <div key={image.url}>
              <Image src={image.url} alt="" width={400} height={400} />
            </div>
          ))}
        </div>
      )}

      {imagesProperty && (
        <div className="mt-10 flex items-center justify-center">
          <ButtonPrimary
            text="Siguiente paso"
            onClick={() => setStep((prev) => prev + 1)}
          />
        </div>
      )}
    </div>
  );
}
