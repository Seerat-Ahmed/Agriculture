import { createStackNavigator, createAppContainer } from 'react-navigation';
import App from '../App';
import { MyDrawer } from '../company/navigation/drawer';


const navigation = {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: '#272727',
        },
    },
}

const AppNavigator = createStackNavigator({
    Home: {
        screen: MyDrawer
    }
}, navigation);

export default createAppContainer(AppNavigator);

