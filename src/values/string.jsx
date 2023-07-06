/**
 *
 * FR: Ce fichier contient le code source qui définit l'objet STRING de l'application.
 * ENG: This file contains the source code that defines the STRING object of the application.
 *
 * @description L'objet STRING regroupe les constantes SCREENS et COMPONENTS qui sont utilisées dans l'application.
 *              SCREENS est importé depuis le fichier "string.screens" et contient les noms des écrans utilisés dans la navigation.
 *              COMPONENTS est importé depuis le fichier "string.components" et contient les noms des composants utilisés dans l'application.
 *              L'application utilise un navigateur de tabulation inférieure pour afficher trois écrans : Home, Dashboard et Settings.
 *              Chaque écran est associé à un icône actif et inactif pour la tabulation inférieure.
 *              Le composant CustomTabBar est utilisé pour personnaliser l'apparence de la tabulation inférieure.
 * @returns {React.Component} - Le composant racine de l'application.
 *
 */

import { SCREENS } from "./screens";
import { COMPONENTS } from "./components";

export const STRING = {
  SCREENS,
  COMPONENTS,
};
