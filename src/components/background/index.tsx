import { View, StyleSheet, type ViewProps } from 'react-native'
import { theme } from '../../theme'

export const Background = ({ children, ...props }: ViewProps) => {
  return <View style={styles.container} {...props}>{children}</View>
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
