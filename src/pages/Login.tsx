import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Login placeholder')
  }

  return (
    <section className="container py-10">
      <h1 className="text-2xl font-bold">Login</h1>
      <p className="mt-1 text-gray-600">
        Acesso ao painel. O cliente não precisa de login para comprar.
      </p>
      <form onSubmit={submit} className="mt-6 max-w-md space-y-4">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded border px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded border px-3 py-2"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full rounded bg-brand px-3 py-2 font-medium text-white hover:bg-brand-dark"
        >
          Entrar
        </button>
        <div className="text-sm text-gray-600">
          <span>Esqueceu a senha?</span> <Link to="/admin" className="text-brand">Ir para Admin</Link>
        </div>
      </form>
    </section>
  )
}
