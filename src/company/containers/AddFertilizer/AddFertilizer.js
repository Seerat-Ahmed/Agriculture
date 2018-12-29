import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import { TextBox } from '../../../core/components';


class AddFertilizer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Add Fertilizer</Text>
                <View>
                    <Image
                        resizeMode="cover"
                        style={styles.logo}
                        source={require('../../../assets/images/fertilizer.png')} />
                </View>
                <View>
                    <TextBox
                        placeholder="Ferilizer Name"
                        icon="edit"
                        onChangeText={console.log} />
                    <TextBox
                        placeholder="Price"
                        icon="dollar"
                        type="FontAwesome"
                        onChangeText={console.log} />
                    <TextBox
                        placeholder="Use"
                        icon="edit"
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

export default AddFertilizer;
