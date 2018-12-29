/** @format */

import { AppRegistry } from 'react-native';
import AppNavigator from './src/navigations/test';
import { name as appName } from './app.json';
import { RegisterScreen } from './src/core/containers';
import { PaymentAndTerms, Conversation } from './src/company/containers';
import ChatList from './src/core/containers/ChatList/ChatList';

AppRegistry.registerComponent(appName, () => AppNavigator);
