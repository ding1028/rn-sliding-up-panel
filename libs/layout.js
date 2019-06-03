import {StatusBar, Dimensions} from 'react-native'

export function visibleHeight() {
  return Dimensions.get('window').height + 60
}

export function statusBarHeight() {
  return StatusBar.currentHeight || 0
}
