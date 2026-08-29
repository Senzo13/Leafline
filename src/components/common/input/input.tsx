import React from 'react';
import { TextInput } from 'react-native';
import styles from './style';
import { DarkTheme } from '@resources/constants/theme';

interface InputProps {
    placeholder?: string;
    secureTextEntry?: boolean;
    type?: 'primary' | 'secondary';
}

const Input: React.FC<InputProps> = ({ placeholder, secureTextEntry, type = 'primary' }) => (
    type === 'primary' ? (
        <TextInput
            placeholder={placeholder}
            placeholderTextColor={DarkTheme.colors.secondary}
            secureTextEntry={secureTextEntry}
            style={[styles.inputPrimary, styles.input]}
        />
    ) : (
        <TextInput
            placeholder={placeholder}
            placeholderTextColor={DarkTheme.colors.secondary}
            secureTextEntry={secureTextEntry}
            style={[styles.inputSecondary, styles.input]}
        />
    )
    );
    
    export default Input;