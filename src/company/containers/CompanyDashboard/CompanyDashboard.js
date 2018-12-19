import React, { Component } from 'react';
import { View, StyleSheet, Image, TextInputFocusEventData } from 'react-native';
import { Icon } from 'react-native-elements';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import { RegisterScreen } from '../../../core/containers';
/**
 * Company Dashboard
 */
class CompanyDashboard extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Company',
        headerStyle: {
            backgroundColor: '#272727',
        },
        headerTitleStyle: {
            flex: 1,
            color: '#fafafa',
            textAlign: 'center',
        },
        headerLeft: <Icon
            name="menu"
            size={25}
            color="#fff"
            iconStyle={{ marginRight: 10 }}
        />,
    });

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image
                        resizeMode="cover"
                        style={styles.logo}
                        source={require('../../../assets/images/logo.jpg')} />
                </View>
                <View style={styles.row}>
                </View>
                <View style={styles.row}>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#272727',
        color: '#eeeeee',
        paddingTop: 20,
    },
    row: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 130,
        height: 130,
    }
});

// const MyDrawerNavigator = createDrawerNavigator({
//     Home: {
//         screen: RegisterScreen,
//     },
//     Notifications: {
//         screen: CompanyDashboard,
//     },
// }, {header: null});
// MyDrawerNavigator.navigationOptions({header:null})
// export const MyDrawer = createAppContainer(MyDrawerNavigator);

export default CompanyDashboard;
