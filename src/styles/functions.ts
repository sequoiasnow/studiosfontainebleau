import * as Color from 'color'

/// Takes a hexidecimal, or other value, and adds some type of
/// alpha value to it using the `color` libray.
export const rgba = (hex: string, alpha: number) =>
    Color(hex).alpha(alpha).toString()
