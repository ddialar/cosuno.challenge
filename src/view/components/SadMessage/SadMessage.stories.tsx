import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { SadMessage } from './SadMessage.component'

export default {
  title: 'Components/SadMessage',
  component: SadMessage
} as ComponentMeta<typeof SadMessage>

export const Principal: ComponentStory<typeof SadMessage> = () =>
  <SadMessage text='Sad message example' />
