import Navbar from '@/common/navbar/Navbar'
import './globals.css'
import { Manrope } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'] })
export const metadata = {
  title: 'Cape',
  description: 'The superhero your brand needs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} text-white border-none bg-red`}>
        <div id = "root"></div>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
