import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { Loading } from './Loading.component'

export default {
  title: 'Components/Loading',
  component: Loading
} as ComponentMeta<typeof Loading>

export const Principal: ComponentStory<typeof Loading> = () =>
  <Loading text='loading messages example' />
