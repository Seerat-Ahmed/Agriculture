/** @format */

import {AppRegistry} from 'react-native';
import AppNavigator from './src/navigations/test';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppNavigator);
