import { Audio } from 'expo-av'
import { Sound } from 'expo-av/build/Audio'
import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

type ContextValue = {
  sound: Record<Sounds, Sound>
}

type Sounds = 'button' | 'score' | 'bgm' | 'gameover'
const useSounds = () => {
  const [sounds, setSounds] = useState<Record<Sounds, Sound>>()

  useEffect(() => {
    const loadSounds = async () => {
      const [button, score, bgm, gameover] = await Promise.all([
        Audio.Sound.createAsync(require('../assets/sound/button.wav')),
        Audio.Sound.createAsync(require('../assets/sound/score.wav')),
        Audio.Sound.createAsync(require('../assets/sound/bgm.mp3'), {
          isLooping: true,
          volume: 0.3,
        }),
        Audio.Sound.createAsync(require('../assets/sound/game-over.wav')),
      ])

      setSounds({
        button: button.sound,
        score: score.sound,
        bgm: bgm.sound,
        gameover: gameover.sound,
      })
    }

    loadSounds()
  }, [])

  return sounds
}

const Context = createContext<ContextValue>({} as unknown as ContextValue)

type Props = {
  children: ReactNode
}
export const SoundProvider = ({ children }: Props): JSX.Element => {
  const sound = useSounds()

  if (sound) {
    sound.bgm.playAsync()
  }

  return <Context.Provider value={{ sound }}>{children}</Context.Provider>
}

export const useSound = () => {
  const { sound } = useContext(Context)
  return sound
}
