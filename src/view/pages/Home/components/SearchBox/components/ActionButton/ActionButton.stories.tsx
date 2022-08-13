import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { PlusIcon, FilterIcon } from '@components'
import { ActionButton } from './ActionButton.component'

export default {
  title: 'Pages/Home/SearchBox/components/ActionButton',
  component: ActionButton
} as ComponentMeta<typeof ActionButton>

const Template: ComponentStory<typeof ActionButton> = (args) => <ActionButton {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Apply filters',
  icon: <FilterIcon className='w-4 h-4 mr-1' />,
  className: 'bg-blue-main text-white border-blue-main'
}

export const Contrast = Template.bind({})
Contrast.args = {
  text: 'Add filters',
  icon: <PlusIcon className='w-4 h-4 mr-1' />,
  className: 'bg-white text-blue-main border-blue-main'
}
