// @ts-nocheck
import ButtonForm from '@components/common/button/button.form';
import HeaderSearch from '@components/layout/header.search';
import { useSettings } from '@context/settings.context';
// @ts-ignore
import { LandService } from '@services/api/others/land/land';
import useUserLocation from '@services/hooks/useUserLocation';
//@ts-ignore
import CommonButton from '@components/common/button/common.button';
import { useUserProfile } from '@context/profile.context';
import { RootStackParamList } from '@types/routes.types';
import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type FormData = {
  type: string;
  geolocation: {
    latitude: number;
    longitude: number;
  };
};

interface LandCreationProps {
  navigation: RootStackParamList['LandCreation'];
}

const LandCreation: React.FC<LandCreationProps> = ({ navigation }) => {
  const [types, setTypes] = useState([]);
  const [selectedTypeId, setSelectedTypeId] = useState<string | null>(null); // Nouvel état pour stocker l'ID du type sélectionné
  const { t } = useTranslation();
  const { theme } = useSettings();
  const { profile } = useUserProfile();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();
  const { latitude, longitude } = useUserLocation();

  const setFieldTypes = async () => {
    const currentTypes = await LandService.getTypes();
    setTypes(currentTypes.data);
  };

  useEffect(() => {
    setFieldTypes();
  }, []);

  const onSubmit = useCallback(
    handleSubmit(async data => {
      try {
        const geolocation = [
          { latitude: 43.37361130234503, longitude: 5.42003631591797 },
          { latitude: 43.36562491300814, longitude: 5.418663024902345 },
          { latitude: 43.36812077264021, longitude: 5.409393310546876 },
        ];
        const dataWithGeolocation = {
          geolocation,
          fieldTypeID: selectedTypeId,
          color: '#d06ff8',
        };
        const field = await LandService.createField(dataWithGeolocation);

        navigation.navigate('LandMap', {
          fieldId: field.data.id,
          fieldTypeId: selectedTypeId,
        });
        return;
        // }
        // navigation.navigate('LandMap', { fieldId: profile.fields.id });
      } catch (error) {
        console.error('Error creating field:', error);
      }
    }),
    [latitude, longitude, navigation, selectedTypeId],
  );

  return (
    <>
      <HeaderSearch />
      <View
        style={{ ...styles.container, backgroundColor: theme.colors.primary }}>
        <View style={styles.textContainer}>
          <Text style={{ ...theme.texts.subTitle, color: theme.colors.text }}>
            {profile.fields
              ? t('land.details.title')
              : t('land.creation.title')}
          </Text>
          <Text style={{ ...theme.texts.textMedium, color: theme.colors.text }}>
            {profile.fields
              ? t('land.details.description')
              : t('land.creation.description')}
          </Text>
        </View>
        <View style={styles.formContainer}>
          {types && (
            <SelectDropdown
              data={types.map((type: any) => ({
                title: type.name.toUpperCase(),
                fieldTypeID: type.id,
              }))}
              onSelect={(selectedItem, index) => {
                setValue('type', selectedItem.title);
                setSelectedTypeId(selectedItem.fieldTypeID); // Mettez à jour l'ID du type sélectionné
              }}
              renderButton={(selectedItem, isOpened) => {
                return (
                  <View style={styles.dropdownButtonStyle}>
                    {selectedItem && (
                      <Icon
                        name={selectedItem.icon}
                        style={styles.dropdownButtonIconStyle}
                      />
                    )}
                    <Text style={styles.dropdownButtonTxtStyle}>
                      {(selectedItem && selectedItem.title.toUpperCase()) ||
                        'Selectionner le type de terrain'}
                    </Text>
                    <Icon
                      name={isOpened ? 'chevron-up' : 'chevron-down'}
                      style={styles.dropdownButtonArrowStyle}
                    />
                  </View>
                );
              }}
              renderItem={(item, index, isSelected) => {
                return (
                  <View
                    style={{
                      ...styles.dropdownItemStyle,
                      ...(isSelected && { backgroundColor: '#D2D9DF' }),
                    }}>
                    <Icon
                      name={item.icon}
                      style={styles.dropdownItemIconStyle}
                    />
                    <Text style={styles.dropdownItemTxtStyle}>
                      {item.title}
                    </Text>
                  </View>
                );
              }}
              showsVerticalScrollIndicator={false}
              dropdownStyle={styles.dropdownMenuStyle}
            />
          )}

          <ButtonForm
            label={t('land.creation.plotCreation')}
            icon="arrow-forward-ios"
            onPress={() => onSubmit()}
          />
          <View style={{ height: 30 }} />
          <CommonButton
            title={
              profile.fields
                ? t('land.details.update')
                : t('land.creation.submit')
            }
            handlePress={() => navigation.navigate('Home')}
            width={'100%'}
            height={50}

          />
        </View>
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
    paddingTop: 20,
  },
  textContainer: {
    width: '100%',
    flexDirection: 'column',
    gap: 2,
  },
  formContainer: {
    width: '100%',
    flexDirection: 'column',
    marginTop: 44,
  },
  dropdownButtonStyle: {
    width: '100%',
    height: 58,
    backgroundColor: 'rgba(46, 73, 69, 0.50)',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderColor: '#2E4945',
    borderWidth: 1,
    marginBottom: 30,

  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 12,
    fontWeight: '300',
    color: '#fff',
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
    color: '#fff',
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: 'rgb(46, 73, 69)',
    borderRadius: 4,
    marginTop: -30,
    height: 'auto',
    borderColor: '#50B26C',
    borderWidth: 1,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});

export default LandCreation;
