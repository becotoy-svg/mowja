export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container py-6 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Mowjá • Plataforma de pedidos</p>
        <p className="mt-1">Inspirado nas funcionalidades líderes de mercado para delivery</p>
      </div>
    </footer>
  )
}
