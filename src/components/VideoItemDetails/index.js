import Header from '../Header'
import Sidebar from '../Sidebar'

import {MainBody, SidebarContainer} from './styledComponent'

const VideoItemDetails = () => (
  <div>
    <Header />
    <MainBody>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>

      <h1>Video Item Route</h1>
    </MainBody>
  </div>
)
export default VideoItemDetails
