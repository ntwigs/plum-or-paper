import { type TextProps, Text as BaseText, StyleSheet } from 'react-native'
import { theme } from '../../theme'

type Props = TextProps & {
  color: keyof typeof theme.color
}
export const Text = ({ children, color = 'dark', ...props }: Props) => {
  return (
    <BaseText
      {...props}
      style={{
        ...styles.text,
        color: theme.color[color],
      }}
    >
      {children}
    </BaseText>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    fontFamily: 'Nunito-Black',
  },
})
