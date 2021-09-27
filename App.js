import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView, View, Text, ImageBackground} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.carContainer}>
        <ImageBackground source={require("./assets/images/ModelS.jpeg")} style={styles.image}/>
        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $69,860</Text>
        </View>
      </View>
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
  carContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  titles:{
    marginTop: "25%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
    color: "#000"
  },
  subtitle: {
    fontSize: 16,
    color: "#5C5E62"
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute"
  },
});
