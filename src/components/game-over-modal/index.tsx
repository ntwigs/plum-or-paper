import { View, StyleSheet } from 'react-native'
import { Modal } from '../modal'
import { Text } from '../text'
import { Button } from '../button'
import { Highscore } from '../highscore'
import { AnimatedHeader } from '../animated-header'
import { theme } from '../../theme'
import { CurrentScore } from '../current-score'

type Props = {
  isVisible: boolean
  score: number
  restart: () => void
}
export const GameOverModal = ({ isVisible, score, restart }: Props) => {
  return (
    <Modal isVisible={isVisible}>
      <AnimatedHeader type="gameover" />
      <View style={styles.scoreContainer}>
        <View>
          <Text color="darker">Score</Text>
          <CurrentScore score={score} isVisible={isVisible} />
        </View>
        <View>
          <Text color="darker">Best</Text>
          <Highscore score={score} align="right" />
        </View>
      </View>
      <Button style={styles.restartButton} onPress={restart}>
        <Text color="darker">RESTART</Text>
      </Button>
    </Modal>
  )
}

const styles = StyleSheet.create({
  scoreContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: theme.getSize(3),
  },
  restartButton: {
    position: 'absolute',
    bottom: -theme.getSize(4),
    alignSelf: 'center',
  },
  image: {
    width: '100%',
  },
})
