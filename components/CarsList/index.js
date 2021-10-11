import React from "react";
import { View, FlatList, Dimensions } from "react-native";

import styles from "./styles";
import cars from "./cars";

import CarItem from "../CarItem";

const {width, height} = Dimensions.get('screen');

const CarsList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList 
        data={cars} 
        renderItem={({ item, id }) => (<CarItem car={item} />)}
        keyExtractor={(item) => item.id.toString()}
        snapToAlignment={'start'}
        decelerationRate={0.5}
        snapToInterval={height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CarsList;
