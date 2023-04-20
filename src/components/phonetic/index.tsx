import { View, StyleSheet, Image } from 'react-native'
import { Text } from '../text'

const NOTE_IMAGE = require('../../assets/icons/note.png')
type Props = {
  children: string
}
export const Phonetic = ({ children }: Props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.note} source={NOTE_IMAGE} />
      <Text color="dark">{children}</Text>
      <Image style={[styles.note, styles.reverse]} source={NOTE_IMAGE} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  note: {
    width: 32,
    height: 32,
  },
  reverse: {
    transform: [{ scaleX: -1 }],
  },
})
