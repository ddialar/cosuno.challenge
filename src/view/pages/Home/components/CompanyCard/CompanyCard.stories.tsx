import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { CompanyCard } from './CompanyCard.component'
import companyLogo from './assets/monsters-inc-logo.webp'

export default {
  title: 'Pages/Home/CompanyCard',
  component: CompanyCard
} as ComponentMeta<typeof CompanyCard>

const Template: ComponentStory<typeof CompanyCard> = (args) =>
  <ul>
    <li className='px-4 py-2'>
      <CompanyCard {...args} />
    </li>
  </ul>

export const Default = Template.bind({})
Default.args = {
  logoUrl: companyLogo,
  name: 'Monsters, Inc.',
  city: 'Monstropolis',
  specialities: ['Energy']
}

export const WithoutLogo = Template.bind({})
WithoutLogo.args = {
  logoUrl: '',
  name: 'Monsters, Inc.',
  city: 'Monstropolis',
  specialities: ['Energy']
}

export const WithoutSpecialities = Template.bind({})
WithoutSpecialities.args = {
  logoUrl: companyLogo,
  name: 'Monsters, Inc.',
  city: 'Monstropolis',
  specialities: []
}
