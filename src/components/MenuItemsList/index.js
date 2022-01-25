import {Link} from 'react-router-dom'
import {AiFillHome} from '@react-icons/all-files/ai/AiFillHome'
import {AiFillFire} from '@react-icons/all-files/ai/AiFillFire'
import {IoLogoGameControllerB} from '@react-icons/all-files/io/IoLogoGameControllerB'
import {RiMenuAddLine} from '@react-icons/all-files/ri/RiMenuAddLine'

import ActiveMenuContext from '../../context/ActiveMenuContext'
import ThemeContext from '../../context/ThemeContext'

import {MenuList, MenuLink, MenuHeading} from './styledComponent'

const activeMenuConstants = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

const MenuItemsList = () => {
  const menuList = value => {
    const {isDarkTheme} = value
    const theme = isDarkTheme ? 'dark' : 'light'

    return (
      <ActiveMenuContext.Consumer>
        {activeMenuValue => {
          const {activeMenu, changeActiveMenu} = activeMenuValue

          const iconColor = isDarkTheme ? '#424242' : '#7e858e'
          const iconActive = '#ff0b37'

          return (
            <MenuList>
              <MenuLink
                theme={theme}
                isActive={activeMenu === activeMenuConstants.home}
                onClick={() => changeActiveMenu(activeMenuConstants.home)}
                key="HOME"
              >
                <AiFillHome
                  size={25}
                  color={
                    activeMenu === activeMenuConstants.home
                      ? iconActive
                      : iconColor
                  }
                />
                <Link to="/" className="link">
                  <MenuHeading theme={theme}>Home</MenuHeading>
                </Link>
              </MenuLink>

              <MenuLink
                theme={theme}
                isActive={activeMenu === activeMenuConstants.trending}
                onClick={() => changeActiveMenu(activeMenuConstants.trending)}
                key="TRENDING"
              >
                <AiFillFire
                  size={25}
                  color={
                    activeMenu === activeMenuConstants.trending
                      ? iconActive
                      : iconColor
                  }
                />
                <Link to="/trending" className="link">
                  <MenuHeading theme={theme}>Trending</MenuHeading>
                </Link>
              </MenuLink>

              <MenuLink
                theme={theme}
                isActive={activeMenu === activeMenuConstants.gaming}
                onClick={() => changeActiveMenu(activeMenuConstants.gaming)}
                key="GAMING"
              >
                <IoLogoGameControllerB
                  size={25}
                  color={
                    activeMenu === activeMenuConstants.gaming
                      ? iconActive
                      : iconColor
                  }
                />
                <Link to="/gaming" className="link">
                  <MenuHeading theme={theme}>Gaming</MenuHeading>
                </Link>
              </MenuLink>

              <MenuLink
                theme={theme}
                isActive={activeMenu === activeMenuConstants.savedVideos}
                onClick={() =>
                  changeActiveMenu(activeMenuConstants.savedVideos)
                }
                key="SAVED_VIDEOS"
              >
                <RiMenuAddLine
                  size={25}
                  color={
                    activeMenu === activeMenuConstants.savedVideos
                      ? iconActive
                      : iconColor
                  }
                />
                <Link to="/saved-videos" className="link">
                  <MenuHeading theme={theme}>Saved videos</MenuHeading>
                </Link>
              </MenuLink>
            </MenuList>
          )
        }}
      </ActiveMenuContext.Consumer>
    )
  }

  return (
    <ThemeContext.Consumer>{value => menuList(value)}</ThemeContext.Consumer>
  )
}

export default MenuItemsList
