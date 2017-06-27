import Box from '../atoms/Box'
import Image from '../atoms/Image'
import Heading from '../atoms/Heading'
import Text from '../atoms/Text'

interface ImageCardProps {
  image: string,
  title?: string,
  description?: string,
}

const ImageCard: React.SFC<ImageCardProps> = (props) => (
  <Box css={theme => ({
      maxWidth: '500px',
      minWidth: '400px',
      width: '100%',
      padding: 1,
      '@media (max-width: 800px)': {
        maxWidth: '100vw',
        minWidth: '90vw'
      }
    })}>
    <Box borderRadius={5} backgroundColor="white">
      <Image src={props.image} width="100%" height="auto" />
      {props.description && 
       <Box padding={1}>
         <Text>{props.description}</Text>
       </Box>}
    </Box>
  </Box>
)
export default ImageCard
