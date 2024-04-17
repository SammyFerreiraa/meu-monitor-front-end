import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-full flex-col">
      <main className="flex-1">{children}</main>
      <footer className="flex w-full items-center justify-center gap-4 bg-[#0d192b] py-2 text-xs text-white">
        <p>Contrato do Usuário</p>
        <p>Politicas de Privacidade</p>
        <p>Politicas de Cookies</p>
      </footer>
    </div>
  )
}
