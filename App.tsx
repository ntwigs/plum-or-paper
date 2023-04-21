import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { useCallback } from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { theme } from './src/theme'
import { Navigation } from './src/components/navigation'
import { SoundProvider } from './src/hooks/use-sound'

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
    <SoundProvider>
      <View style={styles.container}>
        <Navigation />
        <StatusBar style="auto" />
      </View>
    </SoundProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.light,
  },
})
