import { StoreShape, Language, SectionType } from '../types'
/// These are simple ways to fetch data from the store for
/// mapStateToProps functions

/// Filters based on a matched language.
export const filterByLanguage = (store: StoreShape, list: { language: Language }[]) =>
    list.filter(a => a.language == store.language)
 
/// Finds a Section in the store.
export const getSection: (store: StoreShape, name: string) => SectionType =
    (store, name) =>
    store.sections.filter(s => s.language == store.language && s.name == name)[0] || {
        title: 'loading...',
        subtitle: 'loading...'
    }
