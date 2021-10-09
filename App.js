import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView, View, Text, ImageBackground} from "react-native";

//Components
import CarItem from "./components/CarItem";
import StyledButton from "./components/StyledButton";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CarItem/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
