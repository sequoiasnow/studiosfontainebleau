import { rgba } from '../styles/functions'
import Box from '../atoms/Box'
import LineBreak from '../atoms/LineBreak'
import Text from '../atoms/Text'
import Button from '../atoms/Button'
import Heading from '../atoms/Heading'
import Image from '../atoms/Image' 
import ImageCard from './ImageCard'
import { ListingType, Language } from '../types'
import { connect } from 'react-redux'
import { MdAddAPhoto } from 'react-icons/lib/md'
import { Link } from 'react-router-dom'
import Amenities from './Amenities'

interface ListingProps {  
    listing: ListingType, 
    color?: string,
    learnMoreText: string
}


// const Listing: React.SFC<ListingProps> = ({ listing, color = '#000' }) => (
export default class Listing extends React.Component<ListingProps, {}> {
  render() {
      const { listing, color = '#000', learnMoreText }: ListingProps = this.props
      return (
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
                          <Link to={`/listing/${listing.index}`}>
                              <MdAddAPhoto size={150} color="white" />
                          </Link>
                      </Box>
                  </Box> 
                  <Box css={theme => ({ backgroundColor: rgba(color, 0.05) })}> 
                      <Box padding={1} flexDirection="row" justifyContent="space-between" alignItems="center">
                          <Heading size={1} color="primary" align="left">{listing.name}</Heading>
                          <Amenities amenities={listing.amenities} />
                      </Box>
                      <LineBreak color="white" marginVertical={0} />
                      <Box padding={1}>
                          <Text>{listing.description.length > 300 ? listing.description.substr(0, 300) + '...' : listing.description}</Text> 
                      </Box>
                      <LineBreak color="white" marginVertical={0} />
                      <Box padding={1} flexDirection="row" alignItems="center" justifyContent="space-between"> 
                          <Text marginLeft="2px">{listing.price}</Text>
                          <Link to={`/listing/${listing.index}`}>
                              <Button>{learnMoreText}</Button>
                          </Link>
                      </Box> 
                  </Box>
              </Box>
          </Box> 
      ) 
  }
}
