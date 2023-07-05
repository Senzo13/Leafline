import React from "react";
import { View, Text } from "react-native";
import styles from "./dashboard.styles";
import { CONTAINER } from "src/theme/styles";

const Dashboard = () => {
  return (
    <View style={CONTAINER.container}>
      <Text style={styles.txt}>Dashboard</Text>
    </View>
  );
};

export default Dashboard;
