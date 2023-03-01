import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import './Header.css'

export default function Header () {
  // eslint-disable-next-line no-unused-vars
  const { getCurrentTheme } = useContext(ThemeContext)
  console.log(getCurrentTheme())
  return (
    <header className="paddings" style={{
      backgroundColor: getCurrentTheme()
    }}>

      <p>EVENTIFY</p>
    </header>
  )
}
