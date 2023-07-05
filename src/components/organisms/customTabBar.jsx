import * as React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <>
      <View
        tabBarOptions={{
          showLabel: false, // On masque les titres
        }}
        style={{
          flexDirection: "row",
          position: "absolute",
          bottom: 24,
          left: 16,
          right: 16,
          height: 60,
          paddingTop: 10,
          paddingBottom: 5,
          backgroundColor: "white",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          ...Platform.select({
            ios: {
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.3,
              shadowRadius: 3,
            },
            android: {
              elevation: 8,
            },
          }),
        }}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const iconName = isFocused
            ? options.activeIcon
            : options.inactiveIcon;

          return (
            <View
              key={route.key}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons
                name={iconName}
                size={24}
                color={isFocused ? "#50B26C" : "gray"}
                onPress={onPress}
              />
              {isFocused && (
                <View
                  style={{
                    backgroundColor: "#50B26C",
                    borderRadius: 20,
                    height: 3,
                    width: 40,
                    position: "absolute",
                    top: -10,
                  }}
                />
              )}
            </View>
          );
        })}
      </View>
    </>
  );
};

export default CustomTabBar;
