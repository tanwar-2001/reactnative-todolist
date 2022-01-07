import { useState } from "react";
import { View, FlatList, Button } from "react-native";
import tw from "tailwind-rn";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals([
      ...courseGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    cancelAddGoal();
  };

  const removeGaolHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id != goalId);
    });
  };

  const cancelAddGoal = () => {
    setIsAddMode(false);
  };

  const [isAddMode, setIsAddMode] = useState(false);

  return (
    <View style={tw(`p-12`)}>
      <Button
        title="Add new Goal"
        color="teal"
        onPress={() => {
          setIsAddMode(true);
        }}
      />
      <GoalInput
        onAddGoal={addGoalHandler}
        visible={isAddMode}
        onAddCancel={cancelAddGoal}
      />
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            title={itemData.item.value}
            id={itemData.item.id}
            onDelete={removeGaolHandler}
          />
        )}
      />
    </View>
  );
}
