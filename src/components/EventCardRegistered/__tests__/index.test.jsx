import { fireEvent, render, screen } from '@testing-library/react'
import { makeRequest } from '../../../util/makeRequest'

import React from 'react'
import EventCardRegistered from '..'
jest.mock('../../../util/makeRequest', () => ({
  makeRequest: jest.fn()

}))

describe('Tests for Event Card Registered', () => {
  it('shoud display when no seats are available', () => {
    const { container } = render(
      <EventCardRegistered
        id={1}
        registered={false}
        seatsAvailable={false}
        bookmarked={false}
      />
    )
    expect(screen.getByText('NO SEATS AVAILABLE')).toBeTruthy()
  })
  it('should display when the user is registered', () => {
    render(
      <EventCardRegistered
        id={1}
        registered={true}
        seatsAvailable={false}
        bookmarked={false}
      />
    )
    expect(screen.getByText('REGISTERED')).toBeTruthy()
  })
  it('should call bookmark api when  bookmark button is clicked', () => {
    makeRequest.mockResolvedValue({ data: { success: true } })
    render(
      <EventCardRegistered
        id={1}
        registered={false}
        seatsAvailable={true}
        bookmarked={false}
      />
    )
    fireEvent.click(screen.getByTestId('bookmark'))

    expect(makeRequest).toBeCalled()
  })
})
