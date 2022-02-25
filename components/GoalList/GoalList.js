import React from 'react';
import {FlatList} from 'react-native';
import GoalItem from '../GoalItem/GoalItem';

const GoalList = ({courseGoals}) => {
  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  return (
    <FlatList
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
    />
  );
};
export default GoalList;
