import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { Footer } from './Footer.component'

export default {
  title: 'Components/Footer',
  component: Footer
} as ComponentMeta<typeof Footer>

export const Default: ComponentStory<typeof Footer> = () =>
  <Footer />
