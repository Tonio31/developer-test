import type { Meta, StoryObj } from '@storybook/react'
import { Search } from 'lucide-react'
import { InputField } from './InputField'

const meta: Meta<typeof InputField> = {
  component: InputField,
  title: 'Components/InputField',
  decorators: [
    (Story) => (
      <div className="max-w-sm p-4">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof InputField>

export const Default: Story = {
  args: {
    placeholder: 'Type something...',
  },
}

export const WithIcon: Story = {
  args: {
    placeholder: 'Search...',
    icon: <Search size={16} />,
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
    icon: <Search size={16} />,
  },
}

export const WithValue: Story = {
  args: {
    defaultValue: 'LinkedIn Profile Scraper',
    icon: <Search size={16} />,
  },
}
