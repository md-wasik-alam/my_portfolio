import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/src/components/Header'


const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <title>Md Wasik Alam | Portfolio</title>
        <meta name="google-site-verification" content="G-iIFDdeBUQkvhicF16AMCW9id0I5B48oKI4QcDcpxI" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.css" rel="stylesheet" />
        <meta name="description" content="Welcome to my digital haven! I'm a Full Stack Architect 💻, sculpting interactive realms with Python, JavaScript, PHP, and orchestrating magic with Laravel, MongoDB, MySQL, Next.js, and Node.js. 🌐 In this code-crafted sanctuary, witness my journey as a relentless Web/App alchemist. Each project is a stroke of innovation, a testament to my dedication. Ready to embark on a virtual adventure? Let the lines of code unfold the story of my passion and proficiency! As a skilled backend developer and full-stack developer, I bring expertise in building robust and dynamic web applications using a variety of technologies." />
        <meta name="keywords" content="Full Stack Developer, Backend Developer, Web Application Developer, Python Developer, JavaScript Developer, PHP Developer, Laravel Developer, MongoDB Developer, MySQL Developer, Next.js Developer, Node.js Developer, Web App Alchemist, Innovation in Web Development, Passionate Coder" />



      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <footer class="bg-gray-200 dark:bg-gray-800 py-4">
          <div class="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} Md Wasik Alam. All rights reserved.</p>
          </div>


        </footer>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.js"></script>
      </body>
    </html>
  )
}
