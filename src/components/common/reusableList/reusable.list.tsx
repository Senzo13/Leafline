// @ts-nocheck
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, TouchableOpacity, Text } from 'react-native';
import { useSettings } from '@context/settings.context';
import { useTranslation } from 'react-i18next';
import styles from './styles';

interface ListItem {
  text: string;
  selected?: boolean;
}

interface ReusableListProps {
  title: string;
  items: ListItem[];
  onSelect: (item: ListItem) => void;
  onClose: () => void; // Ajout de la prop onClose
}

const ReusableList: React.FC<ReusableListProps> = ({
  title,
  items,
  onSelect,
  onClose,
}) => {
  const { theme } = useSettings();
  const { t } = useTranslation();

  return (
    <>
      <View style={[styles.infoContainer, { paddingLeft: 20 }]}>
        <Text
          style={[
            styles.email,
            {
              color: theme.colors.text,
              fontFamily: theme.texts.textUpper.fontFamily,
              fontWeight: 'bold',
              fontSize: 18,
              letterSpacing: 1.4,
              height: 30,
            },
          ]}>
          {t(title)}
        </Text>
      </View>
      <View style={[styles.container]}>
        {items.map((item, index) => (
          <View
            key={index}
            style={{
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={[styles.itemContainer]}
              onPress={() => onSelect(item)}>
              <View style={styles.itemContent}>
                <Text
                  style={[
                    styles.email,
                    {
                      fontWeight: '400',
                      color: theme.colors.text,
                      marginLeft: 24,
                    },
                  ]}>
                  {t(item.text)}
                </Text>

                {/* Utilisation de l'opacité pour rendre l'icône invisible */}
                <MaterialCommunityIcons
                  name="check"
                  size={24}
                  color={theme.colors.yellow}
                  style={[styles.icon, !item.selected && { opacity: 0 }]}
                />
              </View>
            </TouchableOpacity>
            <LinearGradient
              colors={[
                'rgba(255, 255, 255, 0.1)',
                theme.colors.primary,
                'rgba(255, 255, 255, 0.1)',
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={[
                styles.separator,
                { backgroundColor: theme.colors.primary, opacity: 0.4 }, // Ajouter cette ligne
                index === items.length - 1 && styles.lastItemContainer,
              ]}
            />
          </View>
        ))}
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: theme.colors.primary,
              borderColor: theme.colors.tertiary50,
            },
          ]}
          onPress={onClose}>
          <Text
            style={{
              color: theme.colors.text,
              fontWeight: '600',
              fontSize: 16,
            }}>
            {t('account.button_close')}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ReusableList;
