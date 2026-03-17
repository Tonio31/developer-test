import type { Phantom } from '../types'
import { Button } from './Button'
import { PhantomSlotBadge } from './PhantomSlotBadge'
import { PhantomTagIcon } from './PhantomTagIcon'

interface PhantomCardProps {
  phantom: Phantom
}

export function PhantomCard({ phantom }: PhantomCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-3 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-wrap gap-1.5">
          {phantom.tags.map((tag) => (
            <PhantomTagIcon key={tag} tag={tag} />
          ))}
        </div>
        <PhantomSlotBadge slots={phantom.slots} />
      </div>

      <div className="flex-1">
        <h3 className="text-base font-semibold text-gray-900 leading-snug">{phantom.title}</h3>
        <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">{phantom.description}</p>
      </div>

      <div className="flex gap-2 pt-1">
        <Button variant="outline">Learn more</Button>
        <Button variant="primary">Use now</Button>
      </div>
    </div>
  )
}
