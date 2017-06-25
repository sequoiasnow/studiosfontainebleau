import { connect, MapStateToProps } from 'react-redux'
import Box from '../atoms/Box'
import Text from '../atoms/Text'
import LineBreak from '../atoms/LineBreak'
import { perfectBackgroundImage, centerContent } from '../styles/mixins'
import { SplashType, StoreShape, Language } from '../types'
import { changeLanguage } from '../redux/actions'

interface SplashProps {
  splash: SplashType,
  language: Language
  changeLanguage: (newLang: string) => void
} 


const Splash: React.SFC<SplashProps> = ({ splash, language, changeLanguage }) => {
  const LangText: React.SFC<{ lang: Language }> = ({ children, lang }) => 
    <Text onClick={() => changeLanguage(lang)} size={2} css={theme => ({
        textTransform: 'uppercase', 
        fontWeight: 'bold',
        fontFamily: theme.text.fontFamily,
        padding: 0.5,
        cursor: 'pointer',
        transition: 'colors 0.3s ease',
        color: language == lang ? theme.colors.warning : theme.colors.black,
        ':hover': { color: theme.colors.warning },
      })} children={children} /> 
  
    return (
    <Box css={theme => ({
        width: '100vw',  
        height: '100vh', 
        backgroundImage: splash.image ? `url(${splash.image})` : '',
        ...perfectBackgroundImage(true),
        ...centerContent()
      })}> 
      <Box maxWidth="600px">
        <Text size={6} css={theme => ({
            textAlign: 'center',
            fontFamily: theme.text.fontFamilyAlt,
            color: theme.colors.primary
          })}>
          {splash.title}
        </Text>
        <LineBreak marginOverlap={20} color="white" />
        <Text size={1} align="center" color="secondary">
          {splash.subtitle}
        </Text> 
        <Box flexDirection="row" justifyContent="center" marginTop={1} alignItems="center">
          <LangText lang="en">english</LangText>
          <Text size={3}> &middot; </Text>
          <LangText lang="fr">français</LangText>
        </Box> 
      </Box> 
    </Box>
    )
}

const mapStateToProps = (state: StoreShape) => ({
  splash: state.splash.filter(s => s.language == state.language)[0] || {},
  language: state.language
})

const mapDispatchToProps = {
  changeLanguage
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)
