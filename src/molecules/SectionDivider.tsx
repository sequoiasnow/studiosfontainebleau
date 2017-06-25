import Box from '../atoms/Box'
import Text from '../atoms/Text'
import LineBreak from '../atoms/LineBreak'
import { centerContent } from '../styles/mixins'
import { SectionType, StoreShape } from '../types'
import { getSection } from '../redux/getData'
import { connect } from 'react-redux'


interface SectionProps {
  name: string,
  section?: SectionType
}

const SectionDivider: React.SFC<SectionProps> = ({ section }) => (
  <Box css={theme => ({
      ...centerContent(),
      padding: 3
    })}>
    <Box>
      <Text size={4} padding={1} fontFamily="alt" color="secondary" align="center">{section.title}</Text>
      <LineBreak marginOverlap={20} />
      <Text size={1} color="black" align="center">{section.subtitle}</Text>
    </Box>
  </Box> 
) 

const mapStateToProps = (state: StoreShape, ownProps: SectionProps) => ({
  section: getSection(state, ownProps.name)
})

export default connect(mapStateToProps)(SectionDivider)
