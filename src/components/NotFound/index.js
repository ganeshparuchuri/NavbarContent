// Write your code here
// Write your code here
import ThemeContext from '../../context/ThemeContext'
import './index.css'
import Navbar from '../Navbar'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const hometheme = isDarkTheme ? 'home-container-dark' : 'home-container'

      const fontColor = isDarkTheme ? 'dark-theme-color' : 'light-theme-color'
      return (
        <div className={`home-container ${hometheme}`}>
          <Navbar />
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="images"
            />
            <h1 className={fontColor}>Lost Your Way</h1>
            <p className={fontColor}>We cannot seem to find the page</p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
