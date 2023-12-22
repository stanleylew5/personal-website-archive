import { Lalezar } from 'next/font/google'
import './globals.css'

const inter = Lalezar({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Stanley Lew',
  description: 'Personal Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
