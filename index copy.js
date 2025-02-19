/**
 * @format
 */


import './Screen/gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './Screen/App';
import Singed from './Screen/Singed';
import MainApp from './Screen/MainApp';
import Test from './Screen/test';
import 'react-native-reanimated';
AppRegistry.registerComponent(appName, () => App);
