import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import App from '../company/containers/CompanyDashboard/CompanyDashboard';
import { MyDrawer } from '../company/containers/CompanyDashboard/CompanyDashboard';

const AppNavigator = createStackNavigator({
    Home: {
        screen: App
    }
}, {
        initialRouteName: 'Home',
    });

const MyDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: AppNavigator,// any component
    },
    Notifications: {
        screen: AppNavigator,// any component
    },
});
const APPStack = createStackNavigator({
    Home: MyDrawerNavigator,
}, {
        headerMode: 'none'
    })
export default createAppContainer(APPStack);

// reload kara
// kia hua ab to koe bhi header nahi araha hai na drawer ka or na hi stack ka
// dikaj
// drawer pe ao code
