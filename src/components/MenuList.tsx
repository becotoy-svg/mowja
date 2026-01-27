export type MenuItem = {
  id: string
  name: string
  description?: string
  price: number
  image?: string
  category?: string
  available?: boolean
}

type Props = {
  items: MenuItem[]
  onAdd: (item: MenuItem) => void
}

export default function MenuList({ items, onAdd }: Props) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.id} className="rounded-lg border bg-white p-4 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              {item.description && (
                <p className="mt-1 text-sm text-gray-600">{item.description}</p>
              )}
              <p className="mt-2 font-medium">R$ {item.price.toFixed(2)}</p>
            </div>
            {item.image && (
              <img
                src={item.image}
                alt={item.name}
                className="ml-3 h-16 w-16 rounded object-cover"
              />
            )}
          </div>
          <button
            className="mt-4 w-full rounded bg-brand px-3 py-2 text-white hover:bg-brand-dark disabled:opacity-50"
            onClick={() => onAdd(item)}
            disabled={item.available === false}
          >
            Adicionar
          </button>
        </div>
      ))}
    </div>
  )
}
