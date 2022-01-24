import {Component} from 'react'

import MenuItemsList from '../MenuItemsList'

import ThemeContext from '../../context/ThemeContext'
import {SidebarContainer} from './styledComponent'

class Sidebar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const theme = isDarkTheme ? 'dark' : 'light'
          return (
            <SidebarContainer theme={theme}>
              <MenuItemsList />
              <div>
                <h1>hi</h1>
              </div>
            </SidebarContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Sidebar
