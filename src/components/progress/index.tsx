import { View, StyleSheet, Dimensions } from 'react-native'
import { theme } from '../../theme'
import { useEffect } from 'react'
import { useSpring, animated } from '@react-spring/native'

const width = Dimensions.get('window').width

export const Progress = () => {
  const unit = width / 100
  const [progress, setProgress] = useSpring(() => ({
    from: { x: -100 * unit },
    to: { x: 0 },
  }))

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress.start()
    }, 100)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <View style={styles.container}>
      <animated.View
        style={[
          styles.progress,
          {
            transform: [
              {
                translateX: progress.x,
              },
            ],
          },
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: theme.color.darker,
    width: '100%',
    height: 20,
    borderTopWidth: 3,
    borderTopColor: theme.color.darker,
  },
  progress: {
    backgroundColor: theme.color.dark,
    position: 'relative',
    left: 0,
    width: '100%',
    height: '100%',
  },
})
