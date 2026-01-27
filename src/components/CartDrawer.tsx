import { MenuItem } from './MenuList'

export type CartItem = {
  item: MenuItem
  qty: number
}

type Props = {
  items: CartItem[]
  onInc: (id: string) => void
  onDec: (id: string) => void
  onClear: () => void
}

export default function CartDrawer({ items, onInc, onDec, onClear }: Props) {
  const total = items.reduce((sum, ci) => sum + ci.item.price * ci.qty, 0)

  return (
    <aside
      className="fixed z-50 bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-sm
                 md:left-auto md:translate-x-0 md:right-4 md:top-1/2 md:-translate-y-1/2 md:bottom-auto md:w-80
                 rounded-lg border bg-white p-4 shadow-lg"
      role="complementary"
      aria-label="Carrinho"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Carrinho</h3>
        <button className="text-sm text-gray-600 hover:underline" onClick={onClear}>
          Limpar
        </button>
      </div>
      <div className="mt-3 space-y-3">
        {items.length === 0 ? (
          <p className="text-sm text-gray-600">Seu carrinho está vazio</p>
        ) : (
          items.map(({ item, qty }) => (
            <div key={item.id} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-gray-600">
                  R$ {item.price.toFixed(2)} × {qty}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="rounded border px-2 py-1 text-sm"
                  onClick={() => onDec(item.id)}
                >
                  −
                </button>
                <span className="w-6 text-center text-sm">{qty}</span>
                <button
                  className="rounded border px-2 py-1 text-sm"
                  onClick={() => onInc(item.id)}
                >
                  +
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="font-semibold">Total</p>
        <p className="font-semibold">R$ {total.toFixed(2)}</p>
      </div>
      <a
        href={`https://wa.me/5500000000000?text=${encodeURIComponent(
          `Pedido Mowjá: ${items
            .map((ci) => `${ci.qty}x ${ci.item.name}`)
            .join(', ')} • Total: R$ ${total.toFixed(2)}`
        )}`}
        target="_blank"
        rel="noreferrer"
        className="mt-3 block w-full rounded bg-brand px-3 py-2 text-center font-medium text-white hover:bg-brand-dark"
      >
        Finalizar pelo WhatsApp
      </a>
    </aside>
  )
}
