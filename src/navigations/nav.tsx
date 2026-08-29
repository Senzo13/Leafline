// @ts-nocheck
import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { renderIcon } from './render.icon';
import { useSettings } from '@context/settings.context';

interface Style {
  navDesign: ViewStyle;
}
interface CustomTabNavigationOptions extends BottomTabNavigationOptions {
  activeIcon: string;
  inactiveIcon: string;
  navigation: any;
}

export const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const { theme } = useSettings();

  return (
    <View style={[styles.navDesign, { backgroundColor: theme.colors.primary }]}>
      {state.routes.map((route, index) => {
        const options = descriptors[route.key]
          .options as CustomTabNavigationOptions;
        const isFocused = state.index === index;

        const iconName = isFocused ? options.activeIcon : options.inactiveIcon;

        return (
          <View
            key={route.key}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {renderIcon({ iconName, isFocused, navigation })}
            {isFocused && (
              <View
                style={{
                  backgroundColor: theme.colors.secondary,
                  borderRadius: 0,
                  height: 3,
                  width: 40,
                  position: 'absolute',
                  top: -10,
                }}
              />
            )}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create<Style>({
  navDesign: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 65,
    paddingTop: 10,
    paddingBottom: 20,
    borderTopWidth: 2,
    borderTopColor: '#2E4945', // var(--Dark-Principal-accentuation, #2E4945)
  },
});
