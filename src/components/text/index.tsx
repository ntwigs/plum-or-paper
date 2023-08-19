import { type TextProps, Text as BaseText, StyleSheet } from 'react-native'
import { theme } from '../../theme'

type Props = TextProps & {
  color?: keyof typeof theme.color
  size?: 'large' | 'medium' | 'larger'
  align?: 'left' | 'right' | 'center'
}
export const Text = ({
  children,
  color = 'dark',
  style,
  size = 'medium',
  align = 'center',
  ...props
}: Props) => {
  return (
    <BaseText
      numberOfLines={1}
      adjustsFontSizeToFit
      {...props}
      style={[
        styles.text,
        styles.uppercase,
        styles[size],
        {
          color: theme.color[color],
          textAlign: align,
        },
        style,
      ]}
    >
      {children}
    </BaseText>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Nunito-Black',
  },
  medium: {
    fontSize: 32,
  },
  large: {
    fontSize: 48,
  },
  larger: {
    fontSize: 64,
  },
  uppercase: {
    textTransform: 'uppercase',
  },
})
