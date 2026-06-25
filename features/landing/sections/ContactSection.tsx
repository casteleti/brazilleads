'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { leadFormSchema, type LeadFormSchema } from '@/lib/validations/lead'
import { CheckCircle, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const countries = [
  { value: 'canada', label: 'Canadá' },
  { value: 'usa', label: 'USA' },
  { value: 'australia', label: 'Austrália' },
  { value: 'portugal', label: 'Portugal' },
  { value: 'other', label: 'Outro país' },
]

const inputBase =
  'w-full rounded-lg border px-4 py-3 text-base text-brand-navy placeholder-brand-faint transition-colors focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy'

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormSchema>({
    resolver: zodResolver(leadFormSchema),
    mode: 'onBlur',
  })

  async function onSubmit(data: LeadFormSchema) {
    // TODO: wire up to API route → CRM
    await new Promise((r) => setTimeout(r, 800))
    console.log('Lead submitted:', data)
    setSubmitted(true)
  }

  return (
    <section id="contato" className="section-premium bg-brand-navy">
      <div className="container-page">
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <div className="mb-10 text-center">
            <p className="label-eyebrow-light mb-3">Próximo passo</p>
            <h2 className="font-display mb-4 text-3xl text-white md:text-4xl">
              Comece com uma conversa.
            </h2>
            <p className="text-lg text-white/60">
              Sem compromisso. Sem cobrança. Resposta em até 2 horas.
              <br />
              Tudo em português.
            </p>
          </div>

          {submitted ? (
            /* Success state */
            <div className="rounded-lg bg-white p-10 text-center">
              <CheckCircle className="text-brand-green mx-auto mb-4 h-14 w-14" />
              <h3 className="font-display text-brand-navy mb-2 text-2xl">
                Recebemos suas informações!
              </h3>
              <p className="text-brand-body mb-6">
                Entraremos em contato em até 2 horas para agendar sua conversa estratégica gratuita.
              </p>
              <div className="bg-brand-warm-white rounded-md p-5 text-left">
                <p className="text-brand-navy mb-2 font-semibold">Próximos passos:</p>
                <ol className="text-brand-body space-y-2 text-sm">
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
              className="rounded-lg bg-white p-8 shadow-xl"
              noValidate
            >
              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="text-brand-navy mb-1.5 block text-sm font-medium"
                  >
                    Nome completo *
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Seu nome"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    aria-invalid={!!errors.name}
                    {...register('name')}
                    className={cn(
                      inputBase,
                      errors.name ? 'border-red-400 bg-red-50' : 'border-brand-border bg-white'
                    )}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="text-brand-navy mb-1.5 block text-sm font-medium"
                  >
                    E-mail *
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    placeholder="seu@email.com"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-invalid={!!errors.email}
                    {...register('email')}
                    className={cn(
                      inputBase,
                      errors.email ? 'border-red-400 bg-red-50' : 'border-brand-border bg-white'
                    )}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* WhatsApp + Country */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="whatsapp"
                      className="text-brand-navy mb-1.5 block text-sm font-medium"
                    >
                      WhatsApp *
                    </label>
                    <input
                      id="whatsapp"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="+1 (555) 000-0000"
                      aria-describedby={errors.whatsapp ? 'whatsapp-error' : undefined}
                      aria-invalid={!!errors.whatsapp}
                      {...register('whatsapp')}
                      className={cn(
                        inputBase,
                        errors.whatsapp
                          ? 'border-red-400 bg-red-50'
                          : 'border-brand-border bg-white'
                      )}
                    />
                    {errors.whatsapp && (
                      <p id="whatsapp-error" className="mt-1 text-sm text-red-600" role="alert">
                        {errors.whatsapp.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="country"
                      className="text-brand-navy mb-1.5 block text-sm font-medium"
                    >
                      País *
                    </label>
                    <select
                      id="country"
                      aria-describedby={errors.country ? 'country-error' : undefined}
                      aria-invalid={!!errors.country}
                      {...register('country')}
                      className={cn(
                        inputBase,
                        errors.country ? 'border-red-400 bg-red-50' : 'border-brand-border bg-white'
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
                      <p id="country-error" className="mt-1 text-sm text-red-600" role="alert">
                        {errors.country.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="bg-brand-green hover:bg-brand-navy duration-fast h-14 w-full gap-2 text-base font-bold text-white transition-colors disabled:opacity-70"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
                      Enviando...
                    </>
                  ) : (
                    'Agendar Estratégia Gratuita →'
                  )}
                </Button>
              </div>

              <p className="text-brand-faint mt-4 text-center text-xs">
                Sem spam. Sem compromisso. Sua informação é confidencial.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
