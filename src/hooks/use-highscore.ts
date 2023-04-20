import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'

const HIGHSCORE_STORAGE_KEY = '@score'

type SetHighscore = {
  score: number
}
export const useHighscore = () => {
  const [highscore, setHighscore] = useState(0)

  const storeHighscore = async ({ score }: SetHighscore) => {
    const highscore = await AsyncStorage.getItem(HIGHSCORE_STORAGE_KEY)
    const isNewHighscore = score > +highscore
    const newHighscore = isNewHighscore ? score : +highscore

    await AsyncStorage.setItem(HIGHSCORE_STORAGE_KEY, `${newHighscore}`)

    setHighscore(newHighscore)
  }

  return {
    storeHighscore,
    highscore,
  }
}
