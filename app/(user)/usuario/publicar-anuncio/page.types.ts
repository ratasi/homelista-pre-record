import { ClientUploadedFileData } from "uploadthing/types";

export type FormType = {
  tipology: string;
  location: string;
  streetName: string;
  streetNumber: string;
  operation: "venta" | "alquiler";
  stateHouse: string;
  buildMeters: string;
  utilsMeters: string;
  rooms: string;
  bathrooms: string;
  energyCertificate: string;
  price: string;
  images: UploadedImage[];
};

// type UploadedImage = ClientUploadedFileData<{ completed: boolean }>;

type UploadedImage = {
  url: string;
};
