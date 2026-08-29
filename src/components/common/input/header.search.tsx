// @ts-nocheck
import { useSettings } from '@context/settings.context';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface SearchInputProps {
  placeholder?: string;
  onChangeText?: (text: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  onChangeText,
}) => {
  const { theme } = useSettings();
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.colors.tertiary,
      }}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={{
          ...styles.input,
          ...theme.texts.textMedium,
          padding: 0,
          margin: 0,
        }}
        placeholderTextColor={theme.colors.text}
      />
      <Icon name="microphone" size={30} color={theme.colors.text} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    width: 250,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  input: {
    flex: 1,
  },
});

export default SearchInput;
