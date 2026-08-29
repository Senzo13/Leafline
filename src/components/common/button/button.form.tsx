import { useSettings } from '@context/settings.context';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface ButtonFormProps {
  icon: string;
  label: string;
  onPress: () => void;
  height?: number;
}

const ButtonForm: React.FC<ButtonFormProps> = ({
  icon,
  label,
  onPress,
  height = 60,
}) => {
  const { theme } = useSettings();
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: theme.colors.tertiary50,
        borderColor: theme.colors.tertiary,
        height: height,
      }}
      onPress={onPress}>
      <Text
        style={{
          ...theme.texts.textSmall,
          color: theme.colors.gray,
        }}>
        {label}
      </Text>
      <Icon name={icon} size={20} color={theme.colors.gray} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 12,
    marginBottom: 8,
  },
});

export default ButtonForm;
