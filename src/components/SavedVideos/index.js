import {RiMenuAddLine} from '@react-icons/all-files/ri/RiMenuAddLine'

import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  MainBody,
  SidebarContainer,
  SavedVideosContainer,
  SavedMenuContainer,
  IconContainer,
  MenuHeading,
  VideosList,
  NoVideosContainer,
  NoVideosImg,
  FailureText,
} from './styledComponent'

import TrendingVideoCard from '../TrendingVideoCard'
import SavedVideosContext from '../../context/SavedVideosContext'
import ThemeContext from '../../context/ThemeContext'

const SavedVideos = () => {
  const savedList = themeValue => {
    const {isDarkTheme} = themeValue

    const theme = isDarkTheme ? 'dark' : 'light'

    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {savedVideosList} = value
          if (savedVideosList.length === 0) {
            return (
              <NoVideosContainer>
                <NoVideosImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                  alt="no saved videos"
                />

                <FailureText theme={theme}>No saved video found</FailureText>
                <FailureText theme={theme} as="p">
                  You can save your videos while watching them
                </FailureText>
              </NoVideosContainer>
            )
          }
          return (
            <VideosList>
              {savedVideosList.map(each => (
                <TrendingVideoCard videoDetails={each} key={each.id} />
              ))}
            </VideosList>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const theme = isDarkTheme ? 'dark' : 'light'
        return (
          <div>
            <Header />
            <MainBody>
              <SidebarContainer>
                <Sidebar />
              </SidebarContainer>
              <SavedVideosContainer data-testid="savedVideos" theme={theme}>
                <SavedMenuContainer theme={theme}>
                  <IconContainer theme={theme}>
                    <RiMenuAddLine size={40} color="#ff0b37" />
                  </IconContainer>
                  <MenuHeading theme={theme}>Saved Videos</MenuHeading>
                </SavedMenuContainer>
                {savedList(value)}
              </SavedVideosContainer>
            </MainBody>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideos
