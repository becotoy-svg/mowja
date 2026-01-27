import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Admin from './pages/Admin'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardapio" element={<Menu />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
