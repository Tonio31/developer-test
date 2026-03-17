import type { Meta, StoryObj } from '@storybook/react'
import { PhantomSlotBadge } from './PhantomSlotBadge'

const meta: Meta<typeof PhantomSlotBadge> = {
  component: PhantomSlotBadge,
  title: 'Components/PhantomSlotBadge',
}

export default meta

type Story = StoryObj<typeof PhantomSlotBadge>

export const OneSlot: Story = {
  args: { slots: 1 },
}

export const FiveSlots: Story = {
  args: { slots: 5 },
}

export const TenSlots: Story = {
  args: { slots: 10 },
}
