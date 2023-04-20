import { NavigationContainer } from '@react-navigation/native'
import {
  type NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'
import { Start } from '../../pages/start'
import { Game } from '../../pages/game'

export type RootStackParamList = {
  Start: {}
  Game: {}
}

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>

const Stack = createNativeStackNavigator<RootStackParamList>()

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Game"
      >
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Game" component={Game} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
