// @ts-nocheck
import { useSettings } from '@context/settings.context';
import React from 'react';
import { Controller } from 'react-hook-form';
import { StyleSheet, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTranslation } from 'react-i18next';

interface MapSearchInputProps {
  handleSubmit: () => void;
  control: any;
  name: string;
}

const MapSearchInput: React.FC<MapSearchInputProps> = ({
  control,
  name,
  handleSubmit,
}) => {
  const { theme } = useSettings();
  const { t } = useTranslation();

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.colors.primary,
        borderColor: theme.colors.tertiary,
      }}>
      <View style={styles.left}>
        <MaterialIcons
          name="location-on"
          size={24}
          color={theme.colors.yellow}
        />
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              value={value}
              placeholder={t('land.map.search')}
              placeholderTextColor={theme.colors.gray}
              style={{
                ...theme.texts.textSmall,
                color: theme.colors.gray,
                width: '100%',
                margin: 0,
                padding: 0,
              }}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
      </View>
      <View style={styles.right}>
        <View
          style={{
            ...styles.divider,
            backgroundColor: theme.colors.gray,
          }}
        />
        <TouchableOpacity onPress={handleSubmit}>
          <MaterialCommunityIcons
            name="google-circles-group"
            size={24}
            color={theme.colors.gray}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 50,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderWidth: 2,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  right: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  divider: {
    width: 1,
    height: '100%',
  },
});

export default React.memo(MapSearchInput);
