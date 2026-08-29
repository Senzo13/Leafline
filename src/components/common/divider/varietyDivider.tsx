import React from 'react';
import { View } from 'react-native';
import { useSettings } from '@context/settings.context';

const VarietyDivider = () => {
  const { theme } = useSettings();
  return (
    <View
      style={{
        height: 1,
        width: '50%',
        borderColor: theme.colors.gray,
        borderWidth: 0.5,
        borderRadius: 20,
        opacity: 0.5,
        alignSelf: 'center',
      }}></View>
  );
};

export default VarietyDivider;
