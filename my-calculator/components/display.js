

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default ({ value, expression }) => {
    return (
        <View style={styles.display}>
            <Text style={styles.expression}>{expression}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    display: {
        padding: 15,
        backgroundColor: '#A78295',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    expression: {
        fontSize: 18,
        color: '#331D2C',
        marginBottom: 10,
    },
    value: {
        fontSize: 40,
        color: '#331D2C',
    }
    
});
