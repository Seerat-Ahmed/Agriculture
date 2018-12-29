import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

class PaymentAndTerms extends Component {
    render() {
        return (
            <View>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.contentSection}>
                            <View style={styles.block}>
                                <Text style={styles.heading}>Payment Method</Text>
                                <Text style={styles.content}>If you run this code, you'll notice that when you tap "Go to Details... again" that it doesn't do anything! This is because we are already on the Details route</Text>
                            </View>
                            <View style={styles.block}>
                                <Text style={styles.heading}>Farmer Caution &amp; Responsibilities</Text>
                                <Text style={styles.content}>If you run this code, you'll notice that when you tap "Go to Details... again" that it doesn't do anything! This is because we are already on the Details route</Text>
                            </View>
                            <View style={styles.block}>
                                <Text style={styles.heading}>Buyer Caution &amp; Responsibilities</Text>
                                <Text style={styles.content}>If you run this code, you'll notice that when you tap "Go to Details... again" that it doesn't do anything! This is because we are already on the Details route</Text>
                            </View>
                            <View style={styles.block}>
                                <Text style={styles.heading}>Company Caution &amp; Responsibilities</Text>
                                <Text style={styles.content}>If you run this code, you'll notice that when you tap "Go to Details... again" that it doesn't do anything! This is because we are already on the Details route</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
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
        paddingTop: 20,
    },
    contentSection: {
        width: '80%',
    },
    heading: {
        color: '#fafafa',
        fontSize: 20,
        marginBottom: 8,
        borderBottomColor: '#fafafa',
        borderBottomWidth: 1,
        paddingBottom: 4,
    },
    content: {
        marginTop: 6,
        color: '#fafafa',
        fontSize: 13,
    },
    block: {
        marginBottom: 20,
    }
});

export default PaymentAndTerms;
