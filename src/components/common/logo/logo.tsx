import React from 'react';
import { Image, ImageStyle, ImageSourcePropType } from 'react-native';
import styles from './style';

interface LogoProps {
  style?: ImageStyle;
  src: ImageSourcePropType; // Utilisez ImageSourcePropType pour le type de src
}

export const Logo: React.FC<LogoProps> = ({ style, src }) => (
  <Image source={src} style={[styles.logo, style]} />
);
