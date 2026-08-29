import { useSettings } from '@context/settings.context';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// @ts-ignore
import { Tip } from '@types/tip.types';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface TipCardProps {
  tip: Tip;
}
const screenWidth = Dimensions.get('window').width;

const TipCard: React.FC<TipCardProps> = ({ tip }) => {
  const { theme } = useSettings();
  const { t } = useTranslation();

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.colors.tertiary,
      }}>
      <Image
        source={require('assets/images/logo/tips.png')}
        style={styles.image}
      />
      <View
        style={{
          ...styles.bullet,
          backgroundColor: theme.colors.primary,
        }}>
        <Icon name="lightbulb-on" size={15} color={theme.colors.secondary} />
        <Text
          style={{
            ...theme.texts.textMedium,
            color: theme.colors.text,
            margin: 0,
            padding: 0,
          }}>
          Tips
        </Text>
      </View>
      <ScrollView>
        <View style={styles.textSection}>
          <Text
            style={{
              ...theme.texts.text,
              color: theme.colors.text,
              width: 260,
            }}>
            {tip.title}
          </Text>
          <FlatList
            data={tip.tips}
            style={{ gap: 4 }}
            horizontal={false}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <View style={styles.tipsMenu}>
                <Icon
                  name="lightbulb-on"
                  size={15}
                  color={theme.colors.secondary}
                />
                <Text
                  style={{
                    ...theme.texts.textSmall,
                    color: theme.colors.gray,
                    width: 240,
                  }}>
                  {item}
                </Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth - 40,
    height: 175,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    gap: 16,
    position: 'relative',
  },
  bullet: {
    width: 72,
    paddingHorizontal: 12,
    paddingVertical: 4,
    gap: 4,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 2,
  },
  textSection: {
    flexDirection: 'column',
    gap: 8,
    zIndex: 2,
  },
  tipsMenu: {
    flexDirection: 'row',
    gap: 8,
    zIndex: 2,
  },
  image: {
    position: 'absolute',
    bottom: 0,
    right: -30,
    opacity: 0.5,
  },
});

export default TipCard;
