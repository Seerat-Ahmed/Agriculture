import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { RegisterScreen } from '../../../core/containers';
/**
 * Company Dashboard
 */
class CompanyDashboard extends Component {

    static navigationOptions = ({ navigation }) => ({
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
                    <DashboardItem
                        text="Add Fertilizers"
                        onPress={() => this.props.navigation.navigate('AddFertilizer')}
                        image={require('../../../assets/images/fertilizer.png')} />
                    <DashboardItem
                        text="Add Machinery"
                        onPress={() => this.props.navigation.navigate('AddMachinery')}
                        image={require('../../../assets/images/tractor.png')} />
                </View>
                <View style={styles.row}>
                    <DashboardItem
                        text="Add Pesticides"
                        onPress={() => this.props.navigation.navigate('AddPesticides')}
                        image={require('../../../assets/images/bio.png')} />
                    <DashboardItem
                        text="Added Items"
                        onPress={() => this.props.navigation.navigate('AddedItem')}
                        image={require('../../../assets/images/harvest.png')} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#272727',
        color: '#eeeeee',
        paddingTop: 20,
    },
    row: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
        width: '100%',
    },
    logo: {
        width: 130,
        height: 130,
    },
    text: {
        color: '#fafafa'
    },
    icon: {
        height: 70,
        width: 70,
    },
    item: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    }
});

const DashboardItem = ({ text, image, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.item}>
        <Image
            style={styles.icon}
            source={image} />
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
);

export default CompanyDashboard;
