import { Button } from './Button'

interface ModalProps {
  onClose: () => void
  children: React.ReactNode
}

export function Modal({ onClose, children }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-4 flex flex-col gap-4">
        {children}
        <div className="flex justify-end pt-2">
          <Button variant="primary" className="flex-none px-6" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}
