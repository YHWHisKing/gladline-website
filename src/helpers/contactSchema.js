import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(3, "Full name is required"),
  address: z.string().min(3, "Address is required"),
  city: z.coerce.number().min(5, "City is required"),

  phone: z
    .string()
    .min(1, "Phone is required")
    .regex(/^[0-9]+$/, "Phone must contain only numbers"),

  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),

  residence: z.string().min(1, "Please select residence type"),

  bedrooms: z.coerce.number().min(1, "At least 1 bedroom required"),

  bathrooms: z.coerce.number().min(1, "At least 1 bathroom required"),

  rooms: z.array(z.string()).min(1, "Please select room/s"),

  frequency: z.string().min(1, "Please select frequency"),

  service: z.array(z.string()).min(1, "Please select service/s"),

  propertySize: z.coerce.number().min(1, "Property size is required"),

  paymentMethod: z.string().min(1, "Please select payment method"),
});
