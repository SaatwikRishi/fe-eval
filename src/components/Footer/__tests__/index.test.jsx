import { render } from '@testing-library/react'
import Footer from '..'
import React from 'react'

describe('Tests for footer', () => {
  it('should render when component is called', () => {
    const { container } = render(<Footer />)
    expect(container).toMatchSnapshot()
  })
})
