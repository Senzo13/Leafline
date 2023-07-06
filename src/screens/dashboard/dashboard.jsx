import React from "react";
import { View, Text } from "react-native";
// Exemple d'utilisation de la font family "poppins-bold" dans le composant Home (Fonctionne grâce au chargement du useEffect dans le App.jsx)

export default function Dashboard() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontFamily: "poppins-regular",
          fontSize: 20,
          color: "#50B26C",
        }}
      >
        Dashboard
      </Text>
    </View>
  );
}
