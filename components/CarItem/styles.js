import { StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  carContainer: {
    width: width,
    height: height,
    backgroundColor: "#fff",
  },
  titles: {
    marginTop: "25%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "600",
    color: "#000",
  },
  subtitle: {
    fontSize: 16,
    color: "#5C5E62",
  },
  subtitleCTA: {
    textDecorationLine: 'underline',
    color: "#000"
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  buttonsContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 50,
  }
});

export default styles;
