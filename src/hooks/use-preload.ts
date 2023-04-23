import { useFonts } from 'expo-font'
import { useSound } from './use-sound'

const useLoadFont = () => {
  const [fontsLoaded] = useFonts({
    'Nunito-Black': require('../assets/fonts/Nunito-Black.ttf'),
  })

  return Boolean(fontsLoaded)
}

const useLoadSound = () => {
  const isLoaded = useSound()
  return Boolean(isLoaded)  
}

export const usePreload = () => {
  const hasFontLoaded = useLoadFont()
  const hasSoundLoaded = useLoadSound()

  return hasFontLoaded && hasSoundLoaded
}
