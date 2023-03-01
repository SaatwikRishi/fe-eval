import { render } from '@testing-library/react'
import Footer from '..'
import React from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

describe('Tests for footer', () => {
  it('should render when component is called', () => {
    const { container } = render(
      <ThemeContext.Provider value={{
        getCurrentTheme: jest.fn(),
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
        <Footer />
      </ThemeContext.Provider>
    )
    expect(container).toMatchSnapshot()
  })
  it('should show the save theme button when clicked', () => {
    const { getByTestId } = render(
      <ThemeContext.Provider value={{
        getCurrentTheme: jest.fn(),
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
        <Footer />
      </ThemeContext.Provider>
    )
    const saveThemeButton = getByTestId('save-theme')
    expect(saveThemeButton).toBeTruthy()
  })
})
