import {MdDarkMode, MdOutlineDarkMode, MdOutlineLightMode} from 'react-icons/md'

import ThemeContext from '../../context/ThemeContext'

import {NavMobileContainer, HeaderLogoImg} from './styledComponent'

const Header = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, changeTheme} = value

      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const theme = isDarkTheme ? 'dark' : 'light'

      return (
        <NavMobileContainer>
          <HeaderLogoImg src={websiteLogo} alt="website logo" />
          <div>Abhiram</div>
        </NavMobileContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default Header
