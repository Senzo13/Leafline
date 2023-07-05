/**
 *
 * FR : Ce fichier contient le code source d'une application React Native utilisant la bibliothèque de navigation "@react-navigation/native".
 * ENG: This file contains the source code of a React Native application using the "@react-navigation/native" navigation library.
 *
 * @description L'application utilise un navigateur de tabulation inférieure pour afficher trois écrans : Home, Dashboard et Settings.
 *              Chaque écran est associé à un icône actif et inactif pour la tabulation inférieure.
 *              Le composant CustomTabBar est utilisé pour personnaliser l'apparence de la tabulation inférieure.
 * @returns {React.Component} - Le composant racine de l'application.
 *
 */

// Dependencies
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Screens
import Home from "~screens/home/home";
import Dashboard from "~screens/dashboard/dashboard";
import Settings from "~screens/settings/settings";
// Components
import CustomTabBar from "~components/organisms/customTabBar";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            activeIcon: "home",
            inactiveIcon: "home-outline",
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            activeIcon: "list",
            inactiveIcon: "list-outline",
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            activeIcon: "settings",
            inactiveIcon: "settings-outline",
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
