/// Get rid of some of the anoying padding and margin the document
/// is cursed with by default.
export default (cssGlobal: (selector: string, x: any) => void) => {
    cssGlobal('body, html', {
        padding: 0,
        margin: 0
    })
    cssGlobal('a', {
        textDecoration: 'none'
    })
}
