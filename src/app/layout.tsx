import './globals.css'
import type { Metadata } from 'next'
import { Navbar } from '@/components/NavBar';

export const metadata: Metadata = {
  title: 'L. Zhen Yi',
  description: 'Portfolio of L. Zhen Yi',
   icons: {
    icon: '/assets/favicon_io/favicon.ico',
    shortcut: '/assets/favicon_io/favicon.ico',
    apple: '/assets/favicon_io/apple-touch-icon.png',
  },
  manifest: '/assets/favicon_io/site.webmanifest',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="md:mt-10 md:mb-20">
    <html className="scroll-smooth" lang="en">
      <body className="scroll-smooth text-slate-100 overflow-x-hidden">
        <div className="flex flex-col w-full justify-center">
        <Navbar />
        <main className="p-4 md:w-xl justify-center text-left text-pretty mx-auto md:pt-10">
          {children}
        </main>
         </div>
      </body>
    </html>
    </div>
  )
}
