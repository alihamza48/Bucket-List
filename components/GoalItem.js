import { StyleSheet, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable onPress={props.onDelete.bind(this, props.id)}>
      <Text style={styles.goals}>{props.text}</Text>;
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goals: {
    textAlign: "center",
    fontSize: 18,
    borderColor: "lightblue",
    borderWidth: 2,
    borderRadius: 10,
    margin: 2,
    padding: 5,
  },
});

export default GoalItem;
