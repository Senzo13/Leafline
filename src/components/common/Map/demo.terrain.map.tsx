import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, G, Line, Path, Polygon } from 'react-native-svg';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const DemoTerrainMap = () => (
  <View style={styles.container}>
    <Svg width="100%" height="100%" viewBox="0 0 390 210">
      <Path d="M0 0H390V210H0Z" fill="#D9D2C2" />
      <Path
        d="M310 0C294 28 300 53 323 76C347 101 354 131 346 163C341 182 348 197 369 210H390V0Z"
        fill="#6AA7B8"
      />
      <G stroke="#F6F1E7" strokeWidth="9" strokeLinecap="round">
        <Path d="M-15 44C67 31 133 49 205 31C258 18 302 24 335 48" />
        <Path d="M18 177C78 146 126 140 180 151C239 163 279 146 321 116" />
        <Path d="M63 -10C80 40 71 82 90 118C108 151 137 178 170 220" />
        <Path d="M214 -12C207 32 221 70 205 104C193 130 177 160 176 214" />
      </G>
      <G stroke="#ABA797" strokeWidth="2" strokeLinecap="round" opacity="0.9">
        <Line x1="0" y1="82" x2="296" y2="65" />
        <Line x1="9" y1="116" x2="298" y2="96" />
        <Line x1="119" y1="0" x2="131" y2="210" />
        <Line x1="260" y1="0" x2="250" y2="190" />
        <Path d="M0 202C54 192 79 165 114 142C149 119 179 103 225 102" />
      </G>
      <Polygon
        points="132,78 205,65 244,104 221,151 151,145 112,111"
        fill="#50B26C"
        fillOpacity="0.48"
        stroke="#087A3D"
        strokeWidth="4"
      />
      <Circle cx="177" cy="108" r="7" fill="#087A3D" stroke="#FFFFFF" strokeWidth="3" />
    </Svg>
    <View style={styles.label}>
      <MaterialCommunityIcon name="map-marker" size={18} color="#0B5E2C" />
      <View>
        <Text style={styles.city}>Marseille</Text>
        <Text style={styles.demo}>Terrain principal · Vue démo</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 190,
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#3D5D55',
    backgroundColor: '#D9D2C2',
  },
  label: {
    position: 'absolute',
    left: 12,
    bottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    paddingHorizontal: 11,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 252, 245, 0.94)',
  },
  city: {
    color: '#17332D',
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '700',
  },
  demo: {
    color: '#52645F',
    fontSize: 11,
    lineHeight: 14,
  },
});

export default DemoTerrainMap;
