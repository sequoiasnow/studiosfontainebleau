import { Language, ListingType, SplashType } from '../types'
import { ThunkAction } from 'redux-thunk'
import database from '../firebase'
import * as firebase from 'firebase'

interface Action {
    type: string
}

/// The type of an update to a new language
export interface ActionLanguage extends Action {
    language: Language
}
export const changeLanguage: (lang: Language) => ActionLanguage = (lang) => ({
    type: 'UPDATE_LANGUAGE',
    language: lang
})

/// Conveniance function to grab an array from firebase and then dispatch an action.
export interface ActionUpdateArray extends Action {
    data: any[]
}
function makeRetrieveListAction(ref: string, type: string): ThunkAction<void, void, void> {
    return (dispatch) => {
        return database.ref(ref).once('value', (snap: firebase.database.DataSnapshot) => {
            dispatch({ type, data: snap.val().map((v: any, i: number) => ({
                ...v,
                index: i
            }))})
        }) 
    }
}

export const updateListings = () => makeRetrieveListAction('/listings', 'UPDATE_LISTINGS')
export const updateSplash   = () => makeRetrieveListAction('/splash', 'UPDATE_SPLASH')
export const updateSections = () => makeRetrieveListAction('/sections', 'UPDATE_SECTIONS')
export const updateCity     = () => makeRetrieveListAction('/city', 'UPDATE_CITY')
export const updateGeneral  = () => makeRetrieveListAction('/general', 'UPDATE_GENERAL')
