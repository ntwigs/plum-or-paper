import { Background } from '../../components/background'
import { Progress } from '../../components/progress'
import { View, StyleSheet } from 'react-native'
import { Button } from '../../components/button'
import { Text } from '../../components/text'
import { Modal } from '../../components/modal'
import { useState, useRef, useEffect } from 'react'
import { questions } from '../../questions'
import LottieView from 'lottie-react-native'
import { useSpringRef } from '@react-spring/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const useHighscore = () => {
  const [highscore, setHighscore] = useState<number>(0)

  const setScoreInStorage = async (score: number) => {
    const prev = await AsyncStorage.getItem('@score')
    if (score > +prev) {
      AsyncStorage.setItem('@score', `${score}`)
    }
  }

  const getScoreFromStorage = async () => {
    const score = await AsyncStorage.getItem('@score')
    setHighscore(+score)
  }

  return {
    highscore,
    setScoreInStorage,
    getScoreFromStorage,
  }
}

export const Game = () => {
  const animation = useRef(null)
  const ref = useSpringRef<{ x: number }>()
  const [points, setPoints] = useState(0)

  const question = questions[Math.floor(Math.random() * questions.length)]
  const answer = Math.floor(Math.random() * 2) > 0 ? 'plum' : 'paper'
  const word = question[answer]

  const [isVisible, setVisible] = useState(false)

  const { highscore, getScoreFromStorage, setScoreInStorage } = useHighscore()

  useEffect(() => {
    ref.current[0].start()
  }, [])

  const selectAnswer = (choice: typeof answer) => () => {
    if (answer === choice) {
      ref.current[0].start({ reset: true })
      animation.current.play()
      setPoints((points) => points + 1)
    } else {
      setScoreInStorage(points)
      setVisible(true)
      ref.current[0].start({
        config: {
          duration: undefined,
        },
      })
    }
  }

  const selectPlum = selectAnswer('plum')
  const selectPaper = selectAnswer('paper')

  const restart = () => {
    setScoreInStorage(points)
    setPoints(0)
    setVisible(false)
    ref.current[0].start({
      reset: true,
      config: {
        duration: 2000,
      },
    })
  }

  const onTimeout = () => {
    setVisible(true)
  }

  useEffect(() => {
    if (isVisible) {
      getScoreFromStorage()
    }
  }, [isVisible])

  return (
    <>
      <Background>
        <View style={styles.container}>
          <Text color="darker">{points}</Text>
          <Text color="dark">{word}</Text>
          <View>
            <Button onPress={selectPlum}>
              <Text color="darker">PLUM</Text>
            </Button>
            <View style={styles.space} />
            <Button onPress={selectPaper}>
              <Text color="darker">PAPER</Text>
            </Button>
          </View>
          <Progress ref={ref} onTimeout={onTimeout} />
        </View>
      </Background>
      <View pointerEvents="none" style={styles.animationContainer}>
        <LottieView
          loop={false}
          style={styles.animation}
          ref={animation}
          source={require('../../assets/animations/confetti.json')}
        />
      </View>
      <HighscoreModal
        isVisible={isVisible}
        answer={answer}
        language={question.language}
        points={points}
        restart={restart}
        word={word}
      />
    </>
  )
}

type HighscoreModalProps = {
  isVisible: boolean
  word: string
  answer: string
  language: string
  points: number
  restart: () => void
}

type Props = {
  prev: number
}
const Highscore = ({ prev }: Props) => {
  const [highscore, setHighscore] = useState(0)

  useEffect(() => {
    const getHighscore = async () => {
      const score = await AsyncStorage.getItem('@score')
      if (prev > +score) {
        setHighscore(prev)
        await AsyncStorage.setItem('@score', `${prev}`)
      } else {
        setHighscore(+score)
      }
    }

    getHighscore()
  }, [])

  return <Text style={{ textAlign: 'right' }}>{highscore}</Text>
}

const HighscoreModal = ({
  isVisible,
  word,
  answer,
  language,
  points,
  restart,
}: HighscoreModalProps) => {
  return (
      <Modal isVisible={isVisible}>
        <Text color="dark" style={styles.gameover}>
          GAME OVER
        </Text>
      <Text color="darker">{language}</Text>
        <View style={styles.modalBottom}>
          <Text color="dark">{word} MEANS</Text>
          <Text color="darker">{answer}</Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingBottom: 40,
          }}
        >
          <View>
            <Text color="darker">Score</Text>
            <Text
              style={{
                textAlign: 'left',
              }}
            >
              {points}
            </Text>
          </View>
          <View>
            <Text color="darker">Best</Text>
            <Text
              style={{
                textAlign: 'right',
              }}
            >
              {highscore}
            </Text>
          </View>
        </View>
        <Button style={styles.modalButton} onPress={restart}>
          <Text color="darker">RESTART</Text>
        </Button>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  gameover: {
    position: 'absolute',
    top: -50,
    alignSelf: 'center',
  },
  animation: {
    width: '100%',
    transform: [{ scale: 1.5 }],
  },
  animationContainer: {
    flex: 1,
    position: 'absolute',
    height: '100%',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButton: {
    position: 'absolute',
    bottom: -32,
  },
  modalBottom: {
    paddingTop: 24,
    paddingBottom: 40,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  play: {
    width: 88,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  space: {
    height: 16,
  },
})
