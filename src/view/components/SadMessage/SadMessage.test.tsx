import type { ComponentProps } from 'react'
import { render } from '@testing-library/react'
import { SadMessage } from './SadMessage.component'
import '@testing-library/jest-dom'

const setup = (properties: ComponentProps<typeof SadMessage>) =>
  render(<SadMessage {...properties} />)

describe('SadMessage component', () => {
  it('renders successfully', () => {
    const testingText = 'Testing Text'
    const { getByLabelText } = setup({ text: testingText })

    const emoji = getByLabelText('sad emoji')
    expect(emoji).toBeInTheDocument()
    const message = getByLabelText('sad message')
    expect(message).toBeInTheDocument()
    expect(message).toHaveTextContent(testingText)
  })
})
