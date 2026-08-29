import { useSettings } from '@context/settings.context';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface CloseButtonProps {
  handleClose: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ handleClose }) => {
  const { theme } = useSettings();

  return (
    <TouchableOpacity onPress={handleClose} style={styles.button}>
      <Icon name="close" size={30} color={theme.colors.text} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
});

export default CloseButton;
