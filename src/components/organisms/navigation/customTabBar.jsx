/**
 * FR : Ce fichier contient le code de la navigation de l'application customisé avec le composant CustomTabBar.
 * ENG: This file contains the code of the application navigation customized with the CustomTabBar component.
 *
 * @description L'application utilise un navigateur de tabulation inférieure pour afficher trois écrans : Home, Dashboard et Settings.
 *              Chaque écran est associé à un icône actif et inactif pour la tabulation inférieure.
 *              Le composant CustomTabBar est utilisé pour personnaliser l'apparence de la tabulation inférieure.
 * @returns {React.Component} - Le composant racine de l'application.
 */

// Dependencies
import * as React from "react";
import { View } from "react-native";
import styles from "./customTabBar.styles";

// Dependencies custom render function for the tab bar icons
import { renderIcon } from "./customTabBarRender";

/**
 * Composant CustomTabBar
 * @param {Object} state - État de la navigation
 * @param {Object} descriptors - Descripteurs de la navigation
 * @param {Object} navigation - Navigation
 * @returns {React.Component} - Le composant CustomTabBar
 */

export default function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.navDesign}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const iconName = isFocused ? options.activeIcon : options.inactiveIcon;

        return (
          <View
            key={route.key}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {renderIcon(iconName, isFocused, navigation)}
            {isFocused && (
              <View
                style={{
                  backgroundColor: "#50B26C",
                  borderRadius: 20,
                  height: 3,
                  width: 40,
                  position: "absolute",
                  top: -10,
                }}
              />
            )}
          </View>
        );
      })}
    </View>
  );
}
