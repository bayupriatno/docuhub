'use client'

import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen p-4 bg-white border-r shadow-sm fixed top-0 left-0">
      <h2 className="text-lg font-bold mb-4 text-blue-600">📘 DocuHub</h2>
      <ul className="space-y-3">
        <li>
          <Link href="/dashboard" className="text-gray-800 hover:text-blue-500">🏠 Dashboard</Link>
        </li>
        <li>
          <Link href="/docs" className="text-gray-800 hover:text-blue-500">📄 Dokumentasi</Link>
        </li>
        <li>
          <Link href="/roadmap" className="text-gray-800 hover:text-blue-500">🗺️ Roadmap</Link>
        </li>
        <li>
          <Link href="/issues" className="text-gray-800 hover:text-blue-500">🐞 Issues</Link>
        </li>
        <li>
          <Link href="/feedback" className="text-gray-800 hover:text-blue-500">💬 Feedback</Link>
        </li>
        <li>
          <Link href="/team" className="text-gray-800 hover:text-blue-500">👥 Tim</Link>
        </li>
      </ul>
    </aside>
  )
}
