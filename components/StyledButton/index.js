import React from "react";
import { SafeAreaView, View, Text, Pressable } from "react-native";
import styles from "./styles";

const StyledButton = (props) => {
  /*=============================================
  =         Concepto Destructuracion            =

  const type = props.type;
  const content = props.content; 
  const onPress = props.onPress;

  =============================================*/
  const { type, content, onPress } = props; //Destructuracion 

  const backgroundColor = type === "primary" ? "#34353A" : "#DEDBDA";
  const textColor = type === "primary" ? "white" : "black";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
