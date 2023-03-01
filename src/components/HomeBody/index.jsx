import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GET_EVENTS } from '../../util/constants'
import { makeRequest } from '../../util/makeRequest'
import EventCard from '../EventCard'
import HomeFilter from '../HomeFilter'
import './HomeBody.css'

export default function HomeBody () {
  const onFilterClick = (name, value) => {
    if (value) {
      const filteredEvents = events.filter((e) => e.name.includes(value))
      setCurrentEvents(filteredEvents)
      return
    }
    if (name === 'all') {
      setCurrentEvents(events)
    } else {
      const filteredEvents = events.filter((e) => e[name] === true)
      setCurrentEvents(filteredEvents)
    }
  }

  const [events, setEvents] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [currentEvents, setCurrentEvents] = React.useState([])
  const navigate = useNavigate()
  useEffect(() => {
    makeRequest(GET_EVENTS())
      .then((res) => {
        setEvents(res)
        setCurrentEvents(res)
        setTimeout(() => {
          setLoading(false)
        })
      }, 100)
      .catch((e) => {
        setLoading(false)
        navigate('/error/500')
      })
  }, [])
  if (loading) return <div>Loading</div>
  return (
    <div className="home-body paddings">
      <HomeFilter onFilterClick={onFilterClick} />
      <div className="home-cards">
        {currentEvents.sort((a, b) => {
          return new Date(a.datetime) - new Date(b.datetime)
        }).map((event) => (
          <Link style={{
            textDecoration: 'none'
          }} key={Math.random()} to={'/events/' + event.id}>
            <span className="home-event-card">
              <EventCard event={event} />
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
