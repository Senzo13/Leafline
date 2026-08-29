// @ts-nocheck
import { useSettings } from '@context/settings.context';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface SuggestionsCardProps {
  title: string;
  description: string;
  icon: string;
}

const SuggestionCard: React.FC<SuggestionsCardProps> = ({
  title,
  description,
  icon,
}) => {
  const { theme } = useSettings();
  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.tertiary }}>
      <View style={styles.iconContainer}>
        <Icon name={icon} size={25} color={theme.colors.text} />
      </View>
      <View style={styles.textContainer}>
        <Text
          style={{
            ...theme.texts.textMedium,
            color: theme.colors.text,
          }}>
          {title}
        </Text>
        <Text
          style={{
            ...theme.texts.textSmall,
            color: theme.colors.text,
          }}>
          {description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 10,
    marginRight: 8,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: '#476D68',
    alignItems: 'center',
    marginRight: 8,
  },
  textContainer: {
    flexDirection: 'column',
    gap: 2,
  },
});

export default SuggestionCard;
