import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button, Modal} from 'react-native';

const GoalInput = ({visible, onAddGoal, onCancel}) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    console.log(enteredGoal);
    onAddGoal(enteredGoal); // feeds event back to caller App
    setEnteredGoal('');
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button
          testID="btnCancel"
          color="red"
          title="Cancel"
          style={styles.cancelButton}
          onPress={() => onCancel()}
        />
        <Button
          testID="btnAddGoal"
          title="Add"
          style={styles.addButton}
          onPress={addGoalHandler}
        />
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
