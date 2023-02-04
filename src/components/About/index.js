// Write your code here
// Write your code here
import ThemeContext from '../../context/ThemeContext'
import './index.css'
import Navbar from '../Navbar'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const hometheme = isDarkTheme ? 'home-container-dark' : 'home-container'

      const changeimage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const fontColor = isDarkTheme ? 'dark-theme-color' : 'light-theme-color'
      return (
        <div className={`home-container ${hometheme}`}>
          <Navbar />
          <div className="image-container">
            <img src={changeimage} alt="about" className="image" />
            <h1 className={fontColor}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
