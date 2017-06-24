import { withStyle } from './Box'
import Text, { TextProps } from './Text'

const Heading: React.SFC<TextProps> = ({ css, children, ...restProps }) => (
  <Text {...restProps} css={withStyle(theme => ({
      fontWeight: 'bold',
      fontFamily: theme.text.fontFamilyAlt
    }), css)}>
    {children}
  </Text>
)
export default Heading
