import { StyleSheet, type ViewProps } from 'react-native'
import {animated, type AnimatedStyle } from '@react-spring/native'
import { theme } from '../../theme'

type Props = Omit<ViewProps, 'style'> & {
  style: AnimatedStyle<ViewProps> & ViewProps['style']
}
export const Background = ({ children, style, ...props }: Props) => {
  return <animated.View style={[styles.container, style]} {...props}>{children}</animated.View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.light,
    alignItems: 'center' ,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
})
