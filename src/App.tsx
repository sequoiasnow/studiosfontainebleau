import { renderRule } from './styles'
import currentTheme from './theme/current' 
import { ThemeProvider } from './atoms/Theme'
import { Provider } from 'react-redux'
import store from './redux/configureStore'
import fetchInitialData from './redux/fetchData'

import Splash from './organisms/Splash'
import Listings from './organisms/Listings'

// Get the initial data from the store.
fetchInitialData(store)


export default () => (
  <Provider store={store}>
    <ThemeProvider renderRule={renderRule} theme={currentTheme}>
      <div>
        <Splash />
        <Listings />
      </div> 
    </ThemeProvider>
  </Provider> 
)  
