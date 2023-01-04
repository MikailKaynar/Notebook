import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function GoalItem(props) {
  return (
    <View style={styles.listItem}>
      <Pressable
        android_ripple={{ color: "#CFD2CF" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={{ color: "#F5EDDC", padding:10}}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#A2B5BB",
    borderRadius: 10,
    fontSize: 20,
    margin: 10,
  },
});
