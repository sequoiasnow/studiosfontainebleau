import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Box from './atoms/Box'
import Splash from './organisms/Splash'
import Listings from './organisms/Listings'
import SectionDivider from './molecules/SectionDivider'
import City from './organisms/City'
import Gallery from './molecules/Gallery'
import NavigationBar from './molecules/NavigationBar'
import ListingPage from './organisms/ListingPage'

export default () => (
  <Router>
    <Box>
      <Route exact path="/" component={() => (
          <div>
            <Splash />
            <SectionDivider name="listings" />
            <Listings />
            <SectionDivider name="city" />
            <City />
            <SectionDivider name="about" />
          </div> 
        )}/>
      <Route path="/listing/:index" component={({ match }: any) => {
              console.log(match, match.params.index) 
              return (
                  <Box>
                      <ListingPage index={parseInt(match.params.index, 10)} />
                  </Box>
          )
      }} />
    </Box>
  </Router>
)
