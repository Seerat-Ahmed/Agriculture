import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

class ItemDetail extends Component {
    render() {
        console.log(this.props.navigation.state)
        return (
            <View style={styles.container}>
                <Image />
                <Fields />
            </View>
        );
    }
}

const Fields = ({ name, value }) => {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#fafafa' }}>{name}:</Text>
            <Text style={{ color: '#fafafa' }}>{value}</Text>
        </View>
    )
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

export default ItemDetail;
