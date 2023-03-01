import { faBookmark, faCircleCheck, faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { } from '@fortawesome'
import { faBookmark as notmarked } from '@fortawesome/free-regular-svg-icons'

import React from 'react'
import './EventCardRegistered.css'
import PropTypes from 'prop-types'
import { makeRequest } from '../../util/makeRequest'
import { BOOKMARK_EVENT } from '../../util/constants'

export default function EventCardRegistered ({
  id,
  registered,
  seatsAvailable,
  bookmarked
}) {
  const [bookmark, setBookmark] = React.useState(bookmarked)
  const handleBookMark = () => {
    makeRequest(BOOKMARK_EVENT(id, !bookmark)).then((res) => {
      setBookmark(!bookmark)
    })
  }

  return (
    <div className="home-card-action">
        {!registered && !seatsAvailable && (
                <span className="no-seats">

            <FontAwesomeIcon
              icon={faXmarkCircle}
              size="50px"
              color='#ECECAB'
            />
            <p className='no-seats' >NO SEATS AVAILABLE</p>
            </span>

        )}
              <span className="action-registered">

        {registered && (
          <>
            <FontAwesomeIcon
              icon={faCircleCheck}
              size="xl"
            />
            <p>REGISTERED</p>
          </>
        )}
      </span>

      <span onClick={handleBookMark} className="action-bookmarked">
        <FontAwesomeIcon icon={bookmark ? faBookmark : notmarked} size="xl" />
      </span>
    </div>
  )
}

EventCardRegistered.propTypes = {
  id: PropTypes.number,
  registered: PropTypes.bool,
  seatsAvailable: PropTypes.bool,
  bookmarked: PropTypes.bool
}
