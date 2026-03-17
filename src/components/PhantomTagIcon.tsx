import type { PhantomTag } from '../types'
import LinkedInSvg from '../images/svgs/linkedin.svg?react'
import SalesNavigatorSvg from '../images/svgs/salesNavigator.svg?react'
import GoogleSvg from '../images/svgs/google.svg?react'
import InstagramSvg from '../images/svgs/instagram.svg?react'
import HubSpotSvg from '../images/svgs/hubSpot.svg?react'

interface PhantomTagIconProps {
  tag: PhantomTag
}

export function PhantomTagIcon({ tag }: PhantomTagIconProps) {
  switch (tag) {
    case 'LinkedIn':
      return <LinkedInSvg className="w-5 h-5" title={tag} />
    case 'Sales Navigator':
      return <SalesNavigatorSvg className="w-5 h-5" title={tag} />
    case 'Google':
      return <GoogleSvg className="w-5 h-5" title={tag} />
    case 'Instagram':
      return <InstagramSvg className="w-5 h-5" title={tag} />
    case 'HubSpot':
      return <HubSpotSvg className="w-5 h-5" title={tag} />
  }
}
