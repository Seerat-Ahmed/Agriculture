import { createStackNavigator, createAppContainer } from 'react-navigation';
import App from '../App';

const AppNavigator = createStackNavigator({
    Home: {
        screen: App
    }
});

export default createAppContainer(AppNavigator);

