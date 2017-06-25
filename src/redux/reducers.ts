import { combineReducers } from 'redux'
import { ListingType, SplashType, Language, StoreShape } from '../types'
import { ActionLanguage, ActionUpdateArray } from './actions'


export const initialState: StoreShape = {
    language: 'en',
    listings: [],
    splash: [],
    sections: [],
    city: [],
} 

/// language reducer
export function language(lang: Language = 'en', action: ActionLanguage): Language {
    if ( action.type === 'UPDATE_LANGUAGE' )
        return action.language
    return lang
}

/// Conveniance function to create a reducer to respond to something from
/// makeRetrieveListAction
function makeReducerForUpdateArray(type: string) {
    return (array: any[] = [], action: ActionUpdateArray) => {
        if ( action.type === type )
            return action.data
        return array
    }
}

/// listings reducer
export const listings = makeReducerForUpdateArray('UPDATE_LISTINGS')

/// splash reducer
export const splash = makeReducerForUpdateArray('UPDATE_SPLASH')

/// sections reducer
export const sections = makeReducerForUpdateArray('UPDATE_SECTIONS')

/// sections reducer
export const city = makeReducerForUpdateArray('UPDATE_CITY')

export default combineReducers({
    listings,
    splash,
    sections,
    language,
    city
})
