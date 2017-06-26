import { connect } from 'react-redux'
import Box from '../atoms/Box'
import { centerContent } from '../styles/mixins'
import Image from '../atoms/Image'
import Text from '../atoms/Text' 
import { StoreShape } from '../types'
import ImageCard from './ImageCard'

interface Picture {
  description: string
}

type OwnProps = {
  index: number
}

type StateProps = {
  pictures: {
    image: string,
    description?: string,
  }[]
}

type GalleryProps = StateProps & OwnProps

class Gallery extends React.Component<GalleryProps, {}> {
  constructor(props: GalleryProps) {
    super(props)
  }

  render() {
    const { pictures }: GalleryProps = this.props
    return (
      <Box width="100%" css={theme => centerContent()}>
        <Box flexDirection="row" justifyContent="space-between" alignItems="flex-start">
          <Box flexDirection="column" padding={1}>
            {pictures.filter((p, i) => i % 3 == 0).map(
               (picture, i) => <ImageCard key={i} {...picture} />)} 
          </Box>
          <Box flexDirection="column" padding={1} marginHorizontal={-2}> 
            {pictures.filter((p, i) => i % 3 == 1).map(
               (picture, i) => <ImageCard key={i} {...picture} />)}
          </Box>
          <Box flexDirection="column" padding={1}>
            {pictures.filter((p, i) => i % 3 == 2).map(
               (picture, i) => <ImageCard key={i} {...picture} />)}
          </Box> 
        </Box>
      </Box>
    )
  }
}

const mapStateToProps = (state: StoreShape, ownProps?: OwnProps) => {
  console.log(ownProps)
  console.log(state.listings) 
  return { pictures: state.listings.length > ownProps.index ? state.listings[ownProps.index].pictures.map(p => ({
    image: p
  })) : [] }
}

// Fix this later
export default connect<StateProps, {}, OwnProps>(mapStateToProps)(Gallery as any)

