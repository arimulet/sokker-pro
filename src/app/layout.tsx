import type { Metadata } from 'next'
import Header from './ui/Header'
import Sidebar from './ui/Sidebar'
import Footer from './ui/Footer'

import '@/styles/globals.scss'
import './ui/Header/styles.scss'
import './ui/Footer/styles.scss'
import './ui/Sidebar/styles.scss'

export const metadata: Metadata = {
  title: 'Sokker Pro',
  description: 'Aplicación de gestión de fútbol',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <div className="app-layout">
          <Header />
          <div className="main-content">
            <Sidebar />
            <main className="content">
              {children}
            </main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
