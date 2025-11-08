import React, { useMemo } from 'react'

// Simple 15x15 Ludo-like board grid with home yards and safe path highlights
function LudoBoard({ positions = {}, currentTurn = 'red' }) {
  const size = 15

  // Precompute board cells with styling flags
  const cells = useMemo(() => {
    const arr = []
    for (let r = 0; r < size; r++) {
      const row = []
      for (let c = 0; c < size; c++) {
        const isCenter = r >= 6 && r <= 8 && c >= 6 && c <= 8
        const isRedYard = r < 6 && c < 6
        const isBlueYard = r < 6 && c > 8
        const isYellowYard = r > 8 && c < 6
        const isGreenYard = r > 8 && c > 8

        // Approximate main cross paths
        const isHorizontalMain = r === 7
        const isVerticalMain = c === 7
        const isPath = isHorizontalMain || isVerticalMain

        row.push({
          r,
          c,
          isCenter,
          isRedYard,
          isBlueYard,
          isYellowYard,
          isGreenYard,
          isPath,
        })
      }
      arr.push(row)
    }
    return arr
  }, [])

  const pawnColor = {
    red: 'bg-rose-500',
    blue: 'bg-blue-500',
    yellow: 'bg-amber-400',
    green: 'bg-emerald-500',
  }

  return (
    <div
      className="w-full aspect-square max-w-3xl rounded-xl overflow-hidden shadow-2xl border border-gray-200"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${size}, minmax(0, 1fr))`,
      }}
    >
      {cells.flat().map((cell) => {
        const key = `${cell.r}-${cell.c}`
        const posHere = Object.entries(positions).filter(([, p]) => p.r === cell.r && p.c === cell.c)
        let bg = 'bg-white'
        if (cell.isCenter) bg = 'bg-gray-50'
        if (cell.isRedYard) bg = 'bg-rose-50'
        if (cell.isBlueYard) bg = 'bg-blue-50'
        if (cell.isYellowYard) bg = 'bg-amber-50'
        if (cell.isGreenYard) bg = 'bg-emerald-50'
        if (cell.isPath) bg = 'bg-gray-100'

        return (
          <div key={key} className={`relative border border-gray-200/70 ${bg} flex items-center justify-center`}>
            {posHere.map(([id, p]) => (
              <div key={id} className={`h-4 w-4 md:h-5 md:w-5 rounded-full ring-2 ring-white ${pawnColor[p.color] || 'bg-gray-400'}`} />
            ))}
          </div>
        )
      })}
    </div>
  )
}

export default LudoBoard
