import Box from '../atoms/Box'
import Slider from '../molecules/Slider'
import ImageCard from '../molecules/ImageCard'
import { CityType, StoreShape } from '../types'
import { connect } from 'react-redux'
import { filterByLanguage } from '../redux/getData'

interface CityProps {
  cards: CityType[]
}

const City: React.SFC<CityProps> = ({ cards }) => (
  <Box width="100%" marginVertical={1}>
    <Slider>
      {cards.map(({ language, ...card}, i) => <ImageCard key={i} {...card} />)}
    </Slider> 
  </Box> 
)

export default connect((store: StoreShape) => ({
  cards: store.city.filter(c => c.language == store.language)
}))(City)
  
