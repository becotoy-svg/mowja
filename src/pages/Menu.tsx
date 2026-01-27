import { useMemo, useState } from 'react'
import MenuList, { MenuItem } from '@/components/MenuList'
import CartDrawer, { CartItem } from '@/components/CartDrawer'

const MOCK_ITEMS: MenuItem[] = [
  {
    id: 'p1',
    name: 'Pizza Margherita',
    description: 'Mussarela, tomate e manjericão',
    price: 39.9,
    category: 'Pizzas'
  },
  {
    id: 'p2',
    name: 'Pizza Calabresa',
    description: 'Calabresa, cebola, mussarela',
    price: 44.9,
    category: 'Pizzas'
  },
  {
    id: 'c1',
    name: 'Coca-Cola Lata',
    description: '350ml gelada',
    price: 6.0,
    category: 'Bebidas'
  }
]

export default function Menu() {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const found = prev.find((ci) => ci.item.id === item.id)
      if (found) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, qty: ci.qty + 1 } : ci
        )
      }
      return [...prev, { item, qty: 1 }]
    })
  }

  const inc = (id: string) =>
    setCart((prev) =>
      prev.map((ci) => (ci.item.id === id ? { ...ci, qty: ci.qty + 1 } : ci))
    )

  const dec = (id: string) =>
    setCart((prev) =>
      prev
        .map((ci) => (ci.item.id === id ? { ...ci, qty: ci.qty - 1 } : ci))
        .filter((ci) => ci.qty > 0)
    )

  const clear = () => setCart([])

  const categories = useMemo(() => {
    return Array.from(new Set(MOCK_ITEMS.map((i) => i.category ?? 'Outros')))
  }, [])

  return (
    <section className="container py-10">
      <h1 className="text-2xl font-bold">Cardápio</h1>
      <p className="mt-1 text-gray-600">
        Selecione os itens e finalize seu pedido pelo WhatsApp.
      </p>
      <div className="mt-6 space-y-8">
        {categories.map((cat) => (
          <div key={cat}>
            <h2 className="text-xl font-semibold">{cat}</h2>
            <div className="mt-3">
              <MenuList
                items={MOCK_ITEMS.filter((i) => (i.category ?? 'Outros') === cat)}
                onAdd={addToCart}
              />
            </div>
          </div>
        ))}
      </div>
      <CartDrawer items={cart} onInc={inc} onDec={dec} onClear={clear} />
    </section>
  )
}
