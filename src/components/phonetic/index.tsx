import { View, StyleSheet, Image, Dimensions } from 'react-native'
import { Text } from '../text'
import { theme } from '../../theme'

const width = Dimensions.get('screen').width

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
    maxWidth: width - theme.getSize(8),
  },
  note: {
    width: theme.getSize(4),
    height: theme.getSize(4),
  },
  reverse: {
    transform: [{ scaleX: -1 }],
  },
})
