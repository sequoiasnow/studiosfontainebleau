import Box from '../atoms/Box'
import Text from '../atoms/Text'
import Heading from '../atoms/Heading'
import { perfectBackgroundImage } from '../styles/mixins'

interface SliderImageCardProps {
  image: string,
  description?: string,
  title?: string
}

export default class SliderImageCard extends React.Component<SliderImageCardProps, {}> {
  constructor(props: any) {
    super(props)

    this.state = { description: false }
  }
  
  render() {
    const { image, description, title }  = this.props
    return (
      <Box css={theme => ({
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          position: 'relative',
          '&:hover > *': {
            transform: 'translateY(0)',
            opacity: 1,
          },
          ...perfectBackgroundImage(image),
        })}> 
        <Box css={theme => ({
            width: '100%', 
            height: 'auto', 
            backgroundColor: theme.colors.white, 
            top: 0,
            left: 0,
            position: 'absolute',
            padding: 1, 
            transition: 'all 0.7s ease',
            transform: 'translateY(-400px)',
            opacity: 0,
          })}>
            <Heading size={2}>{title}</Heading>
            <Text>{description}</Text>
          </Box>
      </Box>
    )
  } 
}
                                                                                 
