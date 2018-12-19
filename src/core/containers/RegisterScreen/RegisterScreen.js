import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
import { TextBox } from '../../components';

class RegisterScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerStyle: {
            backgroundColor: '#272727',
        },
        headerTitleStyle: {
            flex: 1,
            color: '#fafafa',
            textAlign: 'center',
        },  
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
                <View>
                    <TextBox
                        placeholder="Enter Username"
                        icon="user"
                        onChangeText={console.log} />
                    <TextBox
                        placeholder="Enter Email"

                        icon="envelope"
                        type="FontAwesome"
                        onChangeText={console.log} />
                    <TextBox
                        placeholder="Enter Password"
                        icon="lock"
                        onChangeText={console.log} />
                    <TextBox
                        placeholder="Enter Confirm Password"
                        icon="lock"
                        onChangeText={console.log} />
                </View>
                <TouchableOpacity style={styles.submitWrapper}>
                    <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>
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
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    submitWrapper: {
        color: '#fafafa',
        borderRadius: 50,
        borderColor: '#fafafa',
        borderWidth: 1,
        width: '60%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fafafa'
    },
    submitText: {
        color: '#272727',
        padding: 12,
    },
    logo: {
        width: 130,
        height: 130,
    }
});


export default RegisterScreen;
