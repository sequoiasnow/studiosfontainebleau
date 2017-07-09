import { updateSplash
         , updateListings
         , updateSections
         , updateCity
         , updateGeneral} from './actions'
import { Store } from 'redux'
import { StoreShape } from '../types'

export default function fetchInitialData(store: Store<{}>) {
    store.dispatch(updateSplash())
    store.dispatch(updateSections())
    store.dispatch(updateListings())
    store.dispatch(updateCity())
    store.dispatch(updateGeneral())
}
