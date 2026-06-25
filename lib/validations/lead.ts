import { z } from 'zod'

export const leadFormSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  whatsapp: z.string().min(8, 'WhatsApp inválido'),
  country: z
    .enum(['usa', 'canada', 'australia', 'portugal', 'other'])
    .refine((v) => v !== undefined, { message: 'Selecione seu país' }),
  businessType: z.string().optional(),
})

export type LeadFormSchema = z.infer<typeof leadFormSchema>
