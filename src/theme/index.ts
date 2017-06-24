/**
The site should have the following color options, these allow a moderate
color pallete, for one off colors, directly style the components. */
export interface Colors {
    primary: string,
    secondary: string,
    success: string,
    warning: string,
    error: string,
    black: string,
    white: string,
    grey: string,
    [x: string]: string
}

/**
 * A single color, which can be a variety of strings.
 */
export type Color
    = 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
    | 'black'
    | 'white'
    | 'grey'

// If a number, its mutlitpled by typography rhythm, else keep the value.
export type MaybeRhythm = number | string

/**
 * A simple type for all style objects.
 */
export interface StyleObject {
    [x: string]: MaybeRhythm | StyleObject
}

/**
The theme contains all variables that should be used across the site. By 
implementing vertical rhythm, much of the sites consistancy can be accomplieshed
without access to theme variables. */
export interface Theme {
    colors: Colors,
    typography: {
        rhythm: (r: number) => number,
        lineHeight: number,
        fontSize: (r: number) => number
    },
    text: {
        // The standard text color for the entire site.
        color: string,
        // The alternate color for a darker background.
        colorAlt: string,
        // The primary font for the entire site, consistancy is important
        // but if you added another font it would be fontFamilyAlt
        fontFamily: string,
        fontFamilyAlt: string,
    }
    borderRadius: number,
    // The syntax colors allow the coloring of parts of speech and regular syntax
    syntaxHighlighting: {
        comment: string,
        string: string,
        number: string,
        constant: string,
        variable: string,
        keyword: string,
        storageType: string,
        className: string,
        functionName: string,
        functionArg: string,
        tagName: string,
        tagAttribute: string,
        library: string,
        invalid: string,
        depracted: string,
        deliminator: string
    }
}
