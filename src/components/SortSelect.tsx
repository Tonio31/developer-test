import { ArrowDown, ArrowUp } from 'lucide-react'
import type { SortKey, SortState } from '../types'

interface SortSelectProps {
  value: SortState
  onChange: (value: SortState) => void
}

const OPTIONS: { value: SortKey; label: string }[] = [
  { value: 'name', label: 'Name' },
  { value: 'slots', label: 'Slots' },
]

export function SortSelect({ value, onChange }: SortSelectProps) {
  function handleClick(key: SortKey) {
    if (value.key !== key) {
      onChange({ key, direction: 'asc' })
    } else if (value.direction === 'asc') {
      onChange({ key, direction: 'desc' })
    } else {
      onChange({ key: null, direction: 'asc' })
    }
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-500">Sort by</span>
      <div className="flex gap-1">
        {OPTIONS.map((option) => {
          const isActive = value.key === option.value
          return (
            <button
              key={option.value}
              onClick={() => handleClick(option.value)}
              className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors cursor-pointer ${
                isActive
                  ? 'border-blue-600 bg-blue-50 text-blue-700'
                  : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {option.label}
              {isActive && (
                value.direction === 'asc'
                  ? <ArrowUp size={13} />
                  : <ArrowDown size={13} />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
