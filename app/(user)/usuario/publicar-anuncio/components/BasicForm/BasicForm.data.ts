import { z } from "zod";

export const formSchema = z.object({
  tipology: z.string().min(2).max(100),
  location: z.string().min(2).max(200),
  streetName: z.string().min(2).max(200),
  streetNumber: z.string().min(2).max(200),
  type: z.enum(["venta", "alquiler"], {
    message: "You need to select a notification type.",
  }),
});
