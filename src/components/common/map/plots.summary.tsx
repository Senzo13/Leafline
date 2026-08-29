import { useSettings } from '@context/settings.context';
import { useNavigation } from '@react-navigation/native';
// @ts-ignore
import { PlotData } from '@types/field.types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface PlotsSummaryProps {
  plot: PlotData;
}

const PlotsSummary: React.FC<PlotsSummaryProps> = ({ plot }) => {
  const { theme } = useSettings();
  const navigation = useNavigation();
  const { t } = useTranslation();

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.colors.tertiary50,
        borderColor: theme.colors.tertiary,
      }}>
      <View
        style={{
          ...styles.identifier,
          backgroundColor: theme.colors.tertiary50,
          borderColor: theme.colors.tertiary,
        }}
      />
      <Text style={{ ...theme.texts.textMedium, color: theme.colors.text }}>
        {plot.type}
      </Text>
      <View
        style={{ ...styles.colorCircle, backgroundColor: plot.color || 'red' }}
      />
      <TouchableOpacity
        // @ts-ignore
        onPress={() => navigation.navigate('PlotVisualisation', { plot: plot })}
        style={{
          ...styles.button,
          backgroundColor: theme.colors.tertiary50,
          borderColor: theme.colors.tertiary,
        }}>
        <Icon name="eye-outline" size={20} color={theme.colors.text} />
        <Text
          style={{
            ...theme.texts.textSmall,
            color: theme.colors.text,
            padding: 0,
            margin: 0,
          }}>
          {t('field.see')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
    borderWidth: 1,
  },
  identifier: {
    width: 15,
    height: 15,
    borderRadius: 2,
    borderWidth: 2,
  },
  colorCircle: {
    width: 20,
    height: 20,
    borderRadius: 50,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});

export default PlotsSummary;
