import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Header, Content, List, ListItem, Separator } from 'native-base';

class AddedScreen extends Component {
    render() {
        return (

            <View style={styles.container}>
                <Content style={{ width: '100%' }}>
                    <Separator style={{}} bordered>
                        <Text>Fertilizers</Text>
                    </Separator>
                    <ListItem onPress={() => this.props.navigation.navigate('ItemDetail', { name: 'Seerat' })}>
                        <TouchableOpacity >
                            <Text style={{ color: '#fafafa' }}>Caroline Aaron</Text>
                        </TouchableOpacity>
                    </ListItem>
                    <ListItem last onPress={() => this.props.navigation.navigate('ItemDetail')}>
                        <TouchableOpacity>
                            <Text style={{ color: '#fafafa' }}>Lee Allen</Text>
                        </TouchableOpacity>
                    </ListItem>
                    <Separator bordered>
                        <Text>Pesticides</Text>
                    </Separator>
                    <ListItem>
                        <Text style={{ color: '#fafafa' }}>Caroline Aaron</Text>
                    </ListItem>
                    <ListItem last>
                        <Text style={{ color: '#fafafa' }}>Lee Allen</Text>
                    </ListItem>
                    <ListItem last>
                        <Text style={{ color: '#fafafa' }}>Lee Allen</Text>
                    </ListItem>
                    <Separator bordered>
                        <Text>Machinery</Text>
                    </Separator>
                    <ListItem last>
                        <Text style={{ color: '#fafafa' }}>Lee Allen</Text>
                    </ListItem>
                    <ListItem last>
                        <Text style={{ color: '#fafafa' }}>Lee Allen</Text>
                    </ListItem>
                </Content>
            </View >
        )
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
    heading: {
        fontSize: 20,
        color: '#fafafa',
    },
    action: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
})

export default AddedScreen;
