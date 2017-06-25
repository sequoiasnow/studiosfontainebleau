import Text, { TextProps } from './Text'

type IconProps = TextProps & {
  iconName: string
}

const Icon: React.SFC<IconProps> = ({ iconName, ...restProps }) =>
  <Text className={`fa fa-${iconName}`} {...restProps} />
export default Icon
