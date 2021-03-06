import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements'

class ChatList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <List containerStyle={{ marginBottom: 20, width: '100%' }}>
                    {
                        list.map((l) => (
                            <ListItem
                                containerStyle={{ backgroundColor: '#272727' }}
                                titleStyle={{ color: '#fafafa' }}
                                hideChevron
                                roundAvatar
                                avatarStyle={{ alignSelf: 'flex-end' }}
                                avatar={{ uri: l.avatar_url }}
                                key={l.name}
                                title={l.name}
                            />
                        ))
                    }
                    {
                        list.map((l) => (
                            <ListItem
                                containerStyle={{
                                    backgroundColor: '#272727',
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                    flexWrap: 'wrap-reverse'
                                }}
                                titleStyle={{ color: '#fafafa' }}
                                hideChevron
                                roundAvatar
                                avatarContainerStyle={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}
                                avatarStyle={{ alignSelf: 'flex-end' }}
                                avatar={{ uri: l.avatar_url }}
                                key={l.name}
                                title={l.name}
                            />
                        ))
                    }
                </List>
            </View>
        );
    }
}


const list = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
]



const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        backgroundColor: '#272727',
        color: '#eeeeee',
        paddingTop: 20,
    },
});

export default ChatList;
