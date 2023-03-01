import React, { useContext } from 'react'

import './EventCard.css'
import PropTypes from 'prop-types'
import EventCardRegistered from '../EventCardRegistered'
import CustomButton from '../CustomButton'
import { ThemeContext } from '../../context/ThemeContext'
import { makeRequest } from '../../util/makeRequest'
import { REGISTER_FOR_EVENT } from '../../util/constants'
export default function EventCard ({ event, showRegistration = false }) {
  const { getCurrentTheme } = useContext(ThemeContext)
  const eventDate = new Date(event.datetime)
  const [registered, setRegistered] = React.useState(event.isRegistered)

  const handleEventRegistration = async () => {
    makeRequest(REGISTER_FOR_EVENT(event.id, !registered)).then(res => {
      setRegistered(!registered)
    })
  }

  return (
    <div
      className="home-card"
      style={{
        // backgroundColor: getCurrentTheme()
      }}
    >
      <img src={event.imgUrl} />
      <div
        className="home-card-info"
        style={{
          backgroundColor: getCurrentTheme()
        }}
      >
        <div className="basic-info">
          <h3>{event.name}</h3>
          <h5>{event.description}</h5>
          <p>
            <strong>VENUE: </strong>
            {event.venue}
          </p>
          <p>
            <strong>DATE: </strong>
            {eventDate.toDateString('DD MM YYYY', { timeZone: event.timezone })}
          </p>
        </div>
        <EventCardRegistered bookmarked={event.isBookmarked} id={event.id} registered={registered} seatsAvailable={event.areSeatsAvailable} />
        {event.areSeatsAvailable === true && showRegistration && <div> <CustomButton text= {registered ? 'UNREGISTER' : 'REGISTER'} onClick={handleEventRegistration} /> </div>}

      </div>
    </div>
  )
}
EventCard.propTypes = {
  event: PropTypes.object.isRequired,
  showRegistration: PropTypes.object.isRequired
}
