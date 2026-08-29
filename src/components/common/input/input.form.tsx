import { useSettings } from '@context/settings.context';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface FormInputProps {
  label: string;
  value: string;
  icon?: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  onBlur: (e: any) => void;
  isInvalid?: boolean;
  errorMessage?: string;
  parent?: string;
  onInputFocus?: () => void;
  onInputBlur?: () => void;
  isRequired?: boolean;
  secureTextEntry?: boolean;
  inputKey?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  value,
  icon,
  placeholder,
  onChangeText,
  onBlur,
  onInputFocus,
  onInputBlur,
  isInvalid,
  errorMessage,
  parent,
  isRequired = false,
  secureTextEntry = false,
  inputKey,
}) => {
  const { theme } = useSettings();

  const [isSecureEntry, setIsSecureEntry] = useState(secureTextEntry);

  const handleFocus = () => {
    if (onInputFocus) onInputFocus();
  };

  const handleBlur = (e: any) => {
    if (onInputBlur) onInputBlur();
    onBlur(e);
  };

  const toggleSecureEntry = () => {
    if (inputKey === 'password' || inputKey === 'confirm_password') {
      setIsSecureEntry(!isSecureEntry);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          ...(parent === 'auth' ? styles.authInputs : styles.input),
          backgroundColor: isInvalid
            ? theme.colors.error
            : theme.colors.tertiary50,
          borderColor: isInvalid
            ? theme.colors.errorBorder
            : theme.colors.secondary,
        }}>
        <View
          style={{
            flexDirection: 'column',
            width: '90%',
          }}>
          {value.length > 0 && (
            <Text
              style={{
                ...theme.texts.textSmall,
                color: theme.colors.gray,
              }}>
              {label}
              {isRequired ? ' *' : ''}
            </Text>
          )}
          <TextInput
            value={value}
            placeholder={placeholder}
            placeholderTextColor={theme.colors.gray}
            style={{
              ...theme.texts.text,
              color: theme.colors.text,
              padding: 0,
              margin: 0,
            }}
            onChangeText={onChangeText}
            onBlur={handleBlur}
            onFocus={handleFocus}
            secureTextEntry={isSecureEntry}
          />
        </View>

        {(inputKey === 'password' || inputKey === 'confirm_password') &&
        value.length > 0 ? (
          <TouchableOpacity onPress={toggleSecureEntry}>
            <Icon
              name={isSecureEntry ? icon : 'lock-open'}
              size={20}
              color={theme.colors.gray}
            />
          </TouchableOpacity>
        ) : (
          <Icon name={icon} size={20} color={theme.colors.gray} />
        )}
      </View>
      {isInvalid && (
        <Text
          style={{
            ...theme.texts.textSmall,
            color: theme.colors.errorBorder,
            display: 'flex',
            ...(parent === 'auth' ? styles.textAuth : {}),
          }}>
          {errorMessage}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 4,
    position: 'relative',
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
  },
  authInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    borderRadius: 10,
    color: 'white',
    fontSize: 16,
    height: 60,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '80%',
    alignSelf: 'center',
    marginBottom: 25,
    textAlign: 'center',
  },
  textAuth: {
    position: 'absolute',
    top: 62,
    left: '11%',
  },
});

export default FormInput;
