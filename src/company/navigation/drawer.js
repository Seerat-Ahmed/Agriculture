import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import { RegisterScreen } from '../../core/containers';
import CompanyDashboard from '../containers/CompanyDashboard/CompanyDashboard';
import { PaymentAndTerms } from '../containers';
import ChatList from '../../core/containers/ChatList/ChatList';


const MyDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: CompanyDashboard,
    },
    Messages: {
        screen: ChatList,
    },
    PaymentTerm: {
        screen: PaymentAndTerms,
    },
    Logout: {
        screen: RegisterScreen,
    }
});
export const MyDrawer = createAppContainer(MyDrawerNavigator);
