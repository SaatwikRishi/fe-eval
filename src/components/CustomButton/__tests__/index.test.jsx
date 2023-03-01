import { fireEvent, render, screen } from '@testing-library/react'
import CustomButton from '..'
import React from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

describe('Tests for Custom Button', () => {
  it('should render the button', () => {
    const { getByText } = render(
      <ThemeContext.Provider value={{ getCurrentTheme: jest.fn() }}>
        <CustomButton text="Click Me" />
      </ThemeContext.Provider>
    )
    expect(getByText('Click Me')).toBeTruthy()
  })

  it('should call the onClick function when clicked', () => {
    const onClick = jest.fn()
    render(
      <ThemeContext.Provider value={{ getCurrentTheme: jest.fn() }}>
        <CustomButton text="Click Me" />
      </ThemeContext.Provider>
    )
    fireEvent.click(screen.getByTestId('btn'))
    expect(onClick).toHaveBeenCalled()
  })
})
