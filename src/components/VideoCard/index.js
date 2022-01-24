import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import {
  VideoCardContainer,
  Thumbnail,
  ChannelLogo,
  ThumbnailText,
  VideoTitle,
  VideoTextContainer,
  VideoDetailsContainer,
  VideoDetailsContainer2,
  VideoDetailsText,
} from './styledComponent'

import './index.css'

const VideoCard = props => {
  const {videoDetails} = props
  const {thumbnailUrl, channel, viewCount, title, id, postedAt} = videoDetails
  const {name, profileImageUrl} = channel
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const theme = isDarkTheme ? 'dark' : 'light'

        return (
          <VideoCardContainer>
            <Link to={`/videos/${id}`} className="link">
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <ThumbnailText>
                <div>
                  <ChannelLogo src={profileImageUrl} />
                </div>
                <VideoTextContainer>
                  <VideoTitle theme={theme}>{title}</VideoTitle>
                  <VideoDetailsContainer>
                    <VideoDetailsText>{name}</VideoDetailsText>
                    <VideoDetailsContainer2>
                      <VideoDetailsText>{viewCount} views</VideoDetailsText>
                      <VideoDetailsText>posted</VideoDetailsText>
                    </VideoDetailsContainer2>
                  </VideoDetailsContainer>
                </VideoTextContainer>
              </ThumbnailText>
            </Link>
          </VideoCardContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoCard
