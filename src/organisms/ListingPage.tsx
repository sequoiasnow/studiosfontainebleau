import Box from '../atoms/Box'
import Text from '../atoms/Text'
import Image from '../atoms/Image'
import Heading from '../atoms/Heading'
import Button from '../atoms/Button'
import LineBreak from '../atoms/LineBreak'
import Gallery from '../molecules/Gallery'
import { StoreShape, ListingType } from '../types'
import { connect } from 'react-redux'
import Amenities from '../molecules/Amenities'
import NavigationBar from '../molecules/NavigationBar'


interface StateProps {
  listing?: ListingType
}

interface OwnProps {
  index: number
}

type Props = OwnProps & StateProps

const ListingPage: React.SFC<Props> = (props) => {
    console.log(props)

    const { listing } = props

    return (
        <Box>
            <NavigationBar back="/">
                <Heading size={3}>{listing.name}</Heading>
            </NavigationBar>
            <Box padding={1} flexDirection="row">
                <Box width="60%" padding={1}> 
                    <Text>
                        {listing.description}
                    </Text>
                </Box>
                <Box width="40%" padding={1}>
                    <Image src={listing.primaryPicture} width="100%" height="auto" />
                    <Box paddingTop={1}>
                        <Amenities amenities={listing.amenities} />
                    </Box>
                    <LineBreak />
                    <Button onClick={() => alert('Show Booking')}>
                        Book
                    </Button>
                </Box>
            </Box>
            <LineBreak />
            <Gallery pictures={listing.pictures.map(image => ({ image }))} />
        </Box>
    )
}

const mapStateToProps = (state: StoreShape, ownProps?: OwnProps) => ({
    listing: state.listings[ownProps.index] || {
        name: 'Loading...',
        description: 'Loading...',
        pictures: [],
        primaryPicture: '',
        amenities: [],
        price: 'Loading...'
    }
})

export default connect<StateProps, {}, OwnProps>(mapStateToProps)(ListingPage)
