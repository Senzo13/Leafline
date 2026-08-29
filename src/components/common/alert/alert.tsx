import { useSettings } from '@context/settings.context';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, Text } from 'react-native';
const AlertBar = ({ message, code }) => {
  const { theme } = useSettings();
  const [visible, setVisible] = useState(false);
  const heightAnim = useRef(new Animated.Value(0)).current; // Hauteur initiale de l'alerte

  const paddingAnim = heightAnim.interpolate({
    inputRange: [0, 65],
    outputRange: [0, 10],
    extrapolate: 'clamp',
  });

  const borderColorAnim = heightAnim.interpolate({
    inputRange: [0, 65],
    outputRange: [
      'rgba(0,0,0,0)',
      code !== 200 ? theme.colors.errorBorder : theme.colors.successBorder,
    ], // Couleur de la bordure
    extrapolate: 'clamp',
  });

  const shadowOpacityAnim = heightAnim.interpolate({
    inputRange: [0, 65],
    outputRange: [0, 0.3], // De 0 à 0.3 opacité
    extrapolate: 'clamp',
  });

  useEffect(() => {
    if (message) {
      setVisible(true);
      Animated.timing(heightAnim, {
        toValue: 65,
        duration: 450,
        useNativeDriver: false,
      }).start(() => {
        setTimeout(() => {
          Animated.timing(heightAnim, {
            toValue: 0,
            duration: 450,
            useNativeDriver: false,
          }).start(() => setVisible(false));
        }, 3000);
      });
    }
  }, [message, heightAnim]);

  if (!visible) return null;

  const backgroundColor =
    code !== 200 ? theme.colors.error : theme.colors.success;

  return (
    <Animated.View
      style={[
        styles.container,
        {
          height: heightAnim,
          backgroundColor,
          padding: paddingAnim,
          borderColor: borderColorAnim,
          borderWidth: heightAnim.interpolate({
            inputRange: [0, 65],
            outputRange: [0, 2], // De 0 à 2 pour la bordure
            extrapolate: 'clamp',
          }),
          shadowOpacity: shadowOpacityAnim,
          shadowRadius: 4,
          shadowOffset: { width: 0, height: 4 },
          elevation: heightAnim.interpolate({
            // Pour Android
            inputRange: [0, 65],
            outputRange: [0, 10], // De 0 à 10 pour l'élévation (ombre)
            extrapolate: 'clamp',
          }),
        },
      ]}>
      <Text style={styles.text}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 5,
    left: 5,
    right: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  text: {
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 16,
  },
});

export default AlertBar;
