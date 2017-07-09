import { Style } from './Box'
import Text from './Text'

export interface ButtonProps {
  onClick?: () => void,
  css?: Style,
  children: string
}

const Button: React.SFC<ButtonProps> = ({ onClick, css, children }) => (
  <Text css={[css, (theme) => ({
          paddingRight: 1,
          paddingLeft: 1,
          paddingTop: 0.5,
          paddingBottom: 0.5,
          borderColor: theme.colors.primary,
          borderWidth: '1px',
          borderStyle: 'solid',
          textAlign: 'center', 
          borderRadius: theme.borderRadius,
          display: 'inline-block',
          cursor: 'pointer',
          color: theme.colors.primary,
          transition: 'all 0.3s linear',
          ':hover': {
              backgroundColor: theme.colors.primary,
              color: theme.colors.white
          }
    })]} onClick={onClick}> 
    {children}  
  </Text>
)
export default Button
