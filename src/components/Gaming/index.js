import Header from '../Header'
import Sidebar from '../Sidebar'

import {MainBody, SidebarContainer} from './styledComponent'

const Gaming = () => (
  <div>
    <Header />
    <MainBody>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>

      <h1>Gaming Route</h1>
    </MainBody>
  </div>
)
export default Gaming
