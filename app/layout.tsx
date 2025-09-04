import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'My World Tracker',
  description: 'Track the countries you visited',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="max-w-5xl mx-auto p-4">{children}</body>
    </html>
  )
}