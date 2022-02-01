import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button, Modal} from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button
          color="red"
          title="Cancel"
          style={styles.cancelButton}
          onPress={() => props.onCancel()}
        />
        <Button title="Add" style={styles.addButton} onPress={addGoalHandler} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    padding: 20,
  },
  cancelButton: {
    padding: 20,
    marginBottom: 10,
  },
});

export default GoalInput;
