import { StatusBar } from 'expo-status-bar'
import { Text, StyleSheet } from 'react-native'
import { Background } from './src/components/background'
import { useCallback } from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { theme } from './src/theme'
import { Loading } from './src/pages/loading'

export default function App() {
  const [fontsLoaded] = useFonts({
    'Nunito-Black': require('./src/assets/fonts/Nunito-Black.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <Background onLayout={onLayoutRootView}>
      <Loading />
      <StatusBar style="auto" />
    </Background>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontFamily: 'Nunito-Black',
    color: theme.color.darker
  }
})
