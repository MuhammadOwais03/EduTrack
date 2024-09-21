import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';


// Base Component
export const Base = ({ children, navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.baseText}>Employee App</Text>


            <View style={styles.content}>
                {children}
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        paddingTop: 20,
    },
    baseText: {
        fontSize: 20,
        color: '#333',
        fontWeight: 'bold',
        marginBottom: 20,
        width: '100%',
        // backgroundColor: 'black',
        // color: '#fff',
        padding: '2rem',
        textAlign: 'center'
    },
    content: {
        flexGrow: 1,
        width: '100%',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
});
