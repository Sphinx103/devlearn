import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().trim().min(2, "Le nom doit contenir au moins 2 caractères").max(50),
  email: z.string().trim().toLowerCase().email("Adresse email invalide").max(100),
  password: z
    .string()
    .min(8, "Le mot de passe doit contenir au moins 8 caractères")
    .regex(/[a-z]/, "Ajoutez une lettre minuscule")
    .regex(/[A-Z]/, "Ajoutez une lettre majuscule")
    .regex(/[0-9]/, "Ajoutez un chiffre")
    .regex(/[^A-Za-z0-9]/, "Ajoutez un caractère spécial"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirmPassword"],
});
