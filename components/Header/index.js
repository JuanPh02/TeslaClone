import React from "react";
import { View, Image, Linking, Pressable } from "react-native";

import styles from "./styles";

const url = "https://tesla.com";

const openURL = () => {
    Linking.openURL(url);
}

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.buttonMenu} onPress={openURL}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/logo.png")}
        />
      </Pressable>

      <Pressable
        onPress={() => {
          console.warn("Click on Menu");
        }}
      >
        <Image
          style={styles.menu}
          source={require("../../assets/images/menu.png")}
        />
      </Pressable>
    </View>
  );
};

export default Header;
