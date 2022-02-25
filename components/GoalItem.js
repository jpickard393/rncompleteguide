import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const GoalItem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete} activeOpacity={0.5}>
      <View style={styles.listItem}>
        <Text style={styles.listItemtext}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'green',
    borderColor: 'silver',
    borderWidth: 1,
  },
  listItemtext: {
    color: 'white',
  },
});

export default GoalItem;
