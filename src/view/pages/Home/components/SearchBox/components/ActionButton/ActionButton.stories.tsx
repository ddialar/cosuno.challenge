import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { PlusIcon, FilterIcon } from '@components'
import { ActionButton } from './ActionButton.component'

export default {
  title: 'Pages/Home/SearchBox/ActionButton',
  component: ActionButton
} as ComponentMeta<typeof ActionButton>

const Template: ComponentStory<typeof ActionButton> = (args) => <ActionButton {...args} />

export const Principal = Template.bind({})
Principal.args = {
  text: 'Apply filters',
  icon: <FilterIcon className='w-4 h-4 mr-1' />,
  className: 'bg-blue-500 text-white border-blue-500'
}

export const Contrast = Template.bind({})
Contrast.args = {
  text: 'Add filters',
  icon: <PlusIcon className='w-4 h-4 mr-1' />,
  className: 'bg-white text-blue-500 border-blue-500'
}
