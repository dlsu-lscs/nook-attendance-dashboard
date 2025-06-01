import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nook Dashboard',
  description: 'Dashboard to check how many members are inside the nook',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/lscs.png" />
      <body className={`${inter.className} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  )
}
