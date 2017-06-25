import { renderRule } from './styles'
import currentTheme from './theme/current' 
import { ThemeProvider } from './atoms/Theme'
import { Provider } from 'react-redux'
import store from './redux/configureStore'
import fetchInitialData from './redux/fetchData'

import Splash from './organisms/Splash'
import Listings from './organisms/Listings'
import SectionDivider from './molecules/SectionDivider'
import City from './organisms/City'

// Get the initial data from the store.
fetchInitialData(store)


export default () => (
  <Provider store={store}>
    <ThemeProvider renderRule={renderRule} theme={currentTheme}>
      <div>
        <Splash />
        <SectionDivider name="listings" />
        <Listings />
        <SectionDivider name="city" />
        <City />
      </div> 
    </ThemeProvider>
  </Provider> 
)  
