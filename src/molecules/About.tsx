import Text from '../atoms/Text'
import Box from '../atoms/Box'
import { connect } from 'react-redux'


interface AboutProps {
   about: string
}

const About: React.SFC<AboutProps> = ({ about }) => (
    <Box maxWidth="800px" padding={1}>
        <Text>{about}</Text>
    </Box>
)

export default connect(About) 
