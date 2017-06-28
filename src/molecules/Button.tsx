import Box from '../atoms/Box'
import { StoreShape, Language } from '../types'
import Text from '../atoms/Text'
import { connect } from 'react-redux'

interface ButtonProps {
  onClick?: () => void,
  enTitle: string,
  frTitle: string
}

interface StateProps {
  language: Language
}

type Props = StateProps & ButtonProps

const Button: React.SFC<Props> = ({ onClick, enTitle, frTitle, language }) => (
  <Box onClick={onClick} css={theme => ({
      backgroundColor: 'transparent',
      paddingTop: 1 / 4,
      paddingBottom: 1 / 4,
      paddingLeft: 1 / 2,
      paddingRight: 1 / 2,
      borderRadius: 0,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.colors.primary,
      color: theme.colors.primary,
      transition: 'all 0.3s ease',
      cursor: 'pointer', 
      ':hover': {
        backgroundColor: theme.colors.primary,
        color: theme.colors.white,
        borderRadius: 20,
      }
    })}>
    <Text color="inherit">{language == 'en' ? enTitle : frTitle}</Text>
  </Box>
)

export default connect<StateProps, {}, ButtonProps>(({ language }) => ({ language }))(Button)
