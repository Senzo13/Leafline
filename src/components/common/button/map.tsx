// @ts-nocheck
import { useSettings } from '@context/settings.context';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

interface TabMapButtonProps {
  title: string;
  icon: ImageSourcePropType;
  onPress: () => void;
}

const TabMapButton: React.FC<TabMapButtonProps> = ({
  title,
  icon,
  onPress,
}) => {
  const { theme } = useSettings();
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: theme.colors.tertiary,
      }}
      onPress={onPress}>
      <Image source={icon} style={{ width: 25, height: 25 }} />
      <Text style={{ ...theme.texts.textMedium, color: theme.colors.text }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 35,
    paddingHorizontal: 24,
    marginRight: 14,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 50,
    flexDirection: 'row',
    marginRight: 16,
  },
});

export default TabMapButton;
