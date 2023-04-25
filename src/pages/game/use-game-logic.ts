import { useSpringRef } from '@react-spring/native'
import AnimatedLottieView from 'lottie-react-native'
import { useRef, useCallback } from 'react'
import { TIMER_DURATION } from '../../components/progress'
import { useModal } from '../../hooks/use-modal'
import { useScore } from '../../hooks/use-score'
import { useSound } from '../../hooks/use-sound'

type UseGameLogic = {
  nextQuestion: () => void
}
export const useGameLogic = ({ nextQuestion }: UseGameLogic) => {
  const sound = useSound()
  const confettiRef = useRef<AnimatedLottieView>(null)
  const timerRef = useSpringRef<{ x: number }>()
  const { isVisible: isStartModalVisible, closeModal: closeStartModal } =
    useModal({ initialState: true })
  const { increaseScore, resetScore, score } = useScore()
  const {
    isVisible: isGameOverModalVisible,
    closeModal: closeGameOverModal,
    openModal,
  } = useModal()

  const startGame = useCallback(() => {
    sound.score.replayAsync()
    closeStartModal()
    timerRef.current[0].start()
  }, [])

  const gameOver = useCallback(() => {
    sound.gameover.replayAsync()
    openModal()
    timerRef.current[0].start({
      config: {
        duration: undefined,
      },
    })
  }, [])

  const restart = useCallback(() => {
    resetScore()
    nextQuestion()
    closeGameOverModal()

    timerRef.current[0].start({
      reset: true,
      config: {
        duration: TIMER_DURATION,
      },
    })
  }, [])

  const onCorrect = useCallback(() => {
    timerRef.current[0].start({ reset: true })
    sound.score.replayAsync()

    confettiRef.current.play()

    nextQuestion()
    increaseScore()
  }, [])

  const onWrong = useCallback(() => {
    gameOver()
  }, [])

  return {
    score,
    restart,
    startGame,
    onCorrect,
    onWrong,
    timerRef,
    confettiRef,
    isGameOverModalVisible,
    isStartModalVisible,
  }
}
