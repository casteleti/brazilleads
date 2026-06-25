'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    q: 'Quanto tempo até ver resultado?',
    a: '15 dias você já percebe mudanças na performance. 30 dias resultado claro e mensurável. 60 dias transformação real. O tempo exato depende do seu ponto de partida — por isso começamos com uma auditoria.',
  },
  {
    q: 'Tem contrato de fidelidade?',
    a: 'Não. Nosso serviço mensal é mês a mês. Você pode cancelar a qualquer momento com 30 dias de aviso. Acreditamos que resultado retém cliente, não contrato.',
  },
  {
    q: 'Como funciona o suporte com o fuso horário?',
    a: 'Você dorme, a gente otimiza. Trabalhamos enquanto você descansa. Reunião mensal é agendada no seu horário. Suporte via WhatsApp para urgências — respondemos em até 2 horas.',
  },
  {
    q: 'Vocês falam português mesmo?',
    a: 'Sim. Todas as reuniões, relatórios e comunicações são em português. Não é tradução automática — é português de verdade, com contexto cultural brasileiro.',
  },
  {
    q: 'E se não funcionar?',
    a: 'Garantia de 60 dias: se não houver melhora mensurável na performance, devolvemos o valor. Só ganhamos quando você ganha.',
  },
  {
    q: 'Precisam de acesso à minha conta?',
    a: 'Sim, acesso de visualização e edição às suas contas de Google Ads (e Meta, se aplicável). Explicamos exatamente quais permissões são necessárias e como conceder com segurança.',
  },
  {
    q: 'Qual a diferença para uma agência local?',
    a: 'Agências locais não entendem o contexto cultural brasileiro, não falam português e cobram 60–70% mais. Nós entendemos os dois mercados, trabalhamos enquanto você dorme e somos acessíveis.',
  },
  {
    q: 'Trabalham só com Google Ads?',
    a: 'O foco principal é Google Ads. Meta Ads pode ser incluído como complemento na gestão mensal. A auditoria analisa sua situação e recomenda o que faz mais sentido para o seu negócio.',
  },
  {
    q: 'Com quantos países vocês trabalham?',
    a: 'USA, Canadá, Austrália e Portugal. Pode ser um país específico ou todos ao mesmo tempo, dependendo da sua operação.',
  },
  {
    q: 'Preciso mudar minha página de vendas?',
    a: 'Depende. Na auditoria avaliamos sua landing page e indicamos se precisa de ajuste. Às vezes o problema está nos anúncios, não na página — só os dados dizem.',
  },
]

export function FAQSection() {
  return (
    <section className="section-standard bg-brand-navy-tint">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="label-eyebrow mb-3">Dúvidas frequentes</p>
          <h2 className="font-display text-brand-navy mb-4 text-3xl md:text-4xl">
            Perguntas que Todo Mundo Faz
          </h2>
          <p className="text-brand-muted mb-12 text-lg">Respostas honestas, sem enrolação.</p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-brand-border data-[state=open]:border-brand-navy-tint rounded-lg border bg-white px-6 shadow-sm"
              >
                <AccordionTrigger className="font-display text-brand-navy py-5 text-left text-base hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-brand-body pb-5 text-base leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="bg-brand-navy-tint mt-8 rounded-lg p-6 text-center">
            <p className="text-brand-body">
              Ainda tem dúvidas?{' '}
              <a
                href="#contato"
                className="text-brand-navy hover:text-brand-navy-mid font-semibold underline underline-offset-2"
              >
                Fale no WhatsApp
              </a>{' '}
              — respondemos em até 2 horas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
