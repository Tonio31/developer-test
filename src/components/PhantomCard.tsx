import type { Phantom, PhantomTag } from '../types'
import LinkedInSvg from '../images/svgs/linkedin.svg?react'
import SalesNavigatorSvg from '../images/svgs/salesNavigator.svg?react'
import GoogleSvg from '../images/svgs/google.svg?react'
import InstagramSvg from '../images/svgs/instagram.svg?react'
import HubSpotSvg from '../images/svgs/hubSpot.svg?react'

const TAG_ICON: Record<PhantomTag, React.ReactNode> = {
  LinkedIn: <LinkedInSvg className="w-5 h-5" />,
  'Sales Navigator': <SalesNavigatorSvg className="w-5 h-5" />,
  Google: <GoogleSvg className="w-5 h-5" />,
  Instagram: <InstagramSvg className="w-5 h-5" />,
  HubSpot: <HubSpotSvg className="w-5 h-5" />,
}

interface PhantomCardProps {
  phantom: Phantom
}

export function PhantomCard({ phantom }: PhantomCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-3 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-wrap gap-1.5">
          {phantom.tags.map((tag) => (
            <span key={tag} title={tag}>
              {TAG_ICON[tag]}
            </span>
          ))}
        </div>
        <span className="shrink-0 rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700">
          {phantom.slots} slots
        </span>
      </div>

      <div className="flex-1">
        <h3 className="text-base font-semibold text-gray-900 leading-snug">{phantom.title}</h3>
        <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">{phantom.description}</p>
      </div>

      <div className="flex gap-2 pt-1">
        <button className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
          Learn more
        </button>
        <button className="flex-1 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors">
          Use now
        </button>
      </div>
    </div>
  )
}
