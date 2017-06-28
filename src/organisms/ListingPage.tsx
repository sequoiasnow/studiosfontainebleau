import Box from '../atoms/Box'
import Text from '../atoms/Text'
import Gallery from '../molecules/Gallery'
import { StoreShape, ListingType } from '../types'
import { connect } from 'react-redux'


interface StateProps {
  listing?: ListingType
}

interface OwnProps {
  index: number
}

type Props = OwnProps & StateProps

const ListingPage: React.SFC<Props> = ({ listing }) => (
  <Box>
    <Text>Page Comming Soon!</Text>
    <Gallery pictures={listing.pictures.map(image =>({ image }))} />
  </Box>
)

const mapStateToProps = (state: StoreShape, ownProps?: OwnProps) => ({
  listing: state.listings.length > ownProps.index ? state.listings[ownProps.index]: null
})

export default connect<StateProps, {}, OwnProps>(mapStateToProps)(ListingPage)
