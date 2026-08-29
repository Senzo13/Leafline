// @ts-nocheck
import { useSettings } from '@context/settings.context';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { StyleSheet, Text, TextInput, View } from 'react-native';

interface FormInputControllerProps {
  label: string;
  placeholder: string;
  isInvalid: boolean;
  errorMessage: string | undefined;
  control: Control<any>;
  name: string;
  rules: any;
  defaultValue?: string;
}

const FormInputController: React.FC<FormInputControllerProps> = ({
  label,
  placeholder,
  isInvalid,
  errorMessage,
  control,
  name,
  rules,
  defaultValue = '',
}) => {
  const { theme } = useSettings();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field: { onChange, onBlur, value } }) => (
        <View style={styles.container}>
          {isInvalid && (
            <Text
              style={{
                ...theme.texts.textSmall,
                color: theme.colors.errorBorder,
              }}>
              {errorMessage}
            </Text>
          )}
          <View
            style={{
              ...styles.input,
              backgroundColor: isInvalid
                ? theme.colors.error
                : theme.colors.tertiary50,
              borderColor: isInvalid
                ? theme.colors.errorBorder
                : theme.colors.tertiary,
            }}>
            <Text
              style={{ ...theme.texts.textSmall, color: theme.colors.gray }}>
              {label}
            </Text>
            <TextInput
              value={value}
              placeholder={placeholder}
              placeholderTextColor={theme.colors.gray}
              onChangeText={onChange}
              onBlur={onBlur}
              style={{
                ...theme.texts.text,
                color: theme.colors.text,
                padding: 0,
                margin: 0,
                width: '100%', // Assurez-vous que cette ligne est présente
              }}
            />
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 4,
  },
  input: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 60,
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 14,
    width: '100%', // Ensure the TextInput covers the full width
  },
});

export default FormInputController;
