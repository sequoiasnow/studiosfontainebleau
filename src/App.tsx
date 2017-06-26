import { renderRule } from './styles'
import currentTheme from './theme/current' 
import { ThemeProvider } from './atoms/Theme'
import { Provider } from 'react-redux'
import store from './redux/configureStore'
import fetchInitialData from './redux/fetchData'

import Routes from './router'

// Get the initial data from the store.
fetchInitialData(store)


export default () => (
  <Provider store={store}>
    <ThemeProvider renderRule={renderRule} theme={currentTheme}>
      <Routes />
    </ThemeProvider>
  </Provider> 
)  
