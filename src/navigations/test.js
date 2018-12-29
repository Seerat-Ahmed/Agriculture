import { createStackNavigator, createAppContainer } from 'react-navigation';
import { MyDrawer } from '../company/navigation/drawer';
import { AddFertilizer, AddPesticides, AddMachinery, AddedItem, ItemDetail, Conversation } from '../company/containers';


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
    },
    AddFertilizer: {
        screen: AddFertilizer
    },
    AddPesticides: {
        screen: AddPesticides
    },
    AddMachinery: {
        screen: AddMachinery
    },
    AddedItem: {
        screen: AddedItem
    },
    ItemDetail: {
        screen: ItemDetail
    },
    Conversation: {
        screen: Conversation
    }
}, navigation);

export default createAppContainer(AppNavigator);

