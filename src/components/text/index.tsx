import { type TextProps, Text as BaseText, StyleSheet } from 'react-native'
import { theme } from '../../theme'

type Props = TextProps & {
  color?: keyof typeof theme.color
  isUppercase?: boolean
  size?: 'large' | 'medium'
}
export const Text = ({
  children,
  color = 'dark',
  isUppercase = false,
  style,
  size,
  ...props
}: Props) => {
  return (
    <BaseText
      {...props}
      style={[
        styles.text,
        styles.uppercase,
        size === 'large' ? styles.large : styles.medium,
        {
          color: theme.color[color],
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
    fontSize: 32,
    fontFamily: 'Nunito-Black',
    textAlign: 'center',
  },
  medium: {
    fontSize: 32
  },
  large: {
    fontSize: 48,
  },
  uppercase: {
    textTransform: 'uppercase',
  },
})
