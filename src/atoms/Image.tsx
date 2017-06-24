import Box, { BoxProps, } from '../atoms/Box'

type ImageProps = BoxProps & {
  src: string 
}

/// Should eventually fix HTMLDivElement to an image, but Box type is not
/// dependent on as (maybe should be generic?).
const Image: React.SFC<ImageProps & React.HTMLProps<HTMLDivElement>> = (props) => {
  const { src, ...restProps } = props
  return (
    <Box as="img" src={src} {...restProps} />
  )
}
export default Image
