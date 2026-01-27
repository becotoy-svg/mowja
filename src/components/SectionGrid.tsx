type Item = {
  title: string
  description: string
}

type Props = {
  id?: string
  title: string
  subtitle?: string
  items: Item[]
}

export default function SectionGrid({ id, title, subtitle, items }: Props) {
  return (
    <section id={id} className="container py-10">
      <h2 className="text-2xl font-bold">{title}</h2>
      {subtitle && <p className="mt-1 text-gray-600">{subtitle}</p>}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.title}
            className="rounded-lg border bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            <h3 className="font-semibold">{it.title}</h3>
            <p className="mt-1 text-sm text-gray-700">{it.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
