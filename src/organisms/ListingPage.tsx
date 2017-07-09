import Box from '../atoms/Box'
import Text from '../atoms/Text'
import Image from '../atoms/Image'
import Heading from '../atoms/Heading'
import Button from '../atoms/Button'
import LineBreak from '../atoms/LineBreak'
import Gallery from '../molecules/Gallery'
import { StoreShape, ListingType, General } from '../types'
import { connect } from 'react-redux'
import Amenities from '../molecules/Amenities'
import NavigationBar from '../molecules/NavigationBar'
import DisqusThread from '../molecules/DisqusThread'


interface StateProps {
    listing?: ListingType,
    general?: General
}

interface OwnProps {
    index: number,
    path: string
}

type Props = OwnProps & StateProps

const ListingPage: React.SFC<Props> = (props) => {
    const { listing, general, path }: Props = props

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
                    <Box flexDirection="row" justifyContent="flex-end">
                        <a href={general && listing ? `mailto:${general.bookingEmail}?Subject=${general.howYouSayBook + '%20' + listing.name.replace(' ', '%20')}` : ''}
                           target="_top">
                            <Button>
                                {general ? general.howYouSayBook : ''}
                            </Button> 
                        </a>
                    </Box>
                </Box>
            </Box>
            <LineBreak />
            <Gallery pictures={listing.pictures.map(image => ({ image }))} />
            <LineBreak />
            <Box maxWidth="100vw"> 
                <Box maxWidth="800px" width="100%" marginLeft="auto" marginRight="auto">
                    {general && <DisqusThread
                                    id={(listing.name + ' ' + listing.language).toLowerCase().replace(' ', '-')}
                                    title="Example Title"
                                    path={path}
                                    shortname={general.disqusShortName}
                                    websiteUrl={general.disqusUrl} />}
                </Box>
            </Box>
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
    },
    general: state.general.filter(l => l.language == state.language)[0] || null
})





export default connect<StateProps, {}, OwnProps>(mapStateToProps)(ListingPage)
