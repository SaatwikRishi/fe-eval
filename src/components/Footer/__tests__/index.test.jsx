import { fireEvent, getAllByTestId, render, screen, waitFor } from '@testing-library/react'
import Footer from '..'
import React from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import { makeRequest } from '../../../util/makeRequest'
jest.mock('../../../util/makeRequest', () => ({
  makeRequest: jest.fn()
}))

describe('Tests for footer', () => {
  it('should render when component is called', () => {
    const setCurrentTheme = jest.fn()

    const { container } = render(
      <ThemeContext.Provider value={{
        getCurrentTheme: jest.fn().mockReturnValue('#000000'),
        setCurrentTheme,
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
    const setCurrentTheme = jest.fn()
    const getCurrentTheme = jest.fn().mockReturnValue('#000000')
    render(
      <ThemeContext.Provider value={{
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
        <Footer />
      </ThemeContext.Provider>
    )
    const themeChangeBtn = screen.getAllByTestId('change-theme')[0]
    fireEvent.click(themeChangeBtn)
    expect(setCurrentTheme).toBeCalled()
  })
  it('should call the save theme when clicked', () => {
    render(
      <ThemeContext.Provider value={{
        setCurrentTheme: jest.fn(),
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
    makeRequest.mockResolvedValue({ data: {} })
    const themeChangeBtn = screen.getAllByTestId('change-theme')[0]
    fireEvent.click(themeChangeBtn)
    fireEvent.click(screen.getByTestId('btn'))
    waitFor(() => {
      expect(makeRequest).toHaveBeenCalled()
    })
  })
})
