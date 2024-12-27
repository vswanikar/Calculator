import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
    // State variables
    const [displayValue, setDisplayValue] = useState('0');
    const [operator, setOperator] = useState(null);
    const [firstValue, setFirstValue] = useState('');

    // Function to handle number inputs
    const handleNumberInput = (num) => {
        const operators = ['+', '-', '*', '/'];
        const lastChar = displayValue[displayValue.length - 1];

        if (operators.includes(lastChar)) {
            setDisplayValue(displayValue + ' ' + num.toString());
        } else if (displayValue === '0') {
            setDisplayValue(num.toString());
        } else {
            setDisplayValue(displayValue + num.toString());
        }
    };

    // Function to handle operator inputs
    const handleOperatorInput = (operator) => {
        setOperator(operator);
        setFirstValue(displayValue);
        if (!['+', '-', '*', '/'].some((op) => displayValue.includes(op))) {
            setDisplayValue(displayValue + ' ' + operator);
        }
    };

    // Function to handle equal button press
    const handleEqual = () => {
        const parts = displayValue.split(' ');
        const num1 = parseFloat(parts[0]);
        const num2 = parseFloat(parts[2]);

        let result = 0;
        if (operator === '+') {
            result = num1 + num2;
        } else if (operator === '-') {
            result = num1 - num2;
        } else if (operator === '*') {
            result = num1 * num2;
        } else if (operator === '/') {
            result = num1 / num2;
        }

        setDisplayValue(result.toString());
        setOperator(null);
        setFirstValue('');
    };

    // Function to handle clear button press
    const handleClear = () => {
        setDisplayValue('0');
        setOperator(null);
        setFirstValue('');
    };

    return (
        <View style={styles.container}>
            <View style={styles.displayContainer}>
                <Text style={styles.displayText}>{displayValue}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleNumberInput(7)}
                    >
                        <Text style={styles.buttonText}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleNumberInput(8)}
                    >
                        <Text style={styles.buttonText}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleNumberInput(9)}
                    >
                        <Text style={styles.buttonText}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.operatorButton]}
                        onPress={() => handleOperatorInput('/')}
                    >
                        <Text style={[styles.buttonText, styles.operatorButtonText]}>÷</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleNumberInput(4)}
                    >
                        <Text style={styles.buttonText}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleNumberInput(5)}
                    >
                        <Text style={styles.buttonText}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleNumberInput(6)}
                    >
                        <Text style={styles.buttonText}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.operatorButton]}
                        onPress={() => handleOperatorInput('*')}
                    >
                        <Text style={[styles.buttonText, styles.operatorButtonText]}>×</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleNumberInput(1)}
                    >
                        <Text style={styles.buttonText}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleNumberInput(2)}
                    >
                        <Text style={styles.buttonText}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleNumberInput(3)}
                    >
                        <Text style={styles.buttonText}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.operatorButton]}
                        onPress={() => handleOperatorInput('-')}
                    >
                        <Text style={[styles.buttonText, styles.operatorButtonText]}>−</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={[styles.button, styles.zeroButton]}
                        onPress={() => handleNumberInput(0)}
                    >
                        <Text style={styles.buttonText}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.operatorButton]}
                        onPress={() => handleOperatorInput('+')}
                    >
                        <Text style={[styles.buttonText, styles.operatorButtonTextplus]}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.equalButton}
                        onPress={handleEqual}
                    >
                        <Text style={styles.equalButtonText}>=</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
                    <Text style={styles.clearButtonText}>C</Text>
                </TouchableOpacity>
            </View>
                  <Text style={styles.footerText}>Calc by Vedant</Text>
        </View>
    );
}

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    displayContainer: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 20,
    },
    displayText: {
        fontSize: 48,
        color: '#333',
    },
    buttonContainer: {
        flex: 3,
        width: '80%',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    button: {
        flex: 1,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        elevation: 3,
        margin: 3,
        padding: 10,
    },
    buttonText: {
        fontSize: 34,
        color: '#333',
    },
    zeroButton: {
        flex: 2,
        margin: 3
    },
    operatorButton: {
        backgroundColor: '#f0f0f0',
        margin: 3
    },
    operatorButtonText: {
        color: '#ff9500',
        fontSize: 40,
    },
    operatorButtonTextplus:{
      fontSize: 50,
      color: '#ff9500',
    },
    equalButton: {
        flex: 1,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#40f900',
        elevation: 3,
        marggin: 3
    },
    equalButtonText: {
        fontSize: 32,
        color: 'black',
    },
    clearButton: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        marginTop: 10,
        elevation: 3,
        padding: 10,
        margin: 3,
    },
    clearButtonText: {
        fontSize: 24,
        color: 'white',
    },
    footerText: {
        margin: 10,
        fontSize: 20,
        color: 'black',
        textAlign: 'centre'
    },
});
