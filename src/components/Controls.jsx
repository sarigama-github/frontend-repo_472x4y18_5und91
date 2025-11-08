import React from 'react'

function Controls({ canRoll, onRoll, dice, currentTurn, onNewGame }) {
  return (
    <div className="w-full md:w-auto flex flex-col items-center gap-4">
      <div className="flex items-center gap-3">
        <button
          onClick={onRoll}
          disabled={!canRoll}
          className="px-5 py-3 rounded-lg bg-gray-900 text-white font-semibold shadow hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Roll Dice
        </button>
        <button
          onClick={onNewGame}
          className="px-4 py-3 rounded-lg bg-white border border-gray-200 shadow-sm hover:bg-gray-50"
        >
          New Game
        </button>
      </div>
      <div className="flex items-center gap-3 text-sm text-gray-600">
        <div className="h-10 w-10 grid place-items-center rounded-lg border border-gray-200 bg-white text-xl font-bold shadow-sm">
          {dice}
        </div>
        <div>
          <p className="text-gray-900 font-semibold">Turn: <span className="capitalize">{currentTurn}</span></p>
          <p className="text-xs text-gray-500">Roll a 6 to enter the board</p>
        </div>
      </div>
    </div>
  )
}

export default Controls
