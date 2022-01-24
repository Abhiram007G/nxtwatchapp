import {Component} from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'

import ThemeContext from '../../context/ThemeContext'
import {MainBody, SidebarContainer, TrendingContainer} from './styledComponent'

class Trending extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainBody>
          <SidebarContainer>
            <Sidebar />
          </SidebarContainer>
          <ThemeContext.Consumer>
            {value => {
              const {isDarkTheme} = value

              return (
                <TrendingContainer>
                  <div>hi</div>
                </TrendingContainer>
              )
            }}
          </ThemeContext.Consumer>
        </MainBody>
      </div>
    )
  }
}
export default Trending
