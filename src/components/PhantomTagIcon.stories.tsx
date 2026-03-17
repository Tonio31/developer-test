import type { Meta, StoryObj } from '@storybook/react'
import { PhantomTagIcon } from './PhantomTagIcon'

const meta: Meta<typeof PhantomTagIcon> = {
  component: PhantomTagIcon,
  title: 'Components/PhantomTagIcon',
}

export default meta

type Story = StoryObj<typeof PhantomTagIcon>

export const LinkedIn: Story = {
  args: { tag: 'LinkedIn' },
}

export const SalesNavigator: Story = {
  args: { tag: 'Sales Navigator' },
}

export const Google: Story = {
  args: { tag: 'Google' },
}

export const Instagram: Story = {
  args: { tag: 'Instagram' },
}

export const HubSpot: Story = {
  args: { tag: 'HubSpot' },
}

export const AllIcons: Story = {
  render: () => (
    <div className="flex gap-3 items-center">
      <PhantomTagIcon tag="LinkedIn" />
      <PhantomTagIcon tag="Sales Navigator" />
      <PhantomTagIcon tag="Google" />
      <PhantomTagIcon tag="Instagram" />
      <PhantomTagIcon tag="HubSpot" />
    </div>
  ),
}
