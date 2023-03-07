import './globals.css'
import Navbar from './components/navbar/Navbar'


export const metadata = {
  title: 'Precious Koala',
  description: 'E-commerce website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar/>
      {children}
      </body>
    </html>
  )
}
