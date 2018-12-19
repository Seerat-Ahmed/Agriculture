import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { FormInput } from 'react-native-elements';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

/**
 * 
 * Custom Textbox
 */
class TextBox extends Component {
    render() {
        const {
            placeholder,
            onChangeText = () => { },
            value,
            type,
            icon
        } = this.props;

        return (
            <View>
                <View style={styles.fieldWrapper}>
                    <View style={styles.iconWrapper}>
                        {
                            (type === 'FontAwesome') ?
                                <FontAwesome
                                    name={icon}
                                    color="#fafafa"
                                    type="FontAwesome"
                                    size={20} />
                                :
                                <EntypoIcon
                                    name={icon}
                                    color="#fafafa"
                                    type="Entypo"
                                    size={20} />
                        }
                    </View>
                    <View style={styles.inputWrapper}>
                        <FormInput
                            style={styles.text}
                            placeholder={placeholder}
                            placeholderTextColor="#fafafa"
                            onChangeText={onChangeText} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    fieldWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '95%',
        borderBottomColor: '#fafafa',
        borderBottomWidth: 1
    },
    iconWrapper: {
        width: '10%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputWrapper: {
        width: '90%',
    },
    text: {
        color: '#fafafa'
    }
});

export default TextBox;
