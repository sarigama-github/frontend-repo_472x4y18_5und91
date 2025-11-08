import React from 'react'

function HowToPlay() {
  return (
    <div className="w-full md:max-w-sm bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border border-gray-200 rounded-xl p-5 shadow">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">How to play</h3>
      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
        <li>Roll the dice. Get a 6 to move a pawn onto the path.</li>
        <li>Click a pawn to move it forward based on your roll.</li>
        <li>Capture opponents by landing on them.</li>
        <li>First to reach the center with all pawns wins.</li>
      </ul>
    </div>
  )
}

export default HowToPlay
