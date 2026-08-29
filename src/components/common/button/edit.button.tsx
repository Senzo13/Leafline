import { useSettings } from '@context/settings.context';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface EditButtonProps {
  onPress: () => void;
}

const EditButton: React.FC<EditButtonProps> = ({ onPress }) => {
  const { theme } = useSettings();
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: theme.colors.primary,
      }}
      onPress={onPress}>
      <Icon name="edit-square" size={24} color={theme.colors.text} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 75,
    right: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    zIndex: 100,
  },
});

export default EditButton;
