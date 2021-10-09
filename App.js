import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

//Components
import CarItem from "./components/CarItem";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CarItem
        name={"Model 3"}
        tagline={"Order Online for"}
        taglineCTA={"Touchless Delivery"}
        image={require("./assets/images/Model3.jpeg")}
      />
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
