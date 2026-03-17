interface PhantomSlotBadgeProps {
  slots: number
}

export function PhantomSlotBadge({ slots }: PhantomSlotBadgeProps) {
  return (
    <span className="shrink-0 rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700">
      {slots} slot{slots > 1 ? 's' : ''}
    </span>
  )
}
