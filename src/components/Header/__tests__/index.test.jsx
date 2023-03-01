import { render } from '@testing-library/react'
import Header from '..'
import React from 'react'

describe('Tests for Header', () => {
  it('should render when component is called', () => {
    const { container } = render(<Header />)
    expect(container).toMatchSnapshot()
  })
})
