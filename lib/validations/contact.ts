import { z } from 'zod';

export const requestTypes = [
  { value: 'devis', label: 'Demande de devis' },
  { value: 'echantillon', label: "Demande d'échantillon" },
  { value: 'qualite', label: 'Dossier qualité' },
  { value: 'logistique', label: 'Étude logistique' },
  { value: 'partenariat', label: 'Partenariat MDD' },
  { value: 'information', label: "Demande d'information" },
] as const;

export const productOptions = [
  { value: 'attieke-deshydrate', label: 'Attiéké déshydraté' },
  { value: 'huile-rouge-palme', label: 'Huile rouge de palme' },
  { value: 'farine-manioc', label: 'Farine de manioc' },
  { value: 'feuilles-hibiscus', label: "Feuilles d'hibiscus" },
  { value: 'graine-palme', label: 'Graine de palme' },
  { value: 'coco', label: 'Coco' },
  { value: 'hibiscus', label: 'Hibiscus (matière première)' },
  { value: 'hevea', label: 'Hévéa (caoutchouc naturel)' },
  { value: 'karite', label: 'Karité' },
] as const;

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(100, 'Nom trop long'),

  company: z
    .string()
    .min(2, "Le nom de l'entreprise est requis")
    .max(100, 'Nom trop long'),

  position: z
    .string()
    .max(100, 'Fonction trop longue')
    .optional()
    .or(z.literal('')),

  email: z.string().min(1, "L'email est requis").email('Email invalide'),

  phone: z
    .string()
    .min(6, 'Numéro de téléphone invalide')
    .max(20, 'Numéro trop long'),

  country: z.string().min(2, 'Le pays est requis'),

  requestType: z.enum(
    ['devis', 'echantillon', 'qualite', 'logistique', 'partenariat', 'information'],
    { message: 'Sélectionnez un type de demande' }
  ),

  products: z.array(z.string()).min(1, 'Sélectionnez au moins un produit'),

  estimatedVolume: z
    .string()
    .max(100, 'Volume trop long')
    .optional()
    .or(z.literal('')),

  message: z
    .string()
    .min(20, 'Votre message doit contenir au moins 20 caractères')
    .max(2000, 'Message trop long (max 2000 caractères)'),

  acceptTerms: z
    .boolean()
    .refine((val) => val === true, 'Vous devez accepter le traitement de vos données'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
