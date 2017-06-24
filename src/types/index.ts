/// The available languages that are presented.
export type Language = 'en' | 'fr' 

/// The basic type of a simple listing and all information that
/// it contains.
export interface ListingType {
    name: string,
    description: string,
    pictures: Array<string>,
    primaryPicture: string,
    amenities: Array<string>,
    price: string | number
    language?: Language
}

/// The overall shape of the information given in the splashpage.
export interface SplashType {
    picture: string,
    subtitle: string,
    image: string,
    title: string,
    language?: Language
}

/// The shape of the redux store
export interface StoreShape {
    language: Language,
    listings: Array<ListingType>,
    splash: Array<SplashType>
}
