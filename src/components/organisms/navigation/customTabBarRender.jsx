import React from "react";
import { Image, TouchableOpacity } from "react-native";

const icons = [
  {
    name: "Home",
    source: require("../../../assets/images/icons/navigation/icon-home.png"),
  },
  {
    name: "Dashboard",
    source: require("../../../assets/images/icons/navigation/icon-dashboard.png"),
  },
  {
    name: "Settings",
    source: require("../../../assets/images/icons/navigation/icon-settings.png"),
  },
];

export const renderIcon = (iconName, isFocused, navigation) => {
  const icon = icons.find((item) => item.name === iconName);

  if (!icon) return null;

  const onPress = () => {
    navigation.navigate(iconName);
  };

  const tintColor = isFocused ? "#50B26C" : "gray";

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        borderRadius: 20,
        height: 60,
        width: 80,
      }}
    >
      <Image
        source={icon.source}
        style={{
          tintColor,
        }}
      />
    </TouchableOpacity>
  );
};
