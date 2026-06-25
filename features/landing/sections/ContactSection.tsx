'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { leadFormSchema, type LeadFormSchema } from '@/lib/validations/lead'
import { CheckCircle, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const countries = [
  { value: 'canada', label: '🇨🇦 Canadá' },
  { value: 'usa', label: '🇺🇸 USA' },
  { value: 'australia', label: '🇦🇺 Austrália' },
  { value: 'portugal', label: '🇵🇹 Portugal' },
  { value: 'other', label: 'Outro país' },
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormSchema>({
    resolver: zodResolver(leadFormSchema),
  })

  async function onSubmit(data: LeadFormSchema) {
    // TODO: wire up to API route → CRM
    await new Promise((r) => setTimeout(r, 800))
    console.log('Lead submitted:', data)
    setSubmitted(true)
  }

  return (
    <section id="contato" className="section-padding bg-blue-900">
      <div className="container-page">
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold tracking-widest text-green-400 uppercase">
              Próximo passo
            </p>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Pronto Para Crescer?</h2>
            <p className="text-lg text-blue-200">
              Sem compromisso. Sem cobrança. Resposta em até 2 horas.
              <br />
              Tudo em português. ✓
            </p>
          </div>

          {submitted ? (
            /* Success state */
            <div className="rounded-2xl bg-white p-10 text-center">
              <CheckCircle className="mx-auto mb-4 h-14 w-14 text-green-600" />
              <h3 className="mb-2 text-2xl font-bold text-slate-900">
                Recebemos suas informações!
              </h3>
              <p className="mb-6 text-slate-600">
                Entraremos em contato em até 2 horas para agendar sua conversa estratégica gratuita.
              </p>
              <div className="rounded-xl bg-slate-50 p-5 text-left">
                <p className="mb-2 font-semibold text-slate-700">Próximos passos:</p>
                <ol className="space-y-2 text-sm text-slate-600">
                  <li>1. Receba confirmação por e-mail</li>
                  <li>2. Agende sua call de estratégia (15 min)</li>
                  <li>3. Receba o diagnóstico do seu caso</li>
                </ol>
              </div>
            </div>
          ) : (
            /* Form */
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-2xl bg-white p-8 shadow-xl"
              noValidate
            >
              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Nome completo *
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Seu nome"
                    {...register('name')}
                    className={cn(
                      'w-full rounded-xl border px-4 py-3 text-base text-slate-900 placeholder-slate-400 transition focus:ring-2 focus:ring-blue-900 focus:outline-none',
                      errors.name ? 'border-red-400 bg-red-50' : 'border-slate-300 bg-white'
                    )}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    E-mail *
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="seu@email.com"
                    {...register('email')}
                    className={cn(
                      'w-full rounded-xl border px-4 py-3 text-base text-slate-900 placeholder-slate-400 transition focus:ring-2 focus:ring-blue-900 focus:outline-none',
                      errors.email ? 'border-red-400 bg-red-50' : 'border-slate-300 bg-white'
                    )}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                {/* WhatsApp + Country side by side */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="whatsapp"
                      className="mb-1.5 block text-sm font-medium text-slate-700"
                    >
                      WhatsApp *
                    </label>
                    <input
                      id="whatsapp"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+1 (555) 000-0000"
                      {...register('whatsapp')}
                      className={cn(
                        'w-full rounded-xl border px-4 py-3 text-base text-slate-900 placeholder-slate-400 transition focus:ring-2 focus:ring-blue-900 focus:outline-none',
                        errors.whatsapp ? 'border-red-400 bg-red-50' : 'border-slate-300 bg-white'
                      )}
                    />
                    {errors.whatsapp && (
                      <p className="mt-1 text-sm text-red-600">{errors.whatsapp.message}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="country"
                      className="mb-1.5 block text-sm font-medium text-slate-700"
                    >
                      País *
                    </label>
                    <select
                      id="country"
                      {...register('country')}
                      className={cn(
                        'w-full rounded-xl border px-4 py-3 text-base text-slate-900 transition focus:ring-2 focus:ring-blue-900 focus:outline-none',
                        errors.country ? 'border-red-400 bg-red-50' : 'border-slate-300 bg-white'
                      )}
                    >
                      <option value="">Selecione...</option>
                      {countries.map((c) => (
                        <option key={c.value} value={c.value}>
                          {c.label}
                        </option>
                      ))}
                    </select>
                    {errors.country && (
                      <p className="mt-1 text-sm text-red-600">{errors.country.message}</p>
                    )}
                  </div>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-14 w-full gap-2 bg-green-600 text-base font-bold text-white hover:bg-green-700 disabled:opacity-70"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Agendar Estratégia Gratuita →'
                  )}
                </Button>
              </div>

              <p className="mt-4 text-center text-xs text-slate-400">
                Sem spam. Sem compromisso. Sua informação é confidencial.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
