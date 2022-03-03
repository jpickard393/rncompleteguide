import React from 'react';
import 'react-native';
import {render, fireEvent} from '@testing-library/react-native';
import GoalInput from './GoalInput';

// ToDo
// Test component is rendered successfully

// When btnAddGoal is clicked on GoalInput, I want to test that the enteredGoal
// is aded to the courseGoals state array in App.js

describe('Add button', () => {
  it('should add one item to the courseGoals array', () => {
    const {getByTestId} = render(<GoalInput />);
    const addGoalHandler = jest.fn();
    const eventData = {
      enteredGoal: 'Hello',
    };

    fireEvent.press(getByTestId('btnAddGoal'), eventData);
    // should now call addGoalHandler and set enteredGoal state to be what is entered in the text box
    expect(addGoalHandler).toHaveBeenCalledWith(eventData.enteredGoal);
  });
// test goallist 

});


//goallist test
// create mock data for cousegoals

// mock flatlist (not goallist)
// render goallist with coursegoals as input
// assert flatlist mock has recieved coursegoals as data attribute

