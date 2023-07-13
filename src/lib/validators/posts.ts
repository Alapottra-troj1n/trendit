import { string, z } from "zod";

export const postValidator = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be longer then 3 characters" })
    .max(128, { message: "Title must be under 128 characters" }),
  subredditId: string(),
  content: z.any(),
});

export type PostCreationRequest = z.infer<typeof postValidator>
