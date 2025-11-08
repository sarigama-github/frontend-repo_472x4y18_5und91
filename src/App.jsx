import React, { useMemo, useState } from 'react'
import Header from './components/Header'
import LudoBoard from './components/LudoBoard'
import Controls from './components/Controls'
import HowToPlay from './components/HowToPlay'

const initialPositions = () => ({
  r1: { r: 1, c: 1, color: 'red' },
  r2: { r: 3, c: 3, color: 'red' },
  b1: { r: 1, c: 13, color: 'blue' },
  b2: { r: 3, c: 11, color: 'blue' },
  y1: { r: 13, c: 1, color: 'yellow' },
  y2: { r: 11, c: 3, color: 'yellow' },
  g1: { r: 13, c: 13, color: 'green' },
  g2: { r: 11, c: 11, color: 'green' },
})

function App() {
  const [positions, setPositions] = useState(initialPositions())
  const [currentTurn, setCurrentTurn] = useState('red')
  const [dice, setDice] = useState(1)

  const order = ['red', 'blue', 'yellow', 'green']

  const canRoll = true

  const roll = () => {
    const rollVal = Math.floor(Math.random() * 6) + 1
    setDice(rollVal)
  }

  const nextTurn = () => {
    setCurrentTurn((prev) => {
      const idx = order.indexOf(prev)
      return order[(idx + 1) % order.length]
    })
  }

  const onNewGame = () => {
    setPositions(initialPositions())
    setCurrentTurn('red')
    setDice(1)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-sky-50 to-emerald-50 text-gray-900">
      <Header />

      <main className="max-w-6xl mx-auto px-6 pb-16 pt-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-start">
        <div className="flex flex-col items-center gap-6">
          <LudoBoard positions={positions} currentTurn={currentTurn} />
        </div>

        <div className="flex flex-col items-stretch gap-6">
          <Controls canRoll={canRoll} onRoll={roll} dice={dice} currentTurn={currentTurn} onNewGame={onNewGame} />
          <HowToPlay />
          <div className="text-xs text-gray-500">
            This is a simplified single-device demo of Ludo. Multiplayer, rules, and persistence can be added next.
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
