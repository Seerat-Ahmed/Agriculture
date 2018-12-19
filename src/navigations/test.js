import { createStackNavigator, createAppContainer } from 'react-navigation';
import App from '../App';
import { MyDrawer } from '../company/containers/CompanyDashboard/CompanyDashboard';

let Appstact= createStackNavigator({
    Home: {
        screen: App
    }
},{
    initialRouteName:'Home'
}
)


const AppNavigator = createStackNavigator({
    Home: {
        screen: MyDrawer
    }
}, {
    
   //headerMode:'none'
});

export default createAppContainer(AppNavigator);

// reload kara
// kia hua ab to koe bhi header nahi araha hai na drawer ka or na hi stack ka
// dikaj
// drawer pe ao code
