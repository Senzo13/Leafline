// @ts-nocheck
import { useSettings } from '@context/settings.context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// @ts-ignore
import AddButton from '@components/common/button/add';
import LandCard from '@components/common/card/land';
import TipCard from '@components/common/card/tip';
import Weather from '@components/common/temperature/weather';
import { useUserProfile } from '@context/profile.context';
import { TipsService } from '@services/api/others/tips/tips';
import { RootStackParamList } from '@types/routes.types';
import { useTranslation } from 'react-i18next';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

interface HomeProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
}

const windowWidth = Dimensions.get('window').width;

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const { theme } = useSettings();
  const { profile } = useUserProfile();
  const { t } = useTranslation();
  const [tips, setTips] = useState([]);
  const { weather } = useUserProfile();
  const [currentIndex, setCurrentIndex] = useState(0);
  const refScrollView = useRef(null);

  const tempIndicator = weather.temp >= 0 ? '+' : '-';

  const onScroll = event => {
    const viewSize = windowWidth - 40;
    const contentOffset = event.nativeEvent.contentOffset.x;
    const selectedIndex = Math.floor(contentOffset / viewSize);
    setCurrentIndex(selectedIndex);
  };

  useEffect(() => {
    const fetchTips = async () => {
      const response = await TipsService.getTips();
      setTips(Array.isArray(response) ? response : []);
    };

    fetchTips();

    return () => {
      setTips([]);
    };
  }, []);

  return (
    <>
      <View
        style={{
          ...styles.container,
          backgroundColor: theme.colors.primary,
        }}>
        <View style={styles.welcomeSection}>
          <View>
            <Text
              style={{ ...theme.texts.textMedium, color: theme.colors.gray }}>
              {t('home.welcome.welcome')}, {profile.username}
            </Text>
            <Text
              style={{
                ...theme.texts.textBold,
                color: theme.colors.text,
              }}>
              {t('home.welcome.field')}
            </Text>
          </View>
          <MaterialIcon
            name="notifications"
            size={25}
            color={theme.colors.text}
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'column',
              gap: 28,
              marginBottom: 100,
            }}>
            {tips.length > 0 ? (
            <View style={{ height: 195 }}>
              <ScrollView
                horizontal={true}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                ref={refScrollView}
                onMomentumScrollEnd={onScroll}>
                {tips.map((tip, index) => (
                  <TipCard key={index} tip={tip} />
                ))}
              </ScrollView>
              <View style={styles.pagination}>
                {tips.map((_, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      const position = (windowWidth - 40) * index;
                      refScrollView.current.scrollTo({
                        x: position,
                        animated: true,
                      });
                      setCurrentIndex(index);
                    }}>
                    <View
                      style={[
                        styles.dot,
                        index === currentIndex && styles.activeDot,
                      ]}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            ) : null}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                marginTop: 20,
              }}>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 4,
                  }}>
                  <MaterialCommunityIcon
                    name="map-marker"
                    size={24}
                    color={theme.colors.text}
                  />
                  <Text
                    style={{
                      ...theme.texts.textSmall,
                      color: theme.colors.text,
                    }}>
                    {profile.country}, {profile.city}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 4,
                    marginLeft: 4,
                  }}>
                  <Text
                    style={{
                      ...theme.texts.titleLight,
                      color: theme.colors.text,
                    }}>
                    {tempIndicator}
                  </Text>
                  <Text
                    style={[
                      theme.texts.title,
                      {
                        color: theme.colors.text,
                      },
                    ]}>
                    {weather.temp.toFixed(1)} °C
                  </Text>
                </View>
              </View>
              <Weather size={60} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('HealthScan')}>
              <LinearGradient
                colors={['#0B5E2C', '#50B26C']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                locations={[0.2519, 0.6603]}
                style={styles.healthCheckButton}>
                <View>
                  <Text
                    style={{
                      ...theme.texts.subTitleRegular,
                      color: theme.colors.text,
                    }}>
                    {t('home.field.health.title')}
                  </Text>
                  <Text
                    style={{
                      ...theme.texts.textSmall,
                      color: theme.colors.gray,
                    }}>
                    {t('home.field.health.subtitle')}
                  </Text>
                </View>
                <Image
                  source={require('../../../assets/images/icons/icon-heart.png')}
                  style={{ width: 50, height: 50 }}
                />
              </LinearGradient>
            </TouchableOpacity>
            <View style={styles.landMenu}>
              <View style={styles.landMenuTitle}>
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      ...theme.texts.textUpper,
                      color: theme.colors.text,
                    }}>
                    {t('home.field.title')}
                  </Text>
                  {/* <Text
                    style={{
                      ...theme.texts.textSmall,
                      color: theme.colors.gray,
                    }}>
                    {t('home.field.subtitle')}
                  </Text> */}
                </View>
                <AddButton
                  onPress={() => navigation.navigate('LandCreation')}
                  icon="add"
                />
              </View>
            </View>

            {profile.fields && profile.fields.length > 0 ? (
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                }}>
                {profile.fields.map((field, index) => (
                  <LandCard
                    key={index}
                    navigation={navigation}
                    name={field.fieldTypes.name}
                    id={field.id}
                  />
                ))}
              </View>
            ) : (
              <TouchableOpacity
                onPress={() => navigation.navigate('LandCreation')}
                style={{ width: '100%' }}>
                <LinearGradient
                  colors={['#0B5E2C', '#50B26C']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  locations={[0.4, 0.6]}
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 12,
                    backgroundColor: theme.colors.secondary,
                    borderRadius: 12,
                  }}>
                  <Text
                    style={{
                      ...theme.texts.textRegular,
                      color: theme.colors.text,
                    }}>
                    Pas de terrains pour le moment
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 40,
    gap: 28,
  },
  fieldCard: {
    width: '100%',
    flexDirection: 'row',
    gap: 20,
    flexWrap: 'wrap',
  },
  welcomeSection: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pagination: {
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#50B26C',
    opacity: 0.5,
  },
  activeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#50B26C',
    opacity: 1,
  },
  healthCheckButton: {
    width: '100%',
    flexDirection: 'row',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  landMenu: {
    flexDirection: 'column',
    width: '100%',
    gap: 28,
  },
  landMenuTitle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Home;
