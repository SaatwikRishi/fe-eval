import React, { useContext } from 'react'
import RadioInput from '../RadioInput'
import './HomeFilter.css'
import {
  faMagnifyingGlass,
  faChevronUp, faChevronDown,
  faFilter
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ThemeContext } from '../../context/ThemeContext'
import PropTypes from 'prop-types'
export default function HomeFilter ({ onFilterClick }) {
  const [filterOpen, setFilterOpen] = React.useState(false)
  const { getCurrentTheme } = useContext(ThemeContext)
  const [name, setName] = React.useState('')
  const items = [
    ['ALL', 'REGISTERED'],
    ['BOOKMARKED', 'SEATS AVAILABLE']
  ]

  const [selected, setSelected] = React.useState(-1)

  const handleSelectionChange = (item) => {
    setSelected(selected === item ? -1 : item)
    switch (item) {
      case 'ALL':
        onFilterClick('all')
        break
      case 'REGISTERED':
        onFilterClick('isRegistered')
        break
      case 'BOOKMARKED':
        onFilterClick('isBookmarked')
        break
      case 'SEATS AVAILABLE':
        onFilterClick('areSeatsAvailable')
        break
      default:
        break
    }
  }

  return (
    <div className="home-filter">
      <div className="filter-left">
        <div className="filter-text" style={{ color: getCurrentTheme() }} onClick={() => setFilterOpen(!filterOpen)}>
          <FontAwesomeIcon
            className="text-icon"
            icon={faFilter}
            color={getCurrentTheme()}
          />
          <h3>FILTER</h3>
          <FontAwesomeIcon
            className="text-icon"
            color={getCurrentTheme()}
            icon={filterOpen ? faChevronUp : faChevronDown}
          />
        </div>
       {filterOpen && <>
        {items[0].map((item) => (
          <RadioInput
            key={Math.random()}
            name={item}
            onClick={() => handleSelectionChange(item)}
            selected={item === selected}
          />
        ))}
       </>}
      </div>

   {filterOpen && <div className="filter-right">
        <div className="filter-search">
          <input
            type="search"
            onChange={(e) => {
              setName(e.target.value)
            }}
            style={{
              color: getCurrentTheme()
            }}
            placeholder="EVENT NAME"
          />
          <FontAwesomeIcon
            className="search-icon"
            onClick={(e) => onFilterClick('name', name)}
            color={getCurrentTheme()}
            icon={faMagnifyingGlass}
          />
        </div>
        {items[1].map((item) => (
          <RadioInput
            key={Math.random()}
            name={item}
            onClick={() => handleSelectionChange(item)}
            isRight={true}
            selected={item === selected}
          />
        ))}
      </div> }

    </div>
  )
}

HomeFilter.propTypes = {
  onFilterClick: PropTypes.func
}
