import Header from '../Header'
import Sidebar from '../Sidebar'

import {MainBody, SidebarContainer} from './styledComponent'

const SavedVideos = () => (
  <div>
    <Header />
    <MainBody>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>

      <h1>Saved Videos Route</h1>
    </MainBody>
  </div>
)
export default SavedVideos
