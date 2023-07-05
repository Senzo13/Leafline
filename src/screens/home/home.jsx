import React from "react";
import { View, Text } from "react-native";
import styles from "./home.styles";
import { CONTAINER } from "src/theme/styles";

const Home = () => {
  return (
    <View style={CONTAINER.container}>
      <Text style={styles.txt}>Home</Text>
    </View>
  );
};

export default Home;
