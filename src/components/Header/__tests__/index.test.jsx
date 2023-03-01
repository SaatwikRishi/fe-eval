import { render } from '@testing-library/react'
import Header from '..'
import React from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

describe('Tests for Header', () => {
  it('should render when component is called', () => {
    const { container } = render(
      <ThemeContext.Provider value={{ getCurrentTheme: jest.fn() }}>

    <Header />
    </ThemeContext.Provider>

    )
    expect(container).toMatchSnapshot()
  })
})
