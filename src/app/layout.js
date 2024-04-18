import { Lato } from 'next/font/google'
import "bootstrap/dist/css/bootstrap.min.css";
import './globals.css'
import Navigation from '@/components/Navigations';
const inter = Lato({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Stanley Lew',
  description: 'Personal Website',
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
