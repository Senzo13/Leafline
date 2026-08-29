import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Polygon } from 'react-native-svg';

const DemoTerrainMap = () => (
  <View style={styles.container}>
    <Image
      source={require('../../../assets/images/maps/marseille-osm.png')}
      style={StyleSheet.absoluteFillObject}
      resizeMode="cover"
    />
    <Svg width="100%" height="100%" viewBox="0 0 390 210">
      <Polygon
        points="270,73 325,66 349,99 331,135 279,139 250,108"
        fill="#50B26C"
        fillOpacity="0.48"
        stroke="#087A3D"
        strokeWidth="4"
      />
      <Circle cx="297" cy="105" r="7" fill="#087A3D" stroke="#FFFFFF" strokeWidth="3" />
    </Svg>
    <Text style={styles.attribution}>© OpenStreetMap</Text>
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
  attribution: {
    position: 'absolute',
    right: 5,
    bottom: 4,
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.78)',
    color: '#42514D',
    fontSize: 8,
    lineHeight: 10,
  },
});

export default DemoTerrainMap;
