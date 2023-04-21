import { View, StyleSheet } from 'react-native'
import { Modal } from '../modal'
import { Text } from '../text'
import { Button } from '../button'
import { Highscore } from '../highscore'

type Props = {
  isVisible: boolean
  onPress: () => void
}
export const StartModal = ({
  isVisible,
  onPress,
}: Props) => {
  return (
    <Modal isVisible={isVisible}>
      <Text color="darker" size="large">
        PLUM OR PAPER
      </Text>
      <View style={styles.scoreContainer}>
        <View>
          <Text color="darker" align="center">BEST</Text>
          <Highscore align='center' />
        </View>
      </View>
      <Button style={styles.restartButton} onPressIn={onPress}>
        <Text color="darker">START</Text>
      </Button>
    </Modal>
  )
}

const styles = StyleSheet.create({
  scoreContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingBottom: 40,
    paddingTop: 32,
  },
  restartButton: {
    position: 'absolute',
    bottom: -32,
    alignSelf: 'center',
  },
})

