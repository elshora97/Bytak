import * as z from "zod";
import { ZodSchema } from "zod";

export const profileSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First Name must be at least 2 Chs" }),
  lastName: z.string().min(2, { message: "Last Name must be at least 2 Chs" }),
  username: z.string().min(2, { message: "Username must be at least 2 Chs" }),
});

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  date: unknown
): T {
  const result = schema.safeParse(date);

  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);

    throw new Error(errors.join(","));
  }
  return result.data;
}

export const imageSchema = z.object({
  image: validateFile(),
});

function validateFile() {
  const maxUploadSize = 1024 * 1024;
  const acceptedFileTypes = ["image/"];
  return z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= maxUploadSize;
    }, `File size must be less than 1 MB`)
    .refine((file) => {
      return (
        !file || acceptedFileTypes.some((type) => file.type.startsWith(type))
      );
    }, "File must be an image");
}
