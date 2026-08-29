import React from 'react';
import { View } from 'react-native';
import { useSettings } from '@context/settings.context';

const ScanDivider = () => {
  const { theme } = useSettings();
  return (
    <View
      style={{
        height: 1,
        width: '80%',
        borderColor: theme.colors.secondary,
        borderWidth: 0.5,
        borderRadius: 20,
        opacity: 0.5,
        alignSelf: 'center',
        marginBottom: 15,
      }}></View>
  );
};

export default ScanDivider;
