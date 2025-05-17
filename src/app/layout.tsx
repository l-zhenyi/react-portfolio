// app/layout.tsx
import './globals.css'
import Link from 'next/link'
import type { Metadata } from 'next'

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
      <body style={{ overflowX: 'hidden' }} className="scroll-smooth bg-gray-900 text-slate-100">
        <div className="w-full">
          <nav className="text-slate-100">
            <div className="max-w-6xl mx-auto px-4 py-4">
              <div className="text-xl font-bold text-center mb-2 text-slate-500">L. Zhen Yi</div>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link href="/" className="text-slate-400 hover:text-blue-500">Home</Link>
                <Link href="/about" className="text-slate-400 hover:text-blue-500">About</Link>
                <Link href="/projects" className="text-slate-400 hover:text-blue-500">Projects</Link>
                <a href="/assets/Lim_ZhenYi_Resume.pdf" target="_blank" className="text-slate-400 hover:text-blue-500">Resume</a>
                <Link href="/now" className="text-slate-400 hover:text-blue-500">Now</Link>
                <Link href="/etc" className="text-slate-400 hover:text-blue-500">Etc.</Link>
              </div>
            </div>
          </nav>
        </div>
        <main>{children}</main>
      </body>
    </html>
  )
}
