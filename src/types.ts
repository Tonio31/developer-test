export type PhantomTag = 'LinkedIn' | 'Sales Navigator' | 'Google' | 'Instagram' | 'HubSpot'

export type SortKey = 'name' | 'slots'
export type SortDirection = 'asc' | 'desc'

export interface SortState {
  key: SortKey | null
  direction: SortDirection
}

export interface Phantom {
  id: string
  title: string
  description: string
  slots: number
  tags: PhantomTag[]
}
