// @ts-nocheck
import Router from '@navigations/router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SettingsProvider } from '@context/settings.context';
import BootSplash from 'react-native-bootsplash';
import { LoadingProvider } from '@context/loading.context';
import { UserProfileProvider } from '@context/profile.context';
import ApiService from '@services/api/core/api.service';
import { decode } from 'base-64';
import { StatusBar } from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  ApiService.initLoadingContext({ isLoading, setIsLoading });

  if (!global.atob) {
    global.atob = decode;
  }

  useEffect(() => {
    changeNavigationBarColor('transparent');
    // Pour cacher les RedBox en mode développement
    if (__DEV__) {
      console.error = () => {};
      console.warn = () => {};
      console.info = () => {};
      console.reportErrorsAsExceptions = false;
    }
    BootSplash.hide({ fade: true });
  }, []);

  return (
    <UserProfileProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <LoadingProvider>
        <SettingsProvider>
          <View style={styles.container}>
            <Router />
          </View>
        </SettingsProvider>
      </LoadingProvider>
    </UserProfileProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E4945',
  },
});

export default App;
