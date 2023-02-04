// Write your code here
import ThemeContext from '../../context/ThemeContext'
import './index.css'
import Navbar from '../Navbar'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const hometheme = isDarkTheme ? 'home-container-dark' : 'home-container'

      const changeimage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const fontColor = isDarkTheme ? 'dark-theme-color' : 'light-theme-color'
      return (
        <div className={`home-container ${hometheme}`}>
          <Navbar />
          <div className="image-container">
            <img src={changeimage} alt="home" className="image" />
            <h1 className={fontColor}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
