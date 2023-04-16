import { Background } from '../../components/background'
import { Progress } from '../../components/progress'
import { View, StyleSheet } from 'react-native'
import { Button } from '../../components/button'
import { Text } from '../../components/text'
import { Modal } from '../../components/modal'
import { useState, useRef } from 'react'
import { questions } from '../../questions'
import LottieView from 'lottie-react-native'

export const Game = () => {
  const animation = useRef(null)
  const [points, setPoints] = useState(0)

  const question = questions[Math.floor(Math.random() * questions.length)]
  const answer = Math.floor(Math.random() * 2) > 0 ? 'plum' : 'paper'
  const word = question[answer]

  const [isVisible, setVisible] = useState(false)

  const selectPlum = () => {
    if (answer === 'plum') {
      animation.current.play()
      setPoints((points) => points + 1)
    } else {
      setVisible(true)
    }
  }

  const selectPaper = () => {
    if (answer === 'paper') {
      animation.current.play()
      setPoints((points) => points + 1)
    } else {
      setVisible(true)
    }
  }

  const restart = () => {
    setPoints(0)
    setVisible(false)
  }

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
          <Progress />
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
      <Modal isVisible={isVisible}>
        <Text color="dark" style={styles.gameover}>
          GAME OVER
        </Text>
        <Text color="darker">{question.language}</Text>
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
              0
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
