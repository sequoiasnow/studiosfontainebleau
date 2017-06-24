import { rgba } from '../styles/functions'
import Box from '../atoms/Box'
import Text from '../atoms/Text'
import Heading from '../atoms/Heading'
import Image from '../atoms/Image'
import { ListingType } from '../types'
import { MdAddAPhoto } from 'react-icons/lib/md'

interface ListingProps {  
  listing: ListingType,
  color?: string
}

const Listing: React.SFC<ListingProps> = ({ listing, color = 'black' }) => (
  <Box borderRadius={5} overflow="hidden">
    <Box position="relative"> 
      <Image src={listing.primaryPicture} css={theme => ({
          width: '100%',
          height: 'auto', 
        })} />
      <Box css={theme => ({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'all 0.3s ease',
          backgroundColor: rgba('#fff', 0),
          opacity: 0,
          cursor: 'pointer',
          ':hover': {
            opacity: 1,
            backgroundColor: rgba(color, 0.5),
          }
        })}>
        <MdAddAPhoto size={150} color="white" />
      </Box>
    </Box>
    <Box backgroundColor="white">
      <Box padding={0.5}>
        <Heading size={1} color="primary" align="center">{listing.name}</Heading>
      </Box>
    </Box>
    <Box backgroundColor="secondary" flexDirection="row" justifyContent="center" flexWrap="wrap">
      {listing.amenities.map((amenity, i) =>
        <Text size={0.5} css={theme => ({
            backgroundColor: rgba(theme.colors.white, 0.3),
            paddingLeft: 0.5,
            paddingRight: 0.5,
            paddingTop: 1 / 4,
            paddingBottom: 1 / 4,
            margin: 0.5, 
          })}>{amenity}</Text>)}
    </Box>
  </Box>
)

export default Listing
