import { View, StyleSheet } from 'react-native'
import { Modal } from '../modal'
import { Text } from '../text'
import { Button } from '../button'
import { Highscore } from '../highscore'

type Props = {
  isVisible: boolean
  word: string
  answer: string
  score: number
  restart: () => void
}
export const GameOverModal = ({
  isVisible,
  word,
  answer,
  score,
  restart,
}: Props) => {
  return (
    <Modal isVisible={isVisible}>
      <Text color="dark" size="large">
        GAME OVER
      </Text>
      <View style={styles.explanationContainer}>
        <Text color="darker">{word}</Text>
        <Text color="dark">MEANS</Text>
        <Text color="darker">{answer}</Text>
      </View>
      <View style={styles.scoreContainer}>
        <View>
          <Text color="darker">Score</Text>
          <Text align="left">{score}</Text>
        </View>
        <View>
          <Text color="darker">Best</Text>
          <Highscore score={score} align='right' />
        </View>
      </View>
      <Button style={styles.restartButton} onPress={restart}>
        <Text color="darker">RESTART</Text>
      </Button>
    </Modal>
  )
}

const styles = StyleSheet.create({
  explanationContainer: {
    paddingTop: 24,
    paddingBottom: 40,
  },
  scoreContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: 40,
  },
  restartButton: {
    position: 'absolute',
    bottom: -32,
    alignSelf: 'center',
  },
})
