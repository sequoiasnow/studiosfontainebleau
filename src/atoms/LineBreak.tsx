import Box, { Style, withStyle, BoxProps } from './Box'

type LineBreakProps = BoxProps & {
  color?: string,
  marginOverlap?: number,
  marginVertical?: number,
  css?: Style | Array<Style>
}

/// Creats a simple <hr /> effect, marginOverlap makes it
/// stand out passed the content.
const LineBreak: React.SFC<LineBreakProps> = ({ color, marginOverlap, marginVertical = 1, css, ...rest}) => (
  <Box {...rest} css={withStyle(theme => ({
      height: '1px',
      width: '100%',
      marginTop: marginVertical,
      marginBottom: marginVertical,
      backgroundColor: color || theme.colors.secondary,
      ...(marginOverlap ? {
        width: `${100 + marginOverlap * 2}%`,
        marginLeft: `-${marginOverlap}%`,
        marginRight: `-${marginOverlap}%`,
      } : {})
    }), css)} />
)
export default LineBreak
