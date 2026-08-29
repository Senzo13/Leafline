// @ts-nocheck
import React from 'react';
import { TouchableOpacity, GestureResponderEvent } from 'react-native';
import { useSettings } from '@context/settings.context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface RenderIconProps {
  iconName: string;
  isFocused: boolean;
  navigation: {
    navigate: (screenName: string) => void;
  };
}

export const renderIcon = ({
  iconName,
  isFocused,
  navigation,
}: RenderIconProps) => {
  const { theme } = useSettings();

  const iconMap: { [key: string]: string } = {
    Home: 'home',
    Account: 'manage-accounts',
    HealthScan: 'monitor-heart',
    Map: 'monitor-heart',
  };

  const icon = iconMap[iconName];

  if (!icon) return null;

  const onPress = (e: GestureResponderEvent) => {
    e.preventDefault();
    navigation.navigate(iconName);
  };

  const tintColor = isFocused ? theme.colors.secondary : theme.colors.gray;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 20,
        height: 60,
        width: 80,
      }}>
      <MaterialIcons
        name={icon}
        size={24}
        color={tintColor}
      />
    </TouchableOpacity>
  );
};
