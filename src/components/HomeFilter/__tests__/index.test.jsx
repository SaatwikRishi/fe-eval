import HomeFilter from '..'
import { ThemeContext } from '../../../context/ThemeContext'
import React from 'react'
import { render } from '@testing-library/react'

describe('Tests for Home Filter', () => {
  const getCurrentTheme = jest.fn()
  const setCurrentTheme = jest.fn()
  it('should render the component', () => {
    const { container } = render(<ThemeContext.Provider value={{
      setCurrentTheme,
      getCurrentTheme,
      themes: [
        {
          id: 1,
          colorHexCode: '#000000'
        },
        {
          id: 2,
          colorHexCode: '#800080'
        },
        {
          id: 3,
          colorHexCode: '#0000FF'
        },
        {
          id: 4,
          colorHexCode: '#9B9999'
        }
      ]
    }}>
              <HomeFilter />
            </ThemeContext.Provider>)
    expect(container).toMatchSnapshot()
  })
})
