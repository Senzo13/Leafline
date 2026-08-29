import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useSettings } from '@context/settings.context';

const LoadingComponent = () => {
  const { theme } = useSettings();

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.colors.secondary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 9999,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
});

export default LoadingComponent;
