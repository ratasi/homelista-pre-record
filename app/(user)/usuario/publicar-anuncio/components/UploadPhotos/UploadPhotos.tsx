"use client";

import { useState } from "react";
import Image from "next/image";
import { ClientUploadedFileData } from "uploadthing/types";

import { UploadButton } from "@/utils/uploadthing";

import { ButtonPrimary } from "@/components/Shared";

import { UploadPhotosProps } from "./UploadPhotos.types";

type UploadedImage = ClientUploadedFileData<{ completed: boolean }>;

export function UploadPhotos(props: UploadPhotosProps) {
  const { formProperty, setFormProperty, setStep } = props;
  const [imagesProperty, setImagesProperty] = useState<UploadedImage[] | null>(
    null
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
            setImagesProperty(res);
            setFormProperty((prev) => ({
              ...prev,
              images: res,
            }));
          }}
          onUploadError={() => {
            console.error("Ha ocurrido un error");
          }}
          className="bg-[#e5e6e1]"
        />
      </div>

      {imagesProperty && (
        <div className="grid grid-cols-2 gap-2">
          {imagesProperty.map((image) => (
            <div key={image.key}>
              <Image src={image.ufsUrl} alt="" width={400} height={400} />
            </div>
          ))}
        </div>
      )}

      <div className="mt-10 flex items-center justify-center">
        <ButtonPrimary
          text="Siguiente paso"
          onClick={() => setStep((prev) => prev + 1)}
        />
      </div>
    </div>
  );
}
