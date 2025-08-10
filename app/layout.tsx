import './globals.css'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { ReactNode } from 'react'

export const metadata = {
  title: 'DocuHub',
  description: 'Dashboard dokumentasi proyek tim modern dan kolaboratif.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-gray-50 min-h-screen font-sans">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="ml-64 w-full p-6">{children}</main>
        </div>
      </body>
    </html>
  )
}
