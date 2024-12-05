import { z } from "zod";
import { similarity } from "utils/similarity";

export const passwordSchema = z
  .string()
  .min(8, "Enter password. At least 8 characters")
  .regex(/[A-Z]/, "One or more capitalized letters")
  .regex(/\d|[@#$%^&*]/, "Contains a number or symbol");
export const authFormSchema = z
  .object({
    email: z.string().min(1, "Enter email").email("Wrong type of e-mail"),
    phone: z
      .string()
      .min(1, "Enter phone number")
      .regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"),
    password: passwordSchema,
    referralCode: z.string().optional(),
    acceptTerms: z.boolean().refine((val) => val, "You must accept the terms"),
  })
  .refine((data) => similarity(data.email, data.password) <= 20, {
    message: "Can't contain e-mail address",
    path: ["password"],
  });
