import { z } from "zod";

export const productSchema = z.object({
  name: z.string({ message: "name should be a string" }).min(4),
  image: z.instanceof(File, { message: "image should be a file" }),
  description: z.string({ message: "description should be a string" }).min(4),
  price: z.number({ message: "price should be a valid number" }),
});
 