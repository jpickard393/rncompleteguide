/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import GoalInput from './components/GoalInput/GoalInput';
import GoalList from './components/GoalList/GoalList';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      {id: Math.random().toString(), value: goalTitle},
    ]);
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />
      <GoalList courseGoals={courseGoals} />
      {/* <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            onDelete={() => {
              removeGoalHandler(itemData.item.id);
            }}
            title={itemData.item.value}
          />
        )}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
