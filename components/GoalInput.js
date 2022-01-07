import React, { useState } from "react";
import { View, TextInput, Button, Modal } from "react-native";
import tw from "tailwind-rn";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={tw(`flex-1 justify-center items-center`)}>
        <TextInput
          placeholder="Enter your goals here!"
          style={tw(`border-2 p-2 w-4/5 rounded-lg`)}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={tw(`flex-row w-3/5 justify-between`)}>
          <View>
            <Button
              title="CANCEL"
              color="red"
              onPress={() => props.onAddCancel()}
            />
          </View>
          <View>
            <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;
