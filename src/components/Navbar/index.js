// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const backGround = isDarkTheme
        ? 'navbar-container-dark'
        : 'navbar-container'
      const fontColor = isDarkTheme ? 'dark-theme-color' : 'light-theme-color'

      const logo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const buttonImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const changeTheme = () => {
        toggleTheme()
      }

      return (
        <nav className={`navbar-container ${backGround}`}>
          <img className="logo-website" src={logo} alt="website logo" />
          <ul className="ul-list">
            <Link to="/" className="links">
              <li className={`${fontColor}`}>Home</li>
            </Link>
            <Link to="/about" className="links">
              <li className={`${fontColor}`}>About</li>
            </Link>
          </ul>
          <button
            className="btn-class"
            data-testid=" theme"
            onClick={changeTheme}
            type="button"
          >
            <img className="logo-website" src={buttonImage} alt="theme" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
