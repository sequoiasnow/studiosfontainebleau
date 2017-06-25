import { rgba } from '../styles/functions'
import Box from '../atoms/Box'
import LineBreak from '../atoms/LineBreak'
import Text from '../atoms/Text'
import Icon from '../atoms/FAIcon'
import Heading from '../atoms/Heading'
import Image from '../atoms/Image'
import { ListingType, Language } from '../types'
import { connect } from 'react-redux'
import { MdAddAPhoto } from 'react-icons/lib/md'

interface ListingProps {  
  listing: ListingType,
  color?: string 
}

const Listing: React.SFC<ListingProps> = ({ listing, color = '#000' }) => (
  <Box padding={1}> 
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
      <Box css={theme => ({ backgroundColor: rgba(color, 0.05) })}> 
        <Box padding={1} flexDirection="row" justifyContent="space-between" alignItems="center">
          <Heading size={1} color="primary" align="left">{listing.name}</Heading>
          <Box flexDirection="row" marginLeft={2}>
            {listing.amenities.map((amenity, i) =>
              <Icon iconName={amenity.toLowerCase().trim()} key={i} margin={1 / 4} />)}
          </Box>
        </Box>
        <LineBreak color="white" marginVertical={0} />
        <Box padding={1}>
          <Text>{listing.description}</Text> 
        </Box>
        <LineBreak color="white" marginVertical={0} />
        <Box padding={1} flexDirection="row" alignItems="center"> 
          <Text marginLeft="2px">{listing.price}</Text>
        </Box>  
      </Box>
    </Box>
  </Box>
)

export default Listing
