import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    Picker,
} from 'react-native';
import { TextBox } from '../../components';
import { ScrollView } from 'react-native-gesture-handler';

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
                <ScrollView>
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
                                onChangeText={(username) => this.setState({ username })} />
                            <TextBox
                                placeholder="Enter Email"
                                icon="envelope"
                                type="FontAwesome"
                                onChangeText={(email) => this.setState({ email })} />
                            <TextBox
                                placeholder="Enter Password"
                                icon="lock"
                                onChangeText={(password) => this.setState({ password })} />
                            <TextBox
                                placeholder="Enter Confirm Password"
                                icon="lock"
                                onChangeText={(confirmPassword) => this.setState({ confirmPassword
                                 })} />
                            <View style={{ borderBottomColor: '#fff', borderBottomWidth: 1, position: 'absolute', top: 0, right: 20  }}>
                                <Picker
                                    style={{ height: 30, backgroundColor: '#272727', color: '#fff' }}
                                    onValueChange={(value) => alert(value)}>
                                    <Picker.Item label="Java" value="java" />
                                    <Picker.Item label="JavaScript" value="js" />
                                </Picker>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.submitWrapper}>
                            <Text style={styles.submitText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
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
    submitWrapper: {
        color: '#fafafa',
        borderRadius: 50,
        borderColor: '#fafafa',
        borderWidth: 1,
        width: '60%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fafafa',
        marginTop: 20,
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
