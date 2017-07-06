import Icon from '../atoms/FAIcon'
import Box from '../atoms/Box'

const Amenities: React.SFC<{ amenities: string[] }> = ({ amenities }) => (
    <Box flexDirection="row" marginLeft={2}>
        {amenities.map((amenity: string, i:number) =>
            <Icon iconName={amenity.toLowerCase().trim()} key={i} margin={1 / 4} />)}
    </Box>
)
export default Amenities
