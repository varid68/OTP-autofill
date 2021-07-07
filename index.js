/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'
import * as Sentry from '@sentry/react-native'
import './ReactotronConfig'


AppRegistry.registerComponent(appName, () => App)
if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

Sentry.init({
  dsn: "https://91dc949c5ed84e5e959c681596665627@o281922.ingest.sentry.io/5797079"
})
