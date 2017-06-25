import Box from '../atoms/Box'
import Image from '../atoms/Image'
import Heading from '../atoms/Heading'
import Text from '../atoms/Text'

interface ImageCardProps {
  image: string,
  color?: string,
  title: string,
  description: string,
}

const ImageCard: React.SFC<ImageCardProps> = ({ description, title, color, image }) => (
  <Box css={theme => ({
      maxWidth: '900px',
      width: '100%',
      height: 'auto',
      backgroundColor: color || theme.colors.grey,
      flexDirection: 'row',
      '@media (max-width: 800px)': {
        width: '100vw'
      }
    })}>
    <Image src={image} css={() => ({
        width: '60%', 
        height: 'auto', 
      })} />
    <Box padding={1} width="40%">
      <Heading size={3} color="primary" marginBottom={1}>{title}</Heading>
      <Text>
        {description}
      </Text>
    </Box>
  </Box>
)

export default ImageCard
