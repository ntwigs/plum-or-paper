import { SoundProvider } from './src/hooks/use-sound'
import { Main } from './src'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  return (
    <>
      <SoundProvider>
        <Main />
      </SoundProvider>
      <StatusBar style="auto" />
    </>
  )
}
