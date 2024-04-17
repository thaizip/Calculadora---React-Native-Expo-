import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default (props) => {
    const [isPressed, setIsPressed] = useState(false);

    const buttonStyles = [
        styles.button,
        isPressed && styles.buttonPressed,
        props.operation && styles.operationButton,
        props.double && styles.doubleButton,
        props.triple && styles.tripleButton,
    ];

    const textStyles = [
        styles.buttonText,
        props.operation && styles.operationButtonText,
    ];

    return (
        <TouchableOpacity
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            onPress={() => props.click && props.click(props.label)}
            style={buttonStyles}
        >
            <Text style={textStyles}>{props.label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F6F5F2',
        borderColor: '#F0EBE3',
        borderWidth: 1,
        height: 80
    },
    buttonPressed: {
        backgroundColor: '#331D2C',  // Cor diferente quando o botão é pressionado
    },
    buttonText: {
        fontSize: 24,
        color: '#3F2E3E',
    },
    operationButton: {
        backgroundColor: '#331D2C',
    },
    operationButtonText: {
        color: '#A78295',
    },
    doubleButton: {
        flex: 2,
    },
    tripleButton: {
        flex: 3,
    },
});
