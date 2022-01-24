import {Component} from 'react'

import {IoMdClose} from '@react-icons/all-files/io/IoMdClose'
import {BsSearch} from '@react-icons/all-files/bs/BsSearch'

import Cookies from 'js-cookie'

import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoCard from '../VideoCard'

import ThemeContext from '../../context/ThemeContext'
import {
  MainBody,
  SidebarContainer,
  HomeContainer,
  GetPremium,
  BannerLogo,
  GetItButton,
  BannerText,
  CloseButton,
  SearchInput,
  SearchContainer,
  SearchButton,
  VideosList,
} from './styledComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    isPopup: true,
    searchInput: '',
    videosList: [],
  }

  componentDidMount = () => {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const updatedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onClickCloseBanner = () => {
    this.setState({isPopup: false})
  }

  adPopup = () => (
    <GetPremium>
      <CloseButton
        type="button"
        data-testid="close"
        onClick={this.onClickCloseBanner}
      >
        <IoMdClose size={16} />
      </CloseButton>
      <BannerLogo
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="nxt watch logo"
      />
      <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
      <GetItButton>GET IT NOW </GetItButton>
    </GetPremium>
  )

  updateSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  noVideosView = () => <h1>No Videos View</h1>

  successView = () => {
    const {videosList} = this.state

    if (videosList.length === 0) {
      return this.noVideosView()
    }

    return (
      <VideosList>
        {videosList.map(each => (
          <VideoCard key={each.id} videoDetails={each} />
        ))}
      </VideosList>
    )
  }

  failureView = () => <h1>Failure View</h1>

  Loader = () => <h1>Loader</h1>

  checkApiStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.successView()
      case apiStatusConstants.failure:
        return this.failureView()
      case apiStatusConstants.inProgress:
        return this.Loader()

      default:
        return null
    }
  }

  render() {
    const {isPopup, searchInput} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const theme = isDarkTheme ? 'dark' : 'light'
          const color = isDarkTheme ? '#f9f9f9' : '#181818'
          return (
            <>
              <Header />
              <MainBody>
                <SidebarContainer>
                  <Sidebar />
                </SidebarContainer>
                <HomeContainer data-testid="home" theme={theme}>
                  {isPopup && this.adPopup()}
                  <SearchContainer>
                    <SearchInput
                      theme={theme}
                      type="search"
                      placeholder="Search"
                      onChange={this.updateSearchInput}
                      value={searchInput}
                    />
                    <SearchButton
                      type="button"
                      theme={theme}
                      onClick={this.getVideos}
                    >
                      <BsSearch color={color} />
                    </SearchButton>
                  </SearchContainer>
                  {this.checkApiStatus()}
                </HomeContainer>
              </MainBody>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Home
