import React from "react";
import { View, Text } from "react-native";
import { CONTAINER } from "src/theme/styles";
import styles from "./settings.styles";
const Settings = () => {
  return (
    <View style={CONTAINER.container}>
      <Text style={styles.txt}>Settings</Text>
    </View>
  );
};

export default Settings;
