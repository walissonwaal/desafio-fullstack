import { Header, NavBar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'To-do List',
  description: 'Desafio Fullstack - Simplify',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {/* <NavBar /> */}
        <main className='h-full flex items-center justify-center bg-white'>
          <Toaster
            position="top-right"
            reverseOrder={false}
          />
          {children}
        </main>
      </body>
    </html>
  )
}
