import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="border-b bg-white/80 backdrop-blur">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded bg-brand" />
          <span className="text-lg font-bold">Mowjá</span>
        </Link>
        <nav className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm ${isActive ? 'text-brand font-semibold' : 'text-gray-700'}`
            }
          >
            Início
          </NavLink>
          <a href="/#vantagens" className="text-sm text-gray-700 hover:text-brand">
            Vantagens
          </a>
          <a href="/#suporte" className="text-sm text-gray-700 hover:text-brand">
            Suporte
          </a>
          <a href="/#cardapio" className="text-sm text-gray-700 hover:text-brand">
            Funcionalidades
          </a>
          <NavLink
            to="/cardapio"
            className={({ isActive }) =>
              `text-sm ${isActive ? 'text-brand font-semibold' : 'text-gray-700'}`
            }
          >
            Cardápio
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `text-sm ${isActive ? 'text-brand font-semibold' : 'text-gray-700'}`
            }
          >
            Login
          </NavLink>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noreferrer"
            className="rounded bg-brand px-3 py-1.5 text-sm font-medium text-white hover:bg-brand-dark"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}
