import type { Meta, StoryObj } from '@storybook/react'
import { PhantomCard } from './PhantomCard'

const meta: Meta<typeof PhantomCard> = {
  component: PhantomCard,
  title: 'Components/PhantomCard',
  decorators: [
    (Story) => (
      <div className="bg-gray-50 p-6 max-w-sm">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof PhantomCard>

export const LinkedIn: Story = {
  args: {
    phantom: {
      id: 'linkedin-profile-scraper',
      title: 'LinkedIn Profile Scraper',
      description: 'Extract data from LinkedIn profiles automatically: name, job title, company, location, and more.',
      slots: 10,
      tags: ['LinkedIn'],
    },
  },
}

export const SalesNavigator: Story = {
  args: {
    phantom: {
      id: 'sales-navigator-search-export',
      title: 'Sales Navigator Search Export',
      description: 'Export leads from LinkedIn Sales Navigator searches and get verified emails for each profile.',
      slots: 10,
      tags: ['Sales Navigator'],
    },
  },
}

export const Google: Story = {
  args: {
    phantom: {
      id: 'google-maps-search-export',
      title: 'Google Maps Search Export',
      description: 'Extract business listings from Google Maps searches including name, phone, address, and website.',
      slots: 10,
      tags: ['Google'],
    },
  },
}

export const Instagram: Story = {
  args: {
    phantom: {
      id: 'instagram-profile-scraper',
      title: 'Instagram Profile Scraper',
      description: 'Extract data from public Instagram profiles: bio, follower count, following, and more.',
      slots: 10,
      tags: ['Instagram'],
    },
  },
}

export const HubSpot: Story = {
  args: {
    phantom: {
      id: 'hubspot-crm-enricher',
      title: 'HubSpot CRM Enricher',
      description: 'Automatically enrich your HubSpot contacts with LinkedIn data and verified email addresses.',
      slots: 5,
      tags: ['HubSpot'],
    },
  },
}

export const MultipleTags: Story = {
  args: {
    phantom: {
      id: 'hubspot-linkedin-enricher',
      title: 'HubSpot LinkedIn Enricher',
      description: 'Match your HubSpot contacts to LinkedIn profiles and enrich them with up-to-date professional data.',
      slots: 5,
      tags: ['HubSpot', 'LinkedIn'],
    },
  },
}

export const FewSlots: Story = {
  args: {
    phantom: {
      id: 'google-spreadsheet-import',
      title: 'Google Spreadsheet Import',
      description: 'Import data from a Google Spreadsheet to use as input for any Phantom automation.',
      slots: 1,
      tags: ['Google'],
    },
  },
}
