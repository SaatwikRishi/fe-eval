import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import './CustomButton.css'
import { ThemeContext } from '../../context/ThemeContext'
export default function CustomButton ({ text, onClick }) {
  const { getCurrentTheme } = useContext(ThemeContext)
  return (
    <button onClick={onClick} style={{
      color: getCurrentTheme()
    }} className={'custom-btn'}>
      {text}
    </button>
  )
}

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func
}
