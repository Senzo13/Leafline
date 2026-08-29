// @ts-nocheck
import { useSettings } from '@context/settings.context';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface ButtonProps {
  icon: string;
  onPress: () => void;
}

const AddButton: React.FC<ButtonProps> = ({ icon, onPress }) => {
  const { theme } = useSettings();
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: theme.colors.tertiary,
      }}
      onPress={onPress}>
      <Icon name={icon} size={20} color={theme.colors.text} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default AddButton;
