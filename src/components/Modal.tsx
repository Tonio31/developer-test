import { Button } from './Button'

interface ModalProps {
  onClose: () => void
}

export function Modal({ onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-4 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Welcome</h2>
        <p className="text-gray-600">This is the live coding test for Phantombuster</p>
        <p className="text-gray-500 text-sm">Close the modal to start the test</p>
        <div className="flex justify-end pt-2">
          <Button variant="primary" className="flex-none px-6" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}
