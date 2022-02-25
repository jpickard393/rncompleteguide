import React from 'react';
import {FlatList} from 'react-native';
import GoalItem from '../GoalItem/GoalItem';

const GoalList = ({courseGoals, removeGoalHandler}) => {
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
