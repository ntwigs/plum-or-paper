import { StatusBar } from 'expo-status-bar'
import { Game } from './pages/game'
import { View, StyleSheet } from 'react-native'
import { usePreload } from './hooks/use-preload'
import { useCallback } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { theme } from './theme'
import { Background } from './components/background'

export const Main = () => {
  const isDone = usePreload()

  const onLayoutRootView = useCallback(async () => {
    if (isDone) {
      await SplashScreen.hideAsync()
    }
  }, [isDone])

  if (!isDone) {
    return <Background />
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Game />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.light,
  },
})
