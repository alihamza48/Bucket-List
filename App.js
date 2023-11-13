import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function Addgoalhandler(enteredGoalText) {
    setCourseGoals((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoal) => {
      return currentCourseGoal.filter((goal) => {
        goal.id !== id;
      });
    });
  }

  return (
    <View style={styles.AppContainer}>
      <GoalInput onAddGoal={Addgoalhandler} />
      <View style={styles.container2}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDelete={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  AppContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
    marginTop: 10,
  },

  container2: {
    flex: 4,
  },
});
