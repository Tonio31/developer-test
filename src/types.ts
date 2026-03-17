export type PhantomTag = 'LinkedIn' | 'Sales Navigator' | 'Google' | 'Instagram' | 'HubSpot'

export interface Phantom {
  id: string
  title: string
  description: string
  slots: number
  tags: PhantomTag[]
}
