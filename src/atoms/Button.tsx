import { Style } from './Box'
import Text from './Text'

export interface ButtonProps {
  onClick?: () => void,
  style?: Style,
  children: string
}

const Button: React.SFC<ButtonProps> = ({ onClick, style, children }) => (
  <Text css={[style, (theme) => ({
      padding: 1,
      backgroundColor: theme.colors.primary,
      textAlign: 'center', 
      borderRadius: theme.borderRadius,
      display: 'inline-block',
      cursor: 'pointer',
      color: theme.colors.white
    })]}> 
    {children}  
  </Text>
)
export default Button
