// @ts-nocheck
import React from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';
import { useSettings } from '@context/settings.context';
import { ImageSourcePropType } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type NavButtonProps = {
  text: string;
  subText: string;
  icon: ImageSourcePropType;
  onPress: () => void;
};

const NavButton: React.FC<NavButtonProps> = ({
  text,
  subText,
  icon,
  onPress,
}) => {
  const { theme } = useSettings();
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: theme.colors.tertiary50,
        borderColor: theme.colors.tertiary,
      }}
      onPress={onPress}>
      <View
        style={[styles.iconContainer, { borderColor: theme.colors.tertiary }]}>
        <MaterialIcons name={icon} size={24} color={theme.colors.gray} />
      </View>
      <View style={styles.textContainer}>
        <Text
          style={{ ...styles.text, ...styles.title, color: theme.colors.text }}>
          {text}
        </Text>
        <Text
          style={{
            ...styles.text,
            ...styles.subtitle,
            color: theme.colors.text,
          }}>
          {subText}
        </Text>
      </View>
      <MaterialIcons
        name="arrow-forward-ios"
        size={24}
        color={theme.colors.gray}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 7,
    borderRadius: 15,
    borderWidth: 2,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  iconContainer: {
    borderWidth: 2,
    width: 50,
    height: 44, // Ajustez la hauteur pour correspondre à votre icône
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center', // Cela va centrer l'icône verticalement et horizontalement
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center', // Cela va centrer le texte verticalement
  },
  text: {
    textAlign: 'left',
  },
  title: {
    fontWeight: '600',
    letterSpacing: 1.2,
    fontSize: 18,
  },
  subtitle: {
    fontWeight: '400',
    letterSpacing: 1.2,
    opacity: 0.7,
    fontSize: 14,
  },
  arrow: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  icon: {
    width: 22,
    height: 22,
  },
});
export default NavButton;
