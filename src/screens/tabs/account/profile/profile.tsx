// @ts-nocheck
import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useForm } from 'react-hook-form';
import { useSettings } from '@context/settings.context';
import { AuthService } from '@services/api/others/auth/auth';
import { ScrollView } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';
import { useUserProfile } from '@context/profile.context';
import { launchImageLibrary } from 'react-native-image-picker';
import { CredentialsService } from '@services/api/core/credentials.service';
import Button from '@components/common/button/button';
import HeaderTitle from '@components/layout/header.title';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FormInputController from '@components/common/input/input.form.controller';
import AlertBar from '@components/common/alert/alert';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
interface FormData {
  username: string;
  email: string;
  city: number;
  country: string;
}

const Profile = ({ navigation }) => {
  const { profile, refreshProfile } = useUserProfile();
  const { t } = useTranslation();
  const { theme } = useSettings();
  const [imageUri, setImageUri] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');
  const [codeMessage, setCodeMessage] = useState(200);
  const [alertKey, setAlertKey] = useState(0);

  const showAlert = (message: string) => {
    setAlertMessage(message);
    setAlertKey(prevKey => prevKey + 1); // Incrémente la clé pour forcer le re-render
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      // firstName: profile.firstName,
      // lastName: profile.lastName,
      username: profile.username,
      email: profile.email,
      city: profile.city,
      country: profile.country,
    },
  });

  const onSubmit = useCallback(
    handleSubmit(async (data: any) => {
      const response = await AuthService.updateProfile(data);

      if (!response) {
        setCodeMessage(404);
        showAlert(t('account.profile.update_requires_changes'));
        return;
      }

      if (response.code === 200) {
        await refreshProfile();
        setCodeMessage(200);
        showAlert(t('account.profile.update_success'));
      } else {
        setCodeMessage(response.code);
        showAlert(t('account.profile.update_error'));
      }
    }),
    [],
  );

  useEffect(() => {
    const loadImageUri = async () => {
      const savedImageUri = await CredentialsService.getProfileImage();

      if (savedImageUri) {
        setImageUri(savedImageUri);
      }
    };

    loadImageUri();
  }, []);

  const openImagePicker = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    });

    if (result.didCancel) {
      // console.log('User cancelled image picker');
    } else if (result.errorCode) {
      console.log('ImagePicker Error: ', result.errorMessage);
    } else if (result.assets && result.assets.length > 0) {
      const newImageUri = result.assets[0].uri;
      setImageUri(newImageUri);
      await AsyncStorage.setItem('profileImageUri', newImageUri);
    }
  };

  return (
    <>
      {/* En-tête */}
      <HeaderTitle
        icon="account-edit-outline"
        title={t('account.profile.title')}
      />
      <View
        style={{
          ...styles.container,
          backgroundColor: theme.colors.primary,
        }}>
        {/* @ts-ignore */}
        <AlertBar key={alertKey} code={codeMessage} message={alertMessage} />

        <TouchableOpacity
          onPress={openImagePicker}
          style={styles.imageContainer}>
          <Image
            style={[
              styles.avatar,
              {
                objectFit: 'cover',
                marginTop: 40,
                marginBottom: 20,
              },
            ]}
            source={
              imageUri ? { uri: imageUri } : require('assets/images/avatar.png')
            }
          />
          <View
            style={{
              position: 'absolute',
              top: 68,
              left: 28,
              backgroundColor: theme.colors.tertiary,
              opacity: 0.8,
              borderRadius: 50,
              padding: 7,
            }}>
            <MaterialIcons name="add-a-photo" size={18} color="white" />
          </View>
        </TouchableOpacity>

        <ScrollView style={styles.formContainer}>
          <View
            style={{
              paddingLeft: 20,
              paddingRight: 20,
            }}>
            <FormInputController
              control={control}
              name="username"
              label={t('account.profile.username')}
              placeholder={''}
              isInvalid={!!errors.username}
              errorMessage={errors.username?.message}
              rules={{
                required: t('auth.validations.username_required'),
              }}
            />
            <FormInputController
              control={control}
              name="email"
              label={t('account.profile.email')}
              placeholder={''}
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message}
              rules={{
                required: t('auth.validations.email_required'),
              }}
            />
            <FormInputController
              control={control}
              name="city"
              label={t('account.profile.city')}
              placeholder={''}
              isInvalid={!!errors.city}
              errorMessage={errors.city?.message}
              rules={{
                required: t('auth.validations.city_required'),
              }}
            />
            <FormInputController
              control={control}
              name="country"
              label={t('account.profile.country')}
              placeholder={''}
              isInvalid={!!errors.country}
              errorMessage={errors.country?.message}
              rules={{
                required: t('auth.validations.country_required'),
              }}
            />

            <View style={{ marginBottom: 20 }}>
              <Button
                title={t(`account.profile.button_validate`)}
                type="primary"
                onPress={onSubmit}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};
export default Profile;
