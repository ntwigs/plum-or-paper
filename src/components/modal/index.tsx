import { StyleSheet, View } from 'react-native'
import { theme } from '../../theme'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  isVisible?: boolean
}

export const Modal = ({ isVisible, children }: Props) => {
  if (!isVisible) {
    return null
  }

  return (
    <View style={styles.backdrop}>
      <View style={styles.container}>{children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1
  },
  container: {
    width: '85%',
    backgroundColor: theme.color.light,
    borderRadius: 16,
    alignSelf: 'center',
    borderWidth: 3,
    borderColor: theme.color.darker,
    padding: 24
  },
})
