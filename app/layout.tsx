import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Aarchi Mann | Software Developer',
  description:
    'Aarchi Mann — Bachelor of Advanced Computing student at the University of Sydney. Software developer passionate about security, AI, and building real-world applications.',
  keywords: [
    'Aarchi Mann',
    'Software Developer',
    'University of Sydney',
    'Portfolio',
    'React',
    'Next.js',
  ],
  authors: [{ name: 'Aarchi Mann' }],
  openGraph: {
    title: 'Aarchi Mann | Software Developer',
    description:
      'Software developer passionate about security, AI, and building real-world applications.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#f5f0eb',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
