type Feature = {
  title: string
  description: string
}

const features: Feature[] = [
  { title: 'Link personalizado', description: 'Seu endereço único para receber pedidos' },
  { title: 'Pedidos no WhatsApp', description: 'Receba status e vendas sem sair do WhatsApp' },
  { title: 'Gestão de Cardápio', description: 'Crie pratos, categorias, horários e variações' },
  { title: 'Impressão de pedidos', description: 'Suporte a impressoras com corte automático' },
  { title: 'Servidores na nuvem', description: 'Infraestrutura confiável na nuvem, sem servidor local' },
  { title: 'Gestão de entregas', description: 'Atribua pedidos e gere relatórios por entregador' },
  { title: 'Admin multiusuário', description: 'Perfis administrador e operador' },
  { title: 'Ofertas e cupons', description: 'Crie e gerencie cupons de desconto' },
  { title: 'Pagamento online', description: 'Principais adquirentes do mercado' }
]

export default function FeatureGrid() {
  return (
    <section className="container py-10">
      <h2 className="text-2xl font-bold">Funcionalidades</h2>
      <p className="mt-1 text-gray-600">
        Interface amigável, sem comissão, suporte diário e Customer Success.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-lg border bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            <h3 className="font-semibold">{f.title}</h3>
            <p className="mt-1 text-sm text-gray-700">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
