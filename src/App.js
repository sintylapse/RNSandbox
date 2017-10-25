import { Navigation } from 'react-native-navigation'

import { registerScreens } from './navigation/screens.js'

registerScreens()

Navigation.startSingleScreenApp({
	screen: {
		screen: 'Main',
		title: 'React Native Sandbox',
	},
})
