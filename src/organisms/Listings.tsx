import Box from '../atoms/Box'
import Listing from '../molecules/Listing'
import { ListingType, StoreShape } from '../types'
import { connect } from 'react-redux'

interface ListingsProps {
  listings: ListingType[]
}

const Listings: React.SFC<ListingsProps> = ({ listings }) => (
  <Box css={theme => ({
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-start',
      '@media (max-width: 800px)': {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
      }
    })}>
    {listings.map((listing: ListingType, i: number) => (
       <Listing key={i} index={i} listing={listing} color={(['#e6da7b', '#9a5cb4', '#f19b2c'])[i]}/>
     ))}
  </Box> 
)

const mapStateToProps: (s: StoreShape) => ListingsProps = (state)  => ({
  listings: state.listings.filter(l =>  l.language == state.language)
})

export default connect(mapStateToProps)(Listings)
