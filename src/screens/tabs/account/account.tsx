// @ts-nocheck
import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import { useSettings } from '@context/settings.context';
import { ScrollView } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';
import { useUserProfile } from '@context/profile.context';
import NavButton from '@components/common/button/button.nav';
import CustomBottomSheet, {
  CustomBottomSheetRef,
} from '@components/common/bottomSheet/bottom.sheet';
import ReusableList from '@components/common/reusableList/reusable.list';
import { useFocusEffect } from '@react-navigation/native';
import { CredentialsService } from '@services/api/core/credentials.service';
import { DarkTheme, LightTheme } from '@resources/constants/theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native';
import { LeaflineService } from '@services/api/core/leafline.service';
import LottieView from 'lottie-react-native';
import styles from './styles';

interface ListItem {
  text: string;
  selected?: boolean;
}

const Account = ({ navigation }) => {
  const { t } = useTranslation();
  const { profile } = useUserProfile();
  const [imageUri, setImageUri] = useState(null);
  const [langs, setLang] = useState<ListItem[]>([]);
  const [items, setItems] = useState<ListItem[]>([]);
  const bottomSheetRef = useRef<CustomBottomSheetRef>(null);
  const bottomSheetRefLang = useRef<CustomBottomSheetRef>(null);
  const { theme, toggleTheme, currentLanguage, changeLanguage } = useSettings();

  const loadImageUri = async () => {
    const savedImageUri = await CredentialsService.getProfileImage();

    if (savedImageUri) {
      setImageUri(savedImageUri);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadImageUri();
    }, []),
  );

  useEffect(() => {
    const initialItems: ListItem[] = [
      { text: 'general.lang_fr', selected: currentLanguage === 'fr' },
      { text: 'general.lang_en', selected: currentLanguage === 'en' },
    ];
    setLang(initialItems);
  }, []);

  useEffect(() => {
    const initialItems: ListItem[] = [
      { text: 'account.mode_dark', selected: theme === DarkTheme },
      { text: 'account.mode_light', selected: theme === LightTheme },
    ];
    setItems(initialItems);
  }, []);

  useFocusEffect(
    useCallback(() => {
      const blurListener = navigation.addListener('blur', () => {
        if (bottomSheetRef.current && bottomSheetRefLang.current) {
          bottomSheetRef.current?.close();
          bottomSheetRefLang.current?.close();
        }
      });

      return blurListener;
    }, []),
  );

  const handleSelect = (selectedItem: ListItem) => {
    if (selectedItem.text === 'account.mode_light') {
      setItems([
        { text: 'account.mode_dark', selected: false },
        { text: 'account.mode_light', selected: true },
      ]);
      if (theme === DarkTheme) {
        toggleTheme();
      }
    } else {
      setItems([
        { text: 'account.mode_dark', selected: true },
        { text: 'account.mode_light', selected: false },
      ]);
      if (theme === LightTheme) {
        toggleTheme();
      }
    }
  };

  const handleSelectLang = (selectedItem: ListItem) => {
    const updatedItems = langs.map(item => {
      if (item.text === selectedItem.text) {
        changeLanguage(selectedItem.text === 'general.lang_fr' ? 'fr' : 'en');
        return { ...item, selected: true };
      } else {
        changeLanguage(selectedItem.text === 'general.lang_fr' ? 'fr' : 'en');
        return { ...item, selected: false };
      }
    });

    setLang(updatedItems);
  };

  return (
    <>
      {/* En-tête */}
      <View style={[styles.header, { backgroundColor: theme.colors.tertiary }]}>
        <LottieView
          source={require('assets/animations/account.background.json')}
          autoPlay
          loop
          style={{
            width: '130%',
            height: 230,
            position: 'absolute',
            top: -80,
            left: -50,
            opacity: 0.1,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Auth');
            CredentialsService.clearTokens();
          }}>
          <MaterialIcons
            name="logout"
            size={30}
            color={theme.colors.text}
            style={{ paddingLeft: 10 }}
          />
        </TouchableOpacity>
        <Text
          style={[
            styles.headerText,
            theme.texts.textSmall,
            {
              color: theme.colors.text,
              borderColor: theme.colors.primary,
              borderTopColor: theme.colors.primary,
              borderWidth: 2,
              backgroundColor: theme.colors.primary,
              borderBottomWidth: 0,
              borderRadius: 8,
            },
          ]}>
          v {LeaflineService.VERSION}
        </Text>
      </View>
      <View style={styles.avatarContainer}></View>

      <Image
        style={[
          styles.avatar,
          {
            position: 'absolute',
            top: 90,
            zIndex: 1,
            alignSelf: 'center',
            alignItems: 'center',
            objectFit: 'cover',
          },
        ]}
        source={
          imageUri ? { uri: imageUri } : require('assets/images/avatar.png')
        }
      />

      {/* Contenu principal */}

      <View style={[{ backgroundColor: theme.colors.primary }]}>
        {profile.username ? (
          <Text
            style={[
              styles.name,
              {
                color: theme.colors.text,
                fontFamily: theme.texts.textUpper.fontFamily,
                letterSpacing: 1.4,
                fontSize: 26,
                fontWeight: '800',
              },
            ]}>
            {profile.username}
          </Text>
        ) : (
          <View style={[styles.name]}>
            <ContentLoader
              speed={2}
              width={210}
              height={50}
              viewBox="0 0 210 50"
              backgroundColor={theme.colors.tertiary50}
              foregroundColor={theme.colors.primary}>
              <Rect x="53" y="3" rx="6" ry="6" width="100" height="10" />
              <Rect x="4" y="27" rx="6" ry="6" width="200" height="10" />
            </ContentLoader>
          </View>
        )}
        {profile.email && (
          <Text
            style={[
              styles.email,
              {
                color: theme.colors.text,
                fontFamily: theme.texts.textUpper.fontFamily,
                fontSize: 16,
                letterSpacing: 1,
                fontWeight: '300',
              },
            ]}>
            {profile.email}
          </Text>
        )}
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: theme.colors.tertiary,
              borderColor: theme.colors.tertiary50,
              marginTop: 0,
              marginBottom: 10,
            },
          ]}
          onPress={() => navigation.navigate('Profile')}>
          <Text
            style={{
              color: theme.colors.text,
              fontSize: 16,
              fontWeight: '600',
            }}>
            {t('account.edit')}
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={[styles.container, { backgroundColor: theme.colors.primary }]}>
        <View style={styles.infoContainer}>
          <Text
            style={[
              styles.email,
              {
                color: theme.colors.text,
                fontFamily: theme.texts.textUpper.fontFamily,
                fontWeight: 'bold',
                letterSpacing: 1.4,
                fontSize: 18,
                marginTop: 20,
                marginBottom: 12,
              },
            ]}>
            {t('account.title')}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text
            style={[
              styles.label,
              {
                color: theme.colors.text,
                fontWeight: '500',
                letterSpacing: 1.1,
                fontSize: 14,
                opacity: 0.9,
                fontFamily: theme.texts.textMedium.fontFamily,
              },
            ]}>
            {t('account.country')}
          </Text>

          {profile.country ? (
            <Text
              style={[
                styles.info,
                {
                  color: theme.colors.text,
                  fontWeight: '300',
                  letterSpacing: 1.1,
                  fontSize: 14,
                  opacity: 0.9,
                  fontFamily: theme.texts.textMedium.fontFamily,
                },
              ]}>
              {profile.country}
            </Text>
          ) : (
            <View
              style={
                ([styles.info], { justifyContent: 'flex-end', paddingRight: 0 })
              }>
              <ContentLoader
                speed={2}
                width={205}
                height={20}
                viewBox="0 2 8 15"
                backgroundColor={theme.colors.tertiary50}
                foregroundColor={theme.colors.primary}>
                <Rect x="1" y="2" rx="6" ry="6" width="80" height="10" />
              </ContentLoader>
            </View>
          )}
        </View>
        <View
          style={{
            backgroundColor: '#2E4945',
            width: '90%',
            alignSelf: 'center',
            alignItems: 'center',
            height: 1,
            marginTop: 0,
            marginBottom: 10,
          }}></View>

        <View style={styles.infoContainer}>
          <Text
            style={[
              styles.label,
              {
                color: theme.colors.text,
                fontWeight: '500',
                letterSpacing: 1.1,
                fontSize: 14,
                opacity: 0.9,
                fontFamily: theme.texts.textMedium.fontFamily,
              },
            ]}>
            {t('account.username')}
          </Text>
          {profile.username ? (
            <Text
              style={[
                styles.label,
                {
                  color: theme.colors.text,
                  fontWeight: '300',
                  letterSpacing: 1.1,
                  fontSize: 14,
                  opacity: 0.9,
                  fontFamily: theme.texts.textMedium.fontFamily,
                },
              ]}>
              {profile.username}
            </Text>
          ) : (
            <View
              style={
                ([styles.info], { justifyContent: 'flex-end', paddingRight: 0 })
              }>
              <ContentLoader
                speed={2}
                width={105}
                height={20}
                viewBox="0 2 81 15"
                backgroundColor={theme.colors.tertiary50}
                foregroundColor={theme.colors.primary}>
                <Rect x="1" y="2" rx="6" ry="6" width="80" height="10" />
              </ContentLoader>
            </View>
          )}
        </View>

        <View
          style={{
            backgroundColor: '#2E4945',
            width: '90%',
            alignSelf: 'center',
            alignItems: 'center',
            height: 1,
            marginTop: 0,
            marginBottom: 10,
          }}></View>

        <View style={styles.infoContainer}>
          <Text
            style={[
              styles.label,
              {
                color: theme.colors.text,
                fontWeight: '500',
                letterSpacing: 1.1,
                fontSize: 14,
                opacity: 0.9,
                fontFamily: theme.texts.textMedium.fontFamily,
              },
            ]}>
            {t('account.email')}
          </Text>

          {profile.email ? (
            <Text
              style={[
                styles.label,
                {
                  color: theme.colors.text,
                  fontWeight: '300',
                  letterSpacing: 1.1,
                  fontSize: 14,
                  opacity: 0.9,
                  fontFamily: theme.texts.textMedium.fontFamily,
                },
              ]}>
              {profile.email}
            </Text>
          ) : (
            <View style={([styles.info], { justifyContent: 'flex-end' })}>
              <ContentLoader
                speed={2}
                width={205}
                height={20}
                viewBox="0 2 88 15"
                backgroundColor={theme.colors.tertiary50}
                foregroundColor={theme.colors.primary}>
                <Rect x="1" y="2" rx="6" ry="6" width="120" height="10" />
              </ContentLoader>
            </View>
          )}
        </View>

        <View style={styles.infoContainer}>
          <Text
            style={[
              styles.email,
              {
                color: theme.colors.text,
                fontFamily: theme.texts.textUpper.fontFamily,
                fontWeight: 'bold',
                fontSize: 18,
                letterSpacing: 1.4,
                marginTop: 10,
                marginBottom: 12,
              },
            ]}>
            {t('account.content')}
          </Text>
        </View>

        <NavButton
          text={t('account.theme')}
          subText={t('account.theme_subtitle')}
          icon={theme === DarkTheme ? 'dark-mode' : 'light-mode'}
          onPress={() => {
            bottomSheetRef.current?.expand();
          }}
        />

        <NavButton
          text={t('account.langn')}
          subText={t('account.langn_subtitle')}
          icon={'language'}
          onPress={() => {
            bottomSheetRefLang.current?.expand();
          }}
        />

        <NavButton
          text={t('account.cg')}
          subText={t('account.cg_subtitle')}
          icon={'privacy-tip'}
          onPress={() => {
            navigation.navigate('Cgu');
          }}
        />

        <View
          style={{
            width: '100%',
            alignSelf: 'center',
            alignItems: 'center',
            marginBottom: 20,
          }}></View>
      </ScrollView>

      <CustomBottomSheet ref={bottomSheetRef} height={40}>
        <ReusableList
          title="account.theme"
          items={items}
          onSelect={handleSelect}
          onClose={() => bottomSheetRef.current?.close()}
        />
      </CustomBottomSheet>

      <CustomBottomSheet ref={bottomSheetRefLang} height={40}>
        <ReusableList
          title="account.langn"
          items={langs}
          onSelect={handleSelectLang}
          onClose={() => bottomSheetRefLang.current?.close()}
        />
      </CustomBottomSheet>
    </>
  );
};

export default Account;
