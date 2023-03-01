import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDot } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

import './RadioInput.css'
import { ThemeContext } from '../../context/ThemeContext'
const RadioInput = ({ name, selected, onClick, isRight }) => {
  const { getCurrentTheme } = useContext(ThemeContext)
  return (
    <div onClick={onClick} className={isRight ? 'radio-ip-box' : 'radio-ip'} >
      <FontAwesomeIcon
       color={getCurrentTheme()}
        icon={selected ? faCircleDot : faCircle}
      />
      <label>{name}</label>
    </div>
  )
}

export default RadioInput
RadioInput.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  isRight: PropTypes.bool
}
