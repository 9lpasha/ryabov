import { z } from "zod";
import { authFormSchema } from "./constants";

export type AuthFormData = z.infer<typeof authFormSchema>;
