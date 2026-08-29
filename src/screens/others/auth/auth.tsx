// @ts-nocheck
import AlertBar from '@components/common/alert/alert';
import Button from '@components/common/button/button';
import Divider from '@components/common/divider/divider';
import FormInput from '@components/common/input/input.form';
import { Logo } from '@components/common/logo/logo';
import { useUserProfile } from '@context/profile.context';
import { useSettings } from '@context/settings.context';
import { CommonActions } from '@react-navigation/native';
import { AUTH_INPUTS } from '@resources/constants/form/form.layout';
import { AUTH_RULES } from '@resources/constants/form/form.validations';
import { CredentialsService } from '@services/api/core/credentials.service';
import { AuthService } from '@services/api/others/auth/auth';
import { useInputFocus } from '@utils/forms.utils';
import LottieView from 'lottie-react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './style';

const Auth = ({ navigation }) => {
  const { refreshProfile } = useUserProfile();
  const [alertMessage, setAlertMessage] = useState('');
  const [alertKey, setAlertKey] = useState(0);
  const { theme, changeLanguage, currentLanguage } = useSettings();
  const [codeMessage, setCodeMessage] = useState(500);
  const { t, i18n } = useTranslation();
  const [authType, setAuthType] = useState<'login' | 'register'>('login');
  const { isEditing, handleInputFocus, handleInputBlur } = useInputFocus();
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  const getProfile = useCallback(async () => {
    const profile = await CredentialsService.getProfile();
    if (profile) {
      reset({
        username: profile.username,
        email: profile.email,
        password: profile.password,
      });
    }
  }, [reset]);

  useEffect(() => {
    void getProfile().catch(() => undefined);
  }, [getProfile]);

  const validations = AUTH_RULES(getValues);

  const toggleAuthType = () => {
    setAuthType(authType === 'login' ? 'register' : 'login');
    reset();
  };

  const filteredInputs = AUTH_INPUTS.filter(
    input => authType === 'register' || input.authType === 'login',
  );

  const onSubmit = useCallback(
    handleSubmit(async data => {
      if (authType === 'login') {
        const response = await AuthService.login(data);

        if (response.code === 200) {
          // console.log('REFRESH PROFILE');
          refreshProfile();
          navigation.dispatch(
            CommonActions.reset({
              index: 0, // Cela définit l'écran actif sur le premier écran de la pile / du tab
              routes: [
                {
                  name: 'AppTabs',
                  state: {
                    // Définit l'état initial pour AppTabs, avec Home comme premier écran
                    routes: [{ name: 'Home' }],
                    index: 0, // S'assure que Home est l'écran actif dans AppTabs
                  },
                },
              ],
            }),
          );
          // console.log('Navigate to AppTabs with Home as first screen');
        } else {
          console.log('code res', response.code);
          setCodeMessage(response.code);
          showAlert(response.message);
        }
      } else if (authType === 'register') {
        try {
          const response = await AuthService.register(data);
          if (response.code === 200) {
            setAuthType('login');
          } else {
            setCodeMessage(response.code);
            showAlert(response.message);
          }
        } catch (error) {
          console.error(error);
        }
      }
    }),
    [handleSubmit, AuthService, navigation, authType],
  );

  const showAlert = (message: string) => {
    setAlertMessage(message);
    setAlertKey(prevKey => prevKey + 1); // Incrémente la clé pour forcer le re-render
  };

  return (
    <>
      <AlertBar key={alertKey} code={codeMessage} message={alertMessage} />

      <Text
        style={[
          theme.texts.textMediumUpper,
          {
            position: 'absolute',
            top: 74,
            right: 41,
            zIndex: 11,
            color: theme.colors.text,
          },
        ]}>
        {currentLanguage === 'en' ? 'en' : 'fr'}
      </Text>
      <TouchableOpacity
        style={{
          height: 60,
          width: 60,
          opacity: 1,
          position: 'absolute',
          right: 20,
          top: 52,
          zIndex: 10,
        }}
        onPress={() => changeLanguage(i18n.language === 'en' ? 'fr' : 'en')}>
        <LottieView
          source={require('assets/animations/button.json')}
          autoPlay
          loop
          style={{
            height: 60,
            width: 60,
          }}
        />
      </TouchableOpacity>

      <ImageBackground
        source={require('assets/images/backgrounds/background-leafline.png')}
        style={styles.backgroundImage}></ImageBackground>

      <View style={styles.overlay}>
        <Logo
          src={require('assets/images/logo/leafline_logo.png')}
          style={styles.logo}
        />

        <Text style={styles.header}>{t(`auth.${authType}.title`)}</Text>
        <KeyboardAwareScrollView
          style={{ flex: 1 }}
          resetScrollToCoords={{ x: 0, y: 0 }}
          scrollEnabled={true}>
          <ScrollView style={{ minHeight: 300 }}>
            <View style={{ paddingRight: 20, paddingLeft: 20 }}>
              {filteredInputs.map(({ key, label, isRequired }) => (
                <Controller
                  key={key}
                  control={control}
                  name={key}
                  rules={validations[key]}
                  defaultValue=""
                  render={({
                    field: { onChange, onBlur, value },
                    fieldState: { error },
                  }) => (
                    <FormInput
                      inputKey={key}
                      label={t(label)}
                      value={value}
                      isRequired={isRequired}
                      placeholder={
                        isEditing[key]
                          ? key === 'confirm_password'
                            ? `${t('auth.general.type_your')} ${t('auth.general.password')}`
                            : `${t('auth.general.type_your')} ${t(label)}`
                          : isRequired
                            ? `${t(label)} *`
                            : t(label)
                      }
                      onChangeText={onChange}
                      onBlur={e => {
                        onBlur();
                        handleInputBlur(key);
                      }}
                      onInputFocus={() => handleInputFocus(key)}
                      isInvalid={!!error}
                      errorMessage={error ? t(error.message) : ''}
                      parent={'auth'}
                      secureTextEntry={
                        key === 'password' || key === 'confirm_password'
                      }
                      icon={
                        key === 'password' || key === 'confirm_password'
                          ? 'lock'
                          : key === 'email'
                            ? 'email'
                            : key === 'username'
                              ? 'person'
                              : 'share-location'
                      }
                    />
                  )}
                />
              ))}
              <View
                style={{
                  width: '80%',
                  alignSelf: 'center',
                }}>
                <Button
                  title={t(`auth.${authType}.button`)}
                  type="primary"
                  onPress={onSubmit}
                />
              </View>
            </View>
          </ScrollView>
          <Divider />
          <View style={styles.registerSection}>
            <Text style={styles.textPrimary}>
              {t(`auth.${authType}.account`)}
            </Text>
            <Button
              title={t(`auth.${authType}.link`)}
              type="link"
              onPress={toggleAuthType}
            />
          </View>
          <View style={{ paddingBottom: 50 }}>
            <Button
              title={t(`auth.general.forgot_password_button`)}
              type="link"
              onPress={() => {
                // console.log('oublié');
              }}
            />
          </View>
          {/* <Text style={styles.textSecondary}>
            {t(`auth.general.other_methods`)}
          </Text>
          <Button
            title={t(`auth.general.google`)}
            type="google"
            onPress={() => {
              navigation.navigate('AppTabs', {
                screen: 'Home',
              });
            }}
          /> */}
        </KeyboardAwareScrollView>
      </View>
    </>
  );
};

export default Auth;
