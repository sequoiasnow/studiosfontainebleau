import { connect, MapStateToProps } from 'react-redux'
import Box from '../atoms/Box'
import Text from '../atoms/Text'
import LineBreak from '../atoms/LineBreak'
import { perfectBackgroundImage, centerContent } from '../styles/mixins'
import { SplashType, StoreShape } from '../types'
import { changeLanguage } from '../redux/actions'

interface SplashProps {
  splash: SplashType,
  changeLanguage: (newLang: string) => void
} 


const Splash: React.SFC<SplashProps> = ({ splash, changeLanguage }) => (
  <Box css={theme => ({
      width: '100vw',  
      height: '100vh', 
      backgroundImage: splash.image ? `url(${splash.image})` : '',
      ...perfectBackgroundImage(),
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
    </Box> 
  </Box> 
)

const mapStateToProps = (state: StoreShape) => ({
  splash: state.splash[0] || {}
})

const mapDispatchToProps = {
  changeLanguage
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)
