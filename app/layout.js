import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/src/components/Header'


const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <head>
        <title>Md Wasik Alam | Portfolio</title>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.css" rel="stylesheet" />

      </head>
      <body className={inter.className}>
        <Header/>
        {children}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.js"></script>
</body>
    </html>
  )
}
