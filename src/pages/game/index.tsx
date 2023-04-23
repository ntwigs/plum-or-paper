import { Background } from '../../components/background'
import { Progress, TIMER_DURATION } from '../../components/progress'
import { View, StyleSheet } from 'react-native'
import { Button } from '../../components/button'
import { Text } from '../../components/text'
import { ReactNode, useCallback, useEffect, useRef } from 'react'
import { animated, useSpring, useSpringRef } from '@react-spring/native'
import AnimatedLottieView from 'lottie-react-native'
import { Phonetic } from '../../components/phonetic'
import { useQuestion } from '../../hooks/use-question'
import { useScore } from '../../hooks/use-score'
import { useModal } from '../../hooks/use-modal'
import { Confetti } from '../../components/confetti'
import { GameOverModal } from '../../components/game-over-modal'
import { Word } from '../../components/word'
import { Score } from '../../components/score'
import { StartModal } from '../../components/start-modal'
import { useSound } from '../../hooks/use-sound'

type HideProps = {
  hideRef: any
  children: ReactNode
}
const Hide = ({ hideRef, children }: HideProps) => {
  const [contentSpring] = useSpring(() => ({
    ref: hideRef,
    from: { opacity: 0 },
    to: { opacity: 1 },
  }))

  return <animated.View style={contentSpring}>{children}</animated.View>
}

export const Game = () => {
  const sound = useSound()
  const confettiRef = useRef<AnimatedLottieView>(null)
  const ref = useSpringRef<{ x: number }>()
  const { isVisible: isStartModalVisible, closeModal: closeStartModal } =
    useModal({ initialState: true })
  const { answer, nextQuestion, question } = useQuestion()
  const { increaseScore, resetScore, score } = useScore()
  const { isVisible, closeModal, openModal } = useModal()
  const hideRef = useSpringRef()

  const startGame = useCallback(() => {
    sound.score.replayAsync()
    sound.button.replayAsync()
    hideRef.start()
    closeStartModal()
    ref.current[0].start()
    confettiRef.current.play()
  }, [])

  const selectAnswer = (choice: typeof answer) => () => {
    if (answer === choice) {
      ref.current[0].start({ reset: true })
      sound.score.replayAsync()

      confettiRef.current.play()

      nextQuestion()
      increaseScore()
    } else {
      gameOver()
    }
  }

  const gameOver = () => {
    hideRef.start({ opacity: 0 })
    openModal()
    ref.current[0].start({
      config: {
        duration: undefined,
      },
    })
  }

  const selectPlum = selectAnswer('plum')
  const selectPaper = selectAnswer('paper')

  const restart = () => {
    resetScore()
    nextQuestion()
    closeModal()

    hideRef.start({
      opacity: 1,
    })

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
        <Hide hideRef={hideRef}>
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
          <Progress ref={ref} onTimeout={gameOver} />
        </Hide>
      </Background>
      <Confetti ref={confettiRef} />
      <GameOverModal
        isVisible={isVisible}
        answer={answer}
        score={score}
        restart={restart}
        word={question[answer].spelling}
      />
      <StartModal isVisible={isStartModalVisible} onPress={startGame} />
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
