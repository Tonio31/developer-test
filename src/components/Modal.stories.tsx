import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'Components/Modal',
  args: {
    onClose: () => {},
  },
}

export default meta

type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {
    children: (
      <>
        <h2 className="text-2xl font-bold text-gray-900">Welcome</h2>
        <p className="text-gray-600">This is the live coding test for Phantombuster</p>
        <p className="text-gray-500 text-sm">Close the modal to start the test</p>
      </>
    ),
  },
}
