import { z } from "zod";

export const formSchema = z.object({
  stateHouse: z.string().min(2).max(100),
  buildMeters: z.string().min(2).max(200),
  utilsMeters: z.string().min(2).max(200),
  rooms: z.string().min(2).max(200),
  bathrooms: z.string().min(2).max(200),
  energyCertificate: z.string().min(2).max(200),
  price: z.string().min(2).max(200),
});
