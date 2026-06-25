export type { Country } from '@/config/site'

export interface LeadFormData {
  name: string
  email: string
  whatsapp: string
  country: string
  businessType?: string
}

export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export type Locale = 'pt-BR' | 'en-US' | 'en-CA' | 'en-AU'
