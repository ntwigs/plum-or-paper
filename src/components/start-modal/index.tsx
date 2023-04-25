import { View, StyleSheet } from 'react-native'
import { Modal } from '../modal'
import { Text } from '../text'
import { Button } from '../button'
import { Highscore } from '../highscore'
import React from 'react'
import { OverlayFadeIn } from '../overlay-fade-in'
import { AnimatedHeader } from '../animated-header'
import { theme } from '../../theme'

type Props = {
  isVisible: boolean
  onPress: () => void
}
export const StartModal = ({ isVisible, onPress }: Props) => {
  return (
    <>
      <Modal isVisible={isVisible}>
        <AnimatedHeader />
        <View style={styles.container}>
          <View style={styles.scoreContainer}>
            <Text color="darker" align="center">
              BEST
            </Text>
            <Highscore />
          </View>
        </View>
        <Button style={styles.restartButton} onPressIn={onPress}>
          <Text color="darker">START</Text>
        </Button>
      </Modal>
      {isVisible && <OverlayFadeIn />}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingBottom: theme.getSize(3),
    paddingTop: theme.getSize(1),
  },
  restartButton: {
    position: 'absolute',
    bottom: -theme.getSize(4),
    alignSelf: 'center',
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
})
