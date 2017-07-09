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
    price: string | number,
    comments?: string,
    index?: number
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

/// The type of a typical section header.
export interface SectionType {
    title: string,
    subtitle: string,
    language?: Language,
    name?: string // unique key.
}

/// A typical location nearby in the city or paris.
export interface CityType {
    title: string,
    description: string,
    image: string,
    language?: Language
}

/// General settings for the application.
export interface General {
    disqusShortName: string,
    disqusUrl: string,
    bookingEmail: string,
    howYouSayBook: string,
    howYouSayMoreInfo: string,
    language: Language
}

/// The shape of the redux store
export interface StoreShape {
    language: Language,
    listings: Array<ListingType>,
    splash: Array<SplashType>,
    sections: Array<SectionType>,
    city: Array<CityType>,
    general: Array<General>
}
