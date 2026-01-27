import { useEffect, useState } from 'react'

const slides = [
  {
    title: 'Mowjá • plataforma de pedidos',
    text:
      'Esteja na agenda do WhatsApp do cliente, venda sem sair do WhatsApp e cresça trimestre a trimestre.'
  },
  {
    title: 'Sem comissão e com suporte diário',
    text:
      'Suporte de 8h às 22h, mentoria de Customer Success e onboarding para configurar sua loja.'
  },
  {
    title: 'Infra na nuvem confiável',
    text:
      'Servidores na nuvem, sem necessidade de servidor local e com atualizações instantâneas do cardápio.'
  }
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000)
    return () => clearInterval(id)
  }, [])

  const s = slides[index]
  return (
    <section className="bg-gradient-to-b from-brand/10 to-transparent">
      <div className="container py-16">
        <h1 className="text-4xl font-extrabold leading-tight">{s.title}</h1>
        <p className="mt-3 max-w-2xl text-lg text-gray-700">{s.text}</p>
        <div className="mt-6 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Slide ${i + 1}`}
              className={`h-2 w-8 rounded ${i === index ? 'bg-brand' : 'bg-gray-300'}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
