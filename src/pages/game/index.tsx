import { Background } from '../../components/background'
import { Progress } from '../../components/progress'
import { View, StyleSheet } from 'react-native'
import { Button } from '../../components/button'
import { Text } from '../../components/text'
import { Phonetic } from '../../components/phonetic'
import { useQuestion } from './use-question'
import { Confetti } from '../../components/confetti'
import { GameOverModal } from '../../components/game-over-modal'
import { Word } from '../../components/word'
import { Score } from '../../components/score'
import { StartModal } from '../../components/start-modal'
import { useGameLogic } from './use-game-logic'
import { useAnswer } from './use-answer'
import { theme } from '../../theme'

export const Game = () => {
  const { nextQuestion, phonetic, spelling, language, answer } = useQuestion()
  const {
    restart,
    startGame,
    score,
    onCorrect,
    onWrong,
    confettiRef,
    timerRef,
    isGameOverModalVisible,
    isStartModalVisible,
  } = useGameLogic({ nextQuestion })
  const { selectPaper, selectPlum } = useAnswer({ answer, onCorrect, onWrong })

  return (
    <>
      <Background>
        <View style={styles.container}>
          <Score>{score}</Score>
          <View>
            <Text color="dark">{language}</Text>
            <View style={styles.space} />
            <Word>{spelling}</Word>
            <View style={styles.space} />
            <Phonetic>{phonetic}</Phonetic>
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
        <Progress ref={timerRef} onTimeout={onWrong} />
      </Background>
      <Confetti ref={confettiRef} />
      <GameOverModal
        isVisible={isGameOverModalVisible}
        score={score}
        restart={restart}
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
    height: theme.getSize(2),
  },
})
