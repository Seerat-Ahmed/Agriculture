import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import { TextBox } from '../../../core/components';


class AddMachinery extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Add Machinery</Text>
                <View>
                    <Image
                        resizeMode="cover"
                        style={styles.logo}
                        source={require('../../../assets/images/tractor.png')} />
                </View>
                <View>
                    <TextBox
                        placeholder="Machine Name"
                        icon="edit"
                        onChangeText={console.log} />
                    <TextBox
                        placeholder="Model No."
                        icon="edit"
                        onChangeText={console.log} />
                    <TextBox
                        placeholder="Price"
                        icon="dollar"
                        type="FontAwesome"
                        onChangeText={console.log} />
                    <TextBox
                        placeholder="Description"
                        icon="edit"
                        onChangeText={console.log} />
                </View>
                <TouchableOpacity style={styles.submitWrapper}>
                    <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
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
    },
    heading: {
        fontSize: 20,
        color: '#fafafa',
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
        width: 100,
        height: 100,
    }
})

export default AddMachinery;
