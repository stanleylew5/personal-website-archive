import { Lato } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigations';
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Lato({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Stanley Lew',
  description: 'Personal Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation/>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
