import React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const HealthAlert = () => (
  <Svg width="415" height="426.6" viewBox="0 0 430 441" fill="none">
    <Path
      d="M0 -2H430V421.895C430 421.895 401 440.326 213.5 440.984C26 441.642 0 421.895 0 421.895V-2Z"
      fill="url(#paint0_linear_1054_1276)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1054_1276"
        x1="215"
        y1="440.984"
        x2="146.324"
        y2="51.3514"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#C25D00" />
        <Stop offset="0.405" stopColor="#FFA24D" stopOpacity="0.87" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default HealthAlert;
