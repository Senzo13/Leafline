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
import { useFocusEffect } from '@react-navigation/native';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type AccordionProps = {
  title: string;
  subtitle?: string;
  expand: boolean;
  children: React.ReactNode;
};

const Accordion: React.FC<AccordionProps> = ({
  title,
  subtitle,
  expand = false,
  children,
}) => {
  const [expanded, setExpanded] = useState(false);
  const { theme } = useSettings();

  useFocusEffect(
    useCallback(() => {
      if (expand) {
        setExpanded(expand);
      }
    }, []),
  );

  const toggleExpanded = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={{ width: '100%' }}>
      <TouchableOpacity onPress={toggleExpanded} style={styles.row}>
        <View style={{ flexDirection: 'column', marginRight: 25 }}>
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
          name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          color={theme.colors.text}
          size={38}
        />
      </TouchableOpacity>
      {expanded && <View style={styles.content}>{children}</View>}
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

export default Accordion;

//  <Accordion
//  title="Mon Titre"
//  subtitle="Ma Sous-titre"
// >
//  <Text>Ceci est le contenu caché qui apparaît quand on clique sur l'accordion</Text>
// </Accordion>
