import Box from '../atoms/Box'
import Text from '../atoms/Text'
import Heading from '../atoms/Heading'
import { centerContent } from '../styles/mixins'
import { MdArrowBack } from 'react-icons/lib/md'
import { Link } from 'react-router-dom'

interface NavigationBarProps {
  back?: string,
  selected?: string
}

export default class NavigationBar extends React.Component<NavigationBarProps, any> {
  constructor(props: any) {
    super(props)
  }

  render() {
    const { selected, back } = this.props
    return (
      <Box css={theme => ({
          width: '100%', 
          padding: 2,
          backgroundColor: theme.colors.white,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row', 
          position: 'relative',
        })}>
        <Link to="/">
          <Heading size={2}
                   marginHorizontal={1}
                   decoration="none"
                   color={selected == "home" ? "primary": "black"}>Home</Heading>
        </Link>
        <Link to="/listings">
          <Heading size={2}
                   marginHorizontal={1}
                   decoration="none"
                   color={selected == "listings" ? "primary": "black"}>Listings</Heading>
        </Link>
        <Link to="/about">
          <Heading size={2}
                   marginHorizontal={1}
                   decoration="none"
                   color={selected == "about" ? "primary": "black"}>About</Heading>
        </Link> 
        {back && (
           <Box position="absolute" top="0" left="0" height="100%" padding={1} justifyContent="center">
             <Link to={back}>
               <MdArrowBack size={50} color="black" />
             </Link>
           </Box>)} 
      </Box>
    )
  }
}

