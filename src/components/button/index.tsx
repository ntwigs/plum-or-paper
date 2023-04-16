import {
  Pressable,
  type PressableProps,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from 'react-native'
import { theme } from '../../theme'

type Props = PressableProps & {
  style?: StyleProp<ViewStyle>
}
export const Button = ({ children, style = {}, ...props }: Props) => {
  return (
    <Pressable {...props} style={[styles.container, style]}>
      {children}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.color.dark,
    borderRadius: 16,
    borderWidth: 3,
    borderColor: theme.color.darker,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignSelf: 'center',
  },
})
