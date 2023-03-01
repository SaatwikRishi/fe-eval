import Footer from '../../components/Footer'
import Header from '../../components/Header'
import React, { useEffect } from 'react'
import EventCard from '../../components/EventCard'
import './EventDetails.css'
import { useNavigate, useParams } from 'react-router-dom'
import { makeRequest } from '../../util/makeRequest'
import { GET_EVENT_BY_ID } from '../../util/constants'

export default function EventDetailsPage () {
  const [loading, setLoading] = React.useState(true)
  const [event, setEvent] = React.useState(null)
  const { id } = useParams()

  const navigate = useNavigate()
  useEffect(() => {
    makeRequest(GET_EVENT_BY_ID(id)).then(res => {
      setEvent(res)
    })
      .catch(_ => {
        navigate('/error/500')
      })
      .finally(e => setLoading(false))
  }, [])

  if (loading || !event) return <div>Loading</div>
  return (
    <div className="page">
      <Header />
      <div className="event-details home-body paddings">
        <span className='card-details'>
        <EventCard event={event} showRegistration={true} />

        </span>
      </div>
      <Footer />
    </div>
  )
}
