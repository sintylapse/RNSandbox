import Reactotron, {
  trackGlobalErrors,
  openInEditor,
  overlay,
  asyncStorage,
  networking,
} from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

if (__DEV__) {
    Reactotron
        .configure({
            name: 'React Native Sandbox',
        })
        .use(trackGlobalErrors())
        .use(openInEditor())
        .use(overlay())
        .use(asyncStorage())
        .use(networking())
        .use(reactotronRedux())
        .connect()

    console.tron = Reactotron.log
}
