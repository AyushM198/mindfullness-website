import * as React from "react"

type Session = {
  emoji: string
  text: string
}

interface JourneyCardProps {
  title?: string
  sessions: Session[]
}

export function Card({ 
  title = "Today’s Journey", 
  sessions 
}: JourneyCardProps) {
  return (
    <div className="max-w-xs shadow-md rounded-2xl border-0 p-4 bg-white">
      {/* Header */}
      <div className="mb-3">
        <h3 className="text-base font-bold">{title}</h3>
      </div>

      {/* Content */}
      <div>
        <ul className="space-y-2 text-sm">
  {(sessions ?? []).map((session, i) => (
    <li key={i} className="flex items-start gap-2">
      <span className="text-lg">{session.emoji}</span>
      <span>{session.text}</span>
    </li>
  ))}
</ul>

      </div>
    </div>
  )
}
