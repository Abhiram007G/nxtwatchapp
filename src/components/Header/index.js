import {Component} from 'react'
import {FiSun} from '@react-icons/all-files/fi/FiSun'
import {FaMoon} from '@react-icons/all-files/fa/FaMoon'
import {GiHamburgerMenu} from '@react-icons/all-files/gi/GiHamburgerMenu'
import {FiLogOut} from '@react-icons/all-files/fi/FiLogOut'
import {IoMdClose} from '@react-icons/all-files/io/IoMdClose'
import {AiFillHome} from '@react-icons/all-files/ai/AiFillHome'
import {AiFillFire} from '@react-icons/all-files/ai/AiFillFire'
import {IoLogoGameControllerB} from '@react-icons/all-files/io/IoLogoGameControllerB'
import {RiMenuAddLine} from '@react-icons/all-files/ri/RiMenuAddLine'

import {withRouter, Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import ThemeContext from '../../context/ThemeContext'

import 'reactjs-popup/dist/index.css'

import './index.css'

import {
  NavMobileContainer,
  HeaderLogoImg,
  NavMobileIcons,
  IconButton,
  MenuList,
  MenuLink,
  MenuHeading,
  CloseButton,
} from './styledComponent'

class Header extends Component {
  state = {
    activeMenuLink: 'HOME',
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, changeTheme} = value

          const websiteLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const theme = isDarkTheme ? 'dark' : 'light'
          const color = isDarkTheme ? 'white' : 'black'

          const onClickLogout = () => {
            const {history} = this.props
            Cookies.remove('jwt_token')
            history.replace('/login')
          }

          return (
            <NavMobileContainer theme={theme}>
              <HeaderLogoImg src={websiteLogo} alt="website logo" />
              <NavMobileIcons>
                <IconButton type="button" onClick={() => changeTheme()}>
                  {isDarkTheme ? (
                    <FiSun color="white" size={22} />
                  ) : (
                    <FaMoon size={22} />
                  )}
                </IconButton>
                <Popup
                  modal
                  className="popup-content"
                  trigger={
                    <IconButton type="button">
                      <GiHamburgerMenu color={color} size={22} />
                    </IconButton>
                  }
                >
                  {close => (
                    <>
                      <CloseButton>
                        <IconButton type="button" onClick={() => close()}>
                          <IoMdClose size={20} />
                        </IconButton>
                      </CloseButton>
                      <MenuList>
                        <Link to="/" className="link">
                          <MenuLink>
                            <AiFillHome size={25} />
                            <MenuHeading theme={theme}>Home</MenuHeading>
                          </MenuLink>
                        </Link>
                        <Link to="/trending" className="link">
                          <MenuLink>
                            <AiFillFire size={25} />
                            <MenuHeading theme={theme}>Trending</MenuHeading>
                          </MenuLink>
                        </Link>
                        <Link to="/gaming" className="link">
                          <MenuLink>
                            <IoLogoGameControllerB size={25} />
                            <MenuHeading theme={theme}>Gaming</MenuHeading>
                          </MenuLink>
                        </Link>
                        <Link to="/saved-videos" className="link">
                          <MenuLink>
                            <RiMenuAddLine size={25} />
                            <MenuHeading theme={theme}>
                              Saved videos
                            </MenuHeading>
                          </MenuLink>
                        </Link>
                      </MenuList>
                    </>
                  )}
                </Popup>
                <IconButton type="button" onClick={onClickLogout}>
                  <FiLogOut color={color} size={22} />
                </IconButton>
              </NavMobileIcons>
            </NavMobileContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Header)
