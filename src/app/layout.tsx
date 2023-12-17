import Navbar from '@/components/Navbar'
import Providers from '@/components/Providers'
import { ThemeProvider } from "@/components/theme-provider"
import { cn, constructMetadata } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = constructMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='h-full'>
      <body
        className={cn(
          'relative h-full font-sans antialiased',
          inter.className
        )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className='relative flex flex-col min-h-screen'>
            <Providers>
              <Navbar />
              <div className='flex-grow flex-1'>
                {children}
              </div>
              <Footer />
            </Providers>
          </main>
        </ThemeProvider>

        <Toaster position='top-center' richColors />
      </body>
    </html>
  )
}
