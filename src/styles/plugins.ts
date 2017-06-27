import { StyleAttribute, GlamorPlugin, plugins } from 'glamor'
import stickybits from 'stickybits'

declare module 'glamor' {
    export interface GlamorPlugin {
        selector: string,
        style: StyleAttribute
    }
    export const plugins: {
        add: (plugin: (orig: GlamorPlugin) => GlamorPlugin) => void
    }
}
 
function sticky({ selector, style }: GlamorPlugin): GlamorPlugin {
    if ( style['position'] && style['position'].trim() === 'sticky') {
        stickybits(selector)
    }
    return { selector, style }
}  
// plugins.add(sticky)

