import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Button from "./button";
import Display from "./display";

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
  expression: ""  
};

export default class Calculator extends Component {
  state = { ...initialState };

  clearMemory() {
    this.setState({ ...initialState });
  }

  setOperation(operation) {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true, expression: this.state.values[0] + operation });
    } else {
      const equals = operation === '=';
      const currentOperation = this.state.operation;
      let expression = this.state.expression;
  
      if (!equals) {
        expression += this.state.values[1] + operation;
      } else {
        expression += '=';
      }
  
      const values = [...this.state.values];
      values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
      values[1] = 0;
      this.setState({
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values,
        expression
      });
    }
  }
  
  

  addDigit(n) {
    const clearDisplay =
      this.state.displayValue === "0" || this.state.clearDisplay;
    const currentValue = clearDisplay ? "" : this.state.displayValue;
    const displayValue = currentValue + n;
    this.setState({ displayValue, clearDisplay: false });

    if (n !== ".") {
      const i = this.state.current;
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[i] = newValue;
      this.setState({ values, expression: this.state.expression + n });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.calculator}>
          <Display value={this.state.displayValue} expression={this.state.expression} />
          <View style={styles.buttonsContainer}>
            <View style={styles.row}>
              <Button label="AC" click={() => this.clearMemory()} triple />
              <Button label="/" click={() => this.setOperation('/')} operation />
            </View>
            <View style={styles.row}>
              <Button label="7" click={() => this.addDigit(7)} />
              <Button label="8" click={() => this.addDigit(8)} />
              <Button label="9" click={() => this.addDigit(9)} />
              <Button label="*" click={() => this.setOperation('*')} operation />
            </View>
            <View style={styles.row}>
              <Button label="4" click={() => this.addDigit(4)} />
              <Button label="5" click={() => this.addDigit(5)} />
              <Button label="6" click={() => this.addDigit(6)} />
              <Button label="-" click={() => this.setOperation('-')} operation />
            </View>
            <View style={styles.row}>
              <Button label="1" click={() => this.addDigit(1)} />
              <Button label="2" click={() => this.addDigit(2)} />
              <Button label="3" click={() => this.addDigit(3)} />
              <Button label="+" click={() => this.setOperation('+')} operation />
            </View>
            <View style={styles.row}>
              <Button label="0" click={() => this.addDigit(0)} double />
              <Button label="." click={() => this.addDigit('.')} />
              <Button label="=" click={() => this.setOperation('=')} operation />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: "#FFEBEB",
    justifyContent: "center",
    alignItems: "center"
  },
  calculator: {
    width: 300,
  },
  row: {
    flexDirection: "row",
  }
});
