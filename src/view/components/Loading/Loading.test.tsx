import type { ComponentProps } from 'react'
import { render } from '@testing-library/react'
import { Loading } from './Loading.component'
import '@testing-library/jest-dom'

const setup = (properties: ComponentProps<typeof Loading>) =>
  render(<Loading {...properties} />)

describe('Loading component', () => {
  it('renders successfully', () => {
    const testingText = 'Testing Text'
    const { getByLabelText } = setup({ text: testingText })

    const spinner = getByLabelText('spinner icon')
    expect(spinner).toBeInTheDocument()
    const message = getByLabelText('loading message')
    expect(message).toBeInTheDocument()
    expect(message).toHaveTextContent(testingText)
  })
})
