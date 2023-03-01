import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeRequest } from '../util/makeRequest'
import { GET_THEMES } from '../util/constants'
import { useNavigate } from 'react-router-dom'

export const ThemeContext = React.createContext()

export default function ThemeState ({ children }) {
  const [themes, setThemes] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [currentTheme, setCurrentTheme] = React.useState(1)
  const getCurrentTheme = () => {
    const th = themes.filter((e) => e.id === currentTheme)[0].colorHexCode
    return th
  }

  const navigate = useNavigate()

  useEffect(() => {
    makeRequest(GET_THEMES())
      .then((e) => {
        setCurrentTheme(e.preferredThemeId)

        setThemes(e.themes)
        setTimeout(() => {
          setLoading(false)
        })
      }, 300)
      .catch((e) => {
        navigate('/error/500')
        setLoading(false)
      })
  }, [])
  if (loading) return <div>Loading</div>
  return (
    <ThemeContext.Provider value={{ themes, setCurrentTheme, getCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeState.propTypes = {
  children: PropTypes.node.isRequired
}
