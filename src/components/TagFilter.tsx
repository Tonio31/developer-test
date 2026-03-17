import type { PhantomTag } from '../types'
import { PhantomTagIcon } from './PhantomTagIcon'

interface TagFilterProps {
  tag: PhantomTag
  active: boolean
  onClick: () => void
}

export function TagFilter({ tag, active, onClick }: TagFilterProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-colors cursor-pointer ${
        active
          ? 'border-blue-600 bg-blue-50 text-blue-700'
          : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
      }`}
    >
      <PhantomTagIcon tag={tag} />
      {tag}
    </button>
  )
}
