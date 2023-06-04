import { render, screen } from '@testing-library/react'
import App from './Lecture12'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText('This is TDD')
  expect(linkElement).toBeInTheDocument()
})