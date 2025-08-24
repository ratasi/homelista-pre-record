import { z } from "zod";

export const formSchema = z.object({
  stateHouse: z.string().min(2).max(100),
  buildMeters: z.string().min(2).max(200),
  utilsMeters: z.string().min(2).max(200),
  rooms: z.string(),
  bathrooms: z.string(),
  energyCertificate: z.string(),
  price: z.string().min(2).max(200),
});
