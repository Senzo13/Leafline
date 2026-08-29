import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSettings } from '@context/settings.context';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type ButtonAccordionProps = {
  title: string;
  subtitle: string;
};

const ButtonAccordion: React.FC<ButtonAccordionProps> = ({ title, subtitle }) => {
  const { theme } = useSettings();

  return (
    <View>
      <TouchableOpacity style={styles.row}>
        <View style={{ flexDirection: 'column' }}>
          <Text
            style={[
              styles.title,
              theme.texts.textUpper,
              { color: theme.colors.text },
            ]}>
            {title}
          </Text>
          <Text style={[theme.texts.textMedium, { color: theme.colors.gray }]}>
            {subtitle}
          </Text>
        </View>
        <MaterialIcons
          name={'keyboard-arrow-right'}
          color={theme.colors.text}
          size={38}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  content: {
    marginTop: 20,
    padding: 0,
  },
});

export default ButtonAccordion;

//  <Accordion
//  title="Mon Titre"
//  subtitle="Ma Sous-titre"
// >
//  <Text>Ceci est le contenu caché qui apparaît quand on clique sur l'accordion</Text>
// </Accordion>
