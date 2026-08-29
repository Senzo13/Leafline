// @ts-nocheck
import LoadingComponent from '@components/common/loader/loader';
import { LoadingContext } from '@context/loading.context';
import { useSettings } from '@context/settings.context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CredentialsService } from '@services/api/core/credentials.service';
import { View, StyleSheet } from 'react-native';
import { TabBar } from './nav';
import HealthScan from '@screens/tabs/healthScan';
import Auth from '@screens/others/auth/auth';
import LandCreation from '@screens/others/land/land.creation';
import LandMap from '@screens/others/land/land.map';
import PlotVisualisation from '@screens/others/plot/plot.visualisation';
import Tutorial from '@screens/others/welcome/tutorial';
import Account from '@screens/tabs/account/account';
import Cgu from '@screens/tabs/account/cgu/cgu';
import Profile from '@screens/tabs/account/profile/profile';
import Field from '@screens/tabs/home/field/field';
import FieldVisualisation from '@screens/tabs/home/field/field.visualisation';
import Home from '@screens/tabs/home/home';
import ApiService from '@services/api/core/api.service';
import React, { useEffect, useState } from 'react';

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

function AppTabNavigator() {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={
          {
            activeIcon: 'Home',
            inactiveIcon: 'Home',
            headerShown: false,
          } as any
        }
      />
      <Tab.Screen
        name="HealthScan"
        component={HealthScan}
        options={
          {
            inactiveIcon: 'HealthScan',
            activeIcon: 'HealthScan',
            headerShown: false,
          } as any
        }
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={
          {
            inactiveIcon: 'Account',
            activeIcon: 'Account',
            headerShown: false,
          } as any
        }
      />
    </Tab.Navigator>
  );
}

function Router() {
  const { theme } = useSettings();
  const [initialRoute, setInitialRoute] = useState<string | undefined>(
    undefined,
  );
  const [isLoading, setIsLoading] = useState(false);
  ApiService.initLoadingContext({ isLoading, setIsLoading });

  useEffect(() => {
    async function initialize() {
      try {
        const seen = await CredentialsService.getTutorialState();
        // const seen = false;
        // const removeToken = await CredentialsService.clearTokens();
        const isConnected = await CredentialsService.isAuthenticated();

        if (isConnected) {
          // console.log('User is connected');
          setInitialRoute('AppTabs');
        } else if (seen === false) {
          // console.log('Tutorial not seen');
          setInitialRoute('Tutorial');
        } else {
          // console.log('User not connected');
          setInitialRoute('Auth');
        }
        setIsLoading(false);
      } catch (error) {
        console.log('Error in router:', error);
      }
    }

    initialize();
  }, []);

  const slideCardStyleInterpolator = ({ current, next, layouts }) => {
    return {
      cardStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
        transform: [
          {
            scale: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0.9, 1],
            }),
          },
        ],
      },
      overlayStyle: {
        opacity: next
          ? next.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0.5],
            })
          : 0,
      },
    };
  };

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <NavigationContainer>
        {initialRoute ? (
          <RootStack.Navigator
            screenOptions={{
              headerShown: false,
              navigationBarColor: 'red',
              backgroundColor: theme.colors.primary,
              gestureEnabled: true,
              cardStyle: { backgroundColor: theme.colors.primary },
            }}
            initialRouteName={initialRoute}>
            <RootStack.Screen name="Tutorial" component={Tutorial} />
            <RootStack.Screen name="Auth" component={Auth} />
            <RootStack.Screen name="AppTabs" component={AppTabNavigator} />
            <RootStack.Screen name="LandCreation" component={LandCreation} />
            <RootStack.Screen name="LandMap" component={LandMap} />
            <RootStack.Screen
              name="PlotVisualisation"
              component={PlotVisualisation}
            />
            <RootStack.Screen name="Profile" component={Profile} />
            <RootStack.Screen name="Cgu" component={Cgu} />
            <RootStack.Screen name="Fields" component={Field} />
            <RootStack.Screen
              name="FieldVisualisation"
              component={FieldVisualisation}
            />
          </RootStack.Navigator>
        ) : null}
      </NavigationContainer>
      {isLoading && (
        <View style={styles.loadingOverlay}>
          <LoadingComponent />
        </View>
      )}
    </LoadingContext.Provider>
  );
}

const styles = StyleSheet.create({
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
});

export default Router;
