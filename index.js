/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

<<<<<<< HEAD
=======
import { registerRootComponent } from 'expo';
registerRootComponent(App);

>>>>>>> 939530d1280b356c20a571735ee551895d4f8ace
AppRegistry.registerComponent(appName, () => App);
