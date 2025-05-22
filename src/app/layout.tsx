// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Navbar } from '../../components/NavBar';

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
    <html className="scroll-smooth b" lang="en">
      <body className="scroll-smooth bg-gray-900 text-slate-100 overflow-x-hidden">
        <div className="flex flex-col md:flex-row w-full">
        <Navbar />
        <main className="p-4 w-full md:mt-26 lg:mr-65 md:ml-2 md:mr-40">
          {children}
        </main>
         </div>
      </body>
    </html>
  )
}
