import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { UPDATE_THEME } from '../../util/constants'
import { makeRequest } from '../../util/makeRequest'
import CustomButton from '../CustomButton'
import './Footer.css'
export default function Footer () {
  // const [themeClick, setThemeClick] = React.useState(null)
  const { getCurrentTheme, themes, setCurrentTheme } = useContext(ThemeContext)

  const [themeChanged, setThemeChanged] = React.useState(false)
  const handleThemeClick = (color) => {
    const nt = themes.filter((theme) => theme.colorHexCode === color)[0].id
    setCurrentTheme(nt)
    setThemeChanged(nt)
  }
  const handleThemeChange = () => {
    makeRequest(UPDATE_THEME(themeChanged)).then((e) => {
      setThemeChanged(false)
    })
  }

  return (
    <footer className='paddings'
      style={{
        backgroundColor: getCurrentTheme()
      }}
    >
      <div
        className="footer-themes"
        style={{
          backgroundColor: getCurrentTheme()
        }}
      >
        <h2>THEMES</h2>
        {themes.map(
          (color, index) =>
            color.colorHexCode !== getCurrentTheme() && (
              <div
                data-testid='change-theme'
                onClick={() => handleThemeClick(color.colorHexCode)}
                key={index}
                style={{
                  backgroundColor: color.colorHexCode,
                  width: '40px',
                  height: '40px',
                  borderRadius: '5px'
                }}
              ></div>
            )
        )}
      </div>
    {
themeChanged && <CustomButton text='SAVE THEME' onClick={handleThemeChange} />}
    </footer>
  )
}
