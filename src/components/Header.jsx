import React from 'react'

function Header() {
  return (
    <header className="w-full py-6 px-6 md:px-10 flex items-center justify-between bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-rose-500 to-fuchsia-600 shadow-lg" />
        <div>
          <h1 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">Ludo Royale</h1>
          <p className="text-xs text-gray-500 -mt-0.5">Casual multiplayer board fun</p>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-2 text-gray-500 text-sm">
        <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 mr-1" />
        Live Demo
      </div>
    </header>
  )
}

export default Header
