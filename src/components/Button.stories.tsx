import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'outline'],
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Use now',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Learn more',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button variant="outline">Learn more</Button>
      <Button variant="primary">Use now</Button>
    </div>
  ),
}
