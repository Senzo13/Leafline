// @ts-nocheck
import { useSettings } from '@context/settings.context';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface BottomSheetInputControllerProps {
  label: string;
  placeholder: string;
  isInvalid: boolean;
  errorMessage: string | undefined;
  control: Control<any>;
  name: string;
  rules: any;
  defaultValue?: string;
  iconName?: string;
}

const BottomSheetInputController: React.FC<BottomSheetInputControllerProps> = ({
  label,
  placeholder,
  isInvalid,
  errorMessage,
  control,
  name,
  rules,
  defaultValue = '',
  iconName,
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
          <TouchableOpacity
            onPress={() => {
              this.textInput.focus();
            }}
            style={{
              ...styles.input,
              backgroundColor: isInvalid
                ? theme.colors.error
                : theme.colors.tertiary50,
              borderColor: isInvalid
                ? theme.colors.errorBorder
                : theme.colors.tertiary,
            }}>
            <BottomSheetTextInput
              ref={input => {
                this.textInput = input;
              }}
              value={value}
              placeholder={placeholder}
              placeholderTextColor={theme.colors.gray}
              onChangeText={onChange}
              onBlur={onBlur}
              style={{
                ...theme.texts.textSmall,
                color: theme.colors.text,
                padding: 0,
                margin: 0,
                flex: 1,
              }}
            />
            <Icon name={iconName} size={20} color={theme.colors.gray} />
          </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 12,
    width: '100%',
    height: 50,
    marginBottom: 8,
  },
});

export default BottomSheetInputController;
