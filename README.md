# Mowjá • plataforma de pedidos

Aplicação web baseada em React + Vite + Tailwind, inspirada nas principais funcionalidades de plataformas de delivery: cardápio, pedidos via WhatsApp, gestão e painel admin.

## Requisitos
- Node.js 20+
- npm 10+

## Scripts
- `npm run dev` — inicia servidor de desenvolvimento
- `npm run build` — compila TypeScript e gera build de produção
- `npm run preview` — serve o build gerado
- `npm run typecheck` — verifica tipos sem emitir arquivos

## Estrutura
- `src/pages` — Home, Cardápio, Admin, Login
- `src/components` — Navbar, Footer, Hero, SectionGrid, MenuList, CartDrawer

## Desenvolvimento
1. Instale dependências: `npm ci`
2. Rode o projeto: `npm run dev`
3. Acesse: `http://localhost:5173/`

## GitHub Actions (CI)
Pipeline em `.github/workflows/ci.yml` para:
- Checkout e setup Node 20
- `npm ci`
- `npm run typecheck`
- `npm run build`

## Publicação
1. Crie um repositório no GitHub.
2. Adicione o remoto:
   - `git remote add origin https://github.com/SEU_USUARIO/mowja.git`
3. Push:
   - `git push -u origin main`

## WhatsApp
Atualize o número da loja nos componentes Navbar e CartDrawer.
