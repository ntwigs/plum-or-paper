import { Background } from '../../components/background'
import { Progress, TIMER_DURATION } from '../../components/progress'
import { View, StyleSheet } from 'react-native'
import { Button } from '../../components/button'
import { Text } from '../../components/text'
import { useRef } from 'react'
import { useSpringRef } from '@react-spring/native'
import AnimatedLottieView from 'lottie-react-native'
import { Phonetic } from '../../components/phonetic'
import { useQuestion } from '../../hooks/use-question'
import { useScore } from '../../hooks/use-score'
import { useModal } from '../../hooks/use-modal'
import { Confetti } from '../../components/confetti'
import { GameOverModal } from '../../components/game-over-modal'
import { Word } from '../../components/word'
import { Score } from '../../components/score'

export const Game = () => {
  const confettiRef = useRef<AnimatedLottieView>(null)
  const ref = useSpringRef<{ x: number }>()
  const { answer, nextQuestion, question } = useQuestion()
  const { increaseScore, resetScore, score } = useScore()
  const { isVisible, closeModal, openModal } = useModal()

  const selectAnswer = (choice: typeof answer) => () => {
    if (answer === choice) {
      ref.current[0].start({ reset: true })

      confettiRef.current.play()

      nextQuestion()
      increaseScore()
    } else {
      openModal()
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
    resetScore()
    nextQuestion()
    closeModal()

    ref.current[0].start({
      reset: true,
      config: {
        duration: TIMER_DURATION,
      },
    })
  }

  return (
    <>
      <Background>
        <View style={styles.container}>
          <Score>{score}</Score>
          <View>
            <Text color="dark">{question.language}</Text>
            <View style={{ paddingBottom: 12 }} />
            <Word>{question[answer].spelling}</Word>
            <View style={{ paddingTop: 12 }} />
            <Phonetic>{question[answer].phonetic}</Phonetic>
          </View>
          <View>
            <Button onPress={selectPlum}>
              <Text color="darker">PLUM</Text>
            </Button>
            <View style={styles.space} />
            <Button onPress={selectPaper}>
              <Text color="darker">PAPER</Text>
            </Button>
          </View>
        </View>
        <Progress ref={ref} onTimeout={openModal} />
      </Background>
      <Confetti ref={confettiRef} />
      <GameOverModal
        isVisible={isVisible}
        answer={answer}
        score={score}
        restart={restart}
        word={question[answer].spelling}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  space: {
    height: 16,
  },
})
