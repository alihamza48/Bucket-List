import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function Goalinputhandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function Addgoalhandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.container1}>
      <TextInput
        style={styles.input}
        placeholder="Enter Text"
        onChangeText={Goalinputhandler}
        value={enteredGoalText}
      ></TextInput>
      <Button title="Add Goal" onPress={Addgoalhandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    borderBottomColor: "silver",
    borderBottomWidth: 2,
    marginBottom: 20,
  },
  input: {
    borderColor: "black",
    borderWidth: 2,
    padding: 10,
    marginBottom: 4,
  },
});
