// @ts-nocheck
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './style';
import GoogleIcon from '../svg/svg-google';

interface ButtonProps {
  title?: string;
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  type?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'google'
    | 'link'
    | 'language'
    | 'rounded'
    | 'scan';
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPressIn,
  onPressOut,
  onPress,
  type = 'primary',
}) => {
  const baseStyle = styles.buttonBase;
  let specificStyle = {};
  switch (type) {
    case 'primary':
      specificStyle = styles.buttonPrimary;
      break;
    case 'secondary':
      specificStyle = styles.buttonSecondary;
      break;
    case 'tertiary':
      specificStyle = styles.buttonTertiary;
      break;
    case 'google':
      specificStyle = styles.buttonGoogle;
      break;
    case 'rounded' && 'scan':
      specificStyle = styles.buttonRounded;
      break;
    /////////////////////////////////////////////TEST I18NEXT BUTTON LANGUAGE STYLE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    case 'language':
      specificStyle = styles.buttonLanguage;
      break;
    /////////////////////////////////////////////TEST I18NEXT BUTTON LANGUAGE STYLE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    default:
      break;
  }
  const textStyle =
    type === 'google'
      ? styles.buttonTextGoogle
      : type === 'link'
        ? styles.buttonLink
        : /////////////////////////////////////////////TEST I18NEXT BUTTON LANGUAGE STYLE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
          type === 'language'
          ? styles.buttonTextLanguage
          : type === 'scan'
            ? styles.buttonScan
            : /////////////////////////////////////////////TEST I18NEXT BUTTON LANGUAGE STYLE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
              styles.buttonTextBase;
  return (
    <TouchableOpacity
      style={
        type === 'link'
          ? specificStyle
          : /////////////////////////////////////////////TEST I18NEXT BUTTON LANGUAGE STYLE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
            type === 'language'
            ? specificStyle
            : /////////////////////////////////////////////TEST I18NEXT BUTTON LANGUAGE STYLE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

              [baseStyle, specificStyle]
      }
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}>
      {type === 'google' && <GoogleIcon />}
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
