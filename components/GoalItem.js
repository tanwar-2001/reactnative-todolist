import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "tailwind-rn";

const GoalItem = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        props.onDelete(props.id);
      }}
    >
      <View style={tw(`bg-gray-400 p-3 border my-2 rounded-full`)}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;
