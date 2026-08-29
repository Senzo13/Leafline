import { useSettings } from '@context/settings.context';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface CommonButtonProps {
  title?: string;
  handlePress: () => void;
  width?: number;
  height?: number;
  marginRight?: number;
  backgroundColor?: string;
}

const CommonButton: React.FC<CommonButtonProps> = ({
  title,
  handlePress,
  width,
  height,
  marginRight,
  backgroundColor,
}) => {
  const { theme } = useSettings();

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        ...styles.button,
        width: width ? width : 200,
        height: height ? height : 32,
        marginRight: marginRight ? marginRight : 0,
        padding: 0,
        backgroundColor: backgroundColor
          ? backgroundColor
          : theme.colors.secondary,
      }}>
      <Text style={{ ...theme.texts.textMedium, color: theme.colors.text }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CommonButton;
