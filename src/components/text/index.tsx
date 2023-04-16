import { type TextProps, Text as BaseText, StyleSheet } from 'react-native'
import { theme } from '../../theme'

type Props = TextProps & {
  color?: keyof typeof theme.color
  isUppercase?: boolean
}
export const Text = ({
  children,
  color = 'dark',
  isUppercase = false,
  style,
  ...props
}: Props) => {
  return (
    <BaseText
      {...props}
      style={[
        styles.text,
        styles.uppercase,
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
  uppercase: {
    textTransform: 'uppercase',
  },
})
