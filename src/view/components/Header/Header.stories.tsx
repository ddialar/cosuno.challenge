import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { Header } from './Header.component'

export default {
  title: 'Components/Header',
  component: Header
} as ComponentMeta<typeof Header>

export const Principal: ComponentStory<typeof Header> = () =>
  <Header />
