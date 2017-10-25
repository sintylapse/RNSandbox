import { Navigation } from 'react-native-navigation'

import Main from '../components/screens/Main/Main.js'

export function registerScreens() {
    Navigation.registerComponent('Main', () => Main)
}
