import EventCard from '..'
import { ThemeContext } from '../../../context/ThemeContext'
import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { makeRequest } from '../../../util/makeRequest'

jest.mock('../../../util/makeRequest', () => ({
  makeRequest: jest.fn()
}))

describe('Tests for Event Card', () => {
  it('should render when component is called and show registration button is true', () => {
    const { container } = render(
      <ThemeContext.Provider
        value={{
          getCurrentTheme: jest.fn()
        }}
      >
        <EventCard
          event={{
            id: 1,
            name: 'Battle of the Bands',
            description:
              "Get ready for Battle of the Bands, where the hottest up-and-coming rock groups will compete for the ultimate prize. With heart-pumping beats and electrifying performances, you won't want to miss this adrenaline-fueled event. Each band will bring their A-game, leaving everything on the stage for the chance to be crowned champion. Don't miss out on the most unforgettable rock competition of the year!",
            venue: 'All Stars Arena, Las Vegas, NV, USA',
            datetime: '2023-03-01T05:00:00.000Z',
            timezone: 'America/Los_Angeles',
            areSeatsAvailable: true,
            isRegistered: false,
            isBookmarked: false,
            imgUrl: 'https://i.ibb.co/3zbdvWX/battle-of-bands.jpg'
          }}
          showRegistration={true}
        />
      </ThemeContext.Provider>
    )
    expect(container).toMatchSnapshot()
  })
  it('should render when component is called and show registration button is false', () => {
    const { container } = render(
      <ThemeContext.Provider
        value={{
          getCurrentTheme: jest.fn()
        }}
      >
        <EventCard
          event={{
            id: 1,
            name: 'Battle of the Bands',
            description:
              "Get ready for Battle of the Bands, where the hottest up-and-coming rock groups will compete for the ultimate prize. With heart-pumping beats and electrifying performances, you won't want to miss this adrenaline-fueled event. Each band will bring their A-game, leaving everything on the stage for the chance to be crowned champion. Don't miss out on the most unforgettable rock competition of the year!",
            venue: 'All Stars Arena, Las Vegas, NV, USA',
            datetime: '2023-03-01T05:00:00.000Z',
            timezone: 'America/Los_Angeles',
            areSeatsAvailable: true,
            isRegistered: false,
            isBookmarked: false,
            imgUrl: 'https://i.ibb.co/3zbdvWX/battle-of-bands.jpg'
          }}
          showRegistration={false}
        />
      </ThemeContext.Provider>
    )
    expect(container).toMatchSnapshot()
  })

  it('should call handleEventRegistration when button is called', async () => {
    makeRequest.mockResolvedValue({ data: {} })
    const { container } = render(
      <ThemeContext.Provider
        value={{
          getCurrentTheme: jest.fn()
        }}
      >
        <EventCard
          event={{
            id: 1,
            name: 'Battle of the Bands',
            description:
              "Get ready for Battle of the Bands, where the hottest up-and-coming rock groups will compete for the ultimate prize. With heart-pumping beats and electrifying performances, you won't want to miss this adrenaline-fueled event. Each band will bring their A-game, leaving everything on the stage for the chance to be crowned champion. Don't miss out on the most unforgettable rock competition of the year!",
            venue: 'All Stars Arena, Las Vegas, NV, USA',
            datetime: '2023-03-01T05:00:00.000Z',
            timezone: 'America/Los_Angeles',
            areSeatsAvailable: true,
            isRegistered: false,
            isBookmarked: false,
            imgUrl: 'https://i.ibb.co/3zbdvWX/battle-of-bands.jpg'
          }}
          showRegistration={true}
        />
      </ThemeContext.Provider>
    )
    fireEvent.click(screen.getByTestId('btn')
    )
    await waitFor(() => {
      expect(screen.getByText('REGISTERED')).toBeTruthy()
    })
  })
})
