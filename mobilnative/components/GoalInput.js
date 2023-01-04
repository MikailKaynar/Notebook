import React from "react";
import { StyleSheet, View, Button, TextInput, Modal } from "react-native";
import { useState } from "react";

export default function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.agh(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Yeni bir not giriniz"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.cancelButton}>
            <Button color={"#EB1D36"} title="İptal" onPress={props.onCancel} />
          </View>
          <View style={styles.okButton}>
            <Button color={"#EB1D36"} title="Ekle" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#F5EDDC",
  },
  textInput: {
    padding: 10,
    width: "90%",
    borderWidth: 1,
    borderColor: "#A2B5BB",
    color:"#A2B5BB"
  },
  buttonContainer: {
    flexDirection: "row",
    padding: 10,
    marginHorizontal: 10,
  },
  cancelButton: {
    width:200,
    paddingHorizontal: 40,
  },
  okButton: {
    width:100,
    marginHorizontal:40
  },
});
