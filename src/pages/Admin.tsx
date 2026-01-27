import { useState } from 'react'

type AdminTab = 'cardapio' | 'entregas' | 'cupons' | 'config'

export default function Admin() {
  const [tab, setTab] = useState<AdminTab>('cardapio')

  return (
    <section className="container py-10">
      <h1 className="text-2xl font-bold">Painel Admin</h1>
      <p className="mt-1 text-gray-600">Placeholders para gestão do delivery.</p>

      <div className="mt-6 flex gap-2">
        {(['cardapio', 'entregas', 'cupons', 'config'] as AdminTab[]).map((t) => (
          <button
            key={t}
            className={`rounded border px-3 py-1.5 text-sm ${
              tab === t ? 'bg-brand text-white border-brand' : 'hover:bg-gray-50'
            }`}
            onClick={() => setTab(t)}
          >
            {t === 'cardapio' && 'Cardápio'}
            {t === 'entregas' && 'Entregas'}
            {t === 'cupons' && 'Cupons'}
            {t === 'config' && 'Configurações'}
          </button>
        ))}
      </div>

      <div className="mt-6 rounded-lg border bg-white p-4">
        {tab === 'cardapio' && (
          <div>
            <h2 className="text-lg font-semibold">Gestão de Cardápio</h2>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
              <li>Criar pratos, categorias, disponibilidade por dia/horário</li>
              <li>Adicionar variações como borda, combos, acompanhamentos</li>
              <li>Alterar status se faltar ingrediente</li>
            </ul>
          </div>
        )}
        {tab === 'entregas' && (
          <div>
            <h2 className="text-lg font-semibold">Gestão de Entregas</h2>
            <p className="mt-2 text-sm text-gray-700">
              Módulo de entregadores, atribuição de pedidos e relatórios.
            </p>
          </div>
        )}
        {tab === 'cupons' && (
          <div>
            <h2 className="text-lg font-semibold">Ofertas e Cupons</h2>
            <p className="mt-2 text-sm text-gray-700">
              Criar cupons por valor ou percentual e configurar validade.
            </p>
          </div>
        )}
        {tab === 'config' && (
          <div>
            <h2 className="text-lg font-semibold">Administração da Loja</h2>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
              <li>Dados completos, URL personalizada e horários do delivery</li>
              <li>Área de entrega por mapa, pedido mínimo e formas de pagamento</li>
              <li>Estatísticas e multiusuário (administrador e operador)</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
