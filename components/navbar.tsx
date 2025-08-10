'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-blue-600">DocuHub</h1>
      <nav className="space-x-4">
        <Link href="/dashboard" className="text-gray-700 hover:text-blue-500">Dashboard</Link>
        <Link href="/docs" className="text-gray-700 hover:text-blue-500">Dokumentasi</Link>
        <Link href="/issues" className="text-gray-700 hover:text-blue-500">Issue</Link>
        <Link href="/feedback" className="text-gray-700 hover:text-blue-500">Feedback</Link>
      </nav>
    </header>
  )
}
