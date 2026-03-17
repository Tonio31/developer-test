import { PhantomCard } from './components/PhantomCard'
import phantoms from './data/phantoms.json'
import type { Phantom } from './types'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">All Phantoms</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {(phantoms as Phantom[]).map((phantom) => (
            <PhantomCard key={phantom.id} phantom={phantom} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
